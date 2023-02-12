<template>
   <component :is="wrapperComponent" :offset-top="offsetTop" :offset-bottom="offsetBottom" @on-change="handleAffixStateChange">
		<div :class="`${prefix}-wrapper`" :style="wrapperStyle">
            <div :class="`${prefix}`">
                <div :class="`${prefix}-ink`">
                    <span v-show="showInk" :class="`${prefix}-ink-ball`" :style="{top: `${inkTop}px`}"></span>
                </div>
                <slot></slot>
            </div>
        </div>
	</component>
</template>
<script lang="ts">
export default {
    name:'ysyz-anchor'
}
</script>
<script setup lang="ts">
import { computed, provide, ref,nextTick, onMounted,  onBeforeUnmount, watch } from 'vue'
import {scrollTop} from './source/assist'
import {on, off} from './source/dom'
import {isClient} from './source/index'
import { useRoute } from 'vue-router'

const sharpMatcherRegx =  /#([^#]+)$/;

const prefix = 'ysyz-anchor'

const props = defineProps({
    affix: {
        type: Boolean,
        default: true
    },
    offsetTop: {
        type: Number,
        default: 0
    },
    offsetBottom: Number,
    bounds: {
        type: Number,
        default: 5
    },
    container: null,
    showInk: {
        type: Boolean,
        default: false
    },
    scrollOffset: {
        type: Number,
        default: 0
    }
})

const isAffixed = ref(false)
const inkTop = ref(0)
const animating = ref(false)
const currentLink:any = ref('')
const currentId:any = ref('')
const scrollContainer:any = ref(null)
const scrollElement:any = ref(null)
const wrapperTop = ref(0)
const upperFirstTitle = ref(true)
const links:any = []
const emit = defineEmits(['on-change','on-select'])
provide('currentlink',currentLink)


const wrapperComponent = computed(()=>{
    return props.affix ? "Affix" :'div'
})
const wrapperStyle = computed(()=>{
    return {
        maxHeight : props.offsetTop?`calc(100vh - ${props.offsetTop}px)` : `100vh`

    }
})
const containerIsWindow = computed(()=>{
    return scrollContainer.value === window;
})
const titlesOffsetArr = computed(()=>{
    const linkss = links.map(item=>{
        
        return item.link.href
    })
    const idArr = linkss.map(link =>{
        return link.split('#')[1]
    })
    let offsetArr:any = [];
    isClient && idArr.forEach(id => {
        const titleEle = document.getElementById(id);
        if (titleEle) offsetArr.push({
            link: `#${id}`,
            offset: titleEle.offsetTop - scrollElement.offsetTop
        });
    });
    console.log('offset为：'+offsetArr)
    return offsetArr;
})
const handleAffixStateChange = (state)=>{
    isAffixed.value = props.affix && state
}
const handleScroll = (e:any)=>{
    upperFirstTitle.value = !!titlesOffsetArr[0] && e.target.scrollTop < titlesOffsetArr[0].offset;
    if (animating) return;
    // this.updateTitleOffset();
    const scrollTop = isClient ? (document.documentElement.scrollTop || document.body.scrollTop || e.target.scrollTop) : 0;
    getCurrentScrollAtTitleId(scrollTop);
}
const handleHashChange = ()=>{
    if(!isClient) return 
    const url = window.location.href
    console.log('url为'+url)
    const sharpLinkMatch:any = sharpMatcherRegx.exec(url)
    console.log('sharpLinkMatch为'+sharpLinkMatch[1])
    if(!sharpLinkMatch) return
    currentLink.value = sharpLinkMatch[0]
    currentId.value = sharpLinkMatch[1]
}
const handleScrollTo = ()=>{
    if (!isClient) return;
    const anchor = document.getElementById(currentId.value);
    console.log('handelScrol的anchor为：'+anchor)
    const currentLinkElementA:any = document.querySelector(`a[data-href="${currentLink}"]`);
    console.log('currentA为：'+currentLinkElementA)
    let offset = props.scrollOffset;
    if (currentLinkElementA) {
        offset = parseFloat(currentLinkElementA.getAttribute('data-scroll-offset'));
    }

    if (!anchor) return;
    const offsetTop = anchor.offsetTop - wrapperTop.value - offset;
    animating.value = true;
    scrollTop(scrollContainer, scrollElement.scrollTop, offsetTop, 600, () => {
        animating.value = false;
    });
    handleSetInkTop();
}
const handleSetInkTop =()=>{
    if (!isClient) return;
    const currentLinkElementA:any = document.querySelector(`a[data-href="${currentLink}"]`);
    if (!currentLinkElementA) return;
    const elementATop = currentLinkElementA.offsetTop;
    const top = (elementATop < 0 ? props.offsetTop : elementATop);
    inkTop.value = top;   
}
const getCurrentScrollAtTitleId = (scrollTop)=>{
    let i = -1;
    let len = titlesOffsetArr.value.length;
    console.log('len为：'+len)
    let titleItem = {
        link: '#',
        offset: 0
    };
    scrollTop += props.bounds;
    while (++i < len) {
        let currentEle = titlesOffsetArr[i];
        let nextEle = titlesOffsetArr[i + 1];
        if (scrollTop >= currentEle.offset && scrollTop < ((nextEle && nextEle.offset) || Infinity)) {
            titleItem = titlesOffsetArr[i];
            break;
        }
    }
    currentLink.value = titleItem.link;
    handleSetInkTop();
}
const getContainer = ()=>{
    if (!isClient) return;
    scrollContainer.value = props.container ? (typeof props.container === 'string' ? document.querySelector(props.container) : props.container) : window;
    scrollElement.value = props.container ? scrollContainer.value : (document.documentElement || document.body);
            
}
const removeListener = ()=>{
    off(scrollContainer.value, 'scroll',handleScroll);
    off(window, 'hashchange', handleHashChange);
}
const init = ()=>{
    handleHashChange();
    nextTick(() => {
        removeListener();
        getContainer();
        wrapperTop.value = containerIsWindow ? 0 : scrollElement.offsetTop;
        handleScrollTo();
        handleSetInkTop();
        // this.updateTitleOffset();
        if (titlesOffsetArr[0]) {
            upperFirstTitle.value = scrollElement.scrollTop < titlesOffsetArr[0].offset;
        }
        on(scrollContainer.value, 'scroll', handleScroll);
        on(window, 'hashchange', handleHashChange);
    });
}
const addLink = (id, link)=>{
    links.push({id, link})
    console.log("links为"+links[0])
}
const removeLink = (id)=>{
    const linkIndex = links.findIndex(item => item.id === id);
    links.splice(linkIndex, 1);
}
watch(useRoute,()=>{
    console.log('router发生变化')
    currentLink.value = ''
    currentId.value = ''
    handleHashChange()
    nextTick(()=>{
        handleScrollTo()
    })
})
watch(props.container,()=>{
    init()
})
watch(currentLink,(newHref, oldHref)=>{
    emit('on-change',newHref, oldHref)
})
onMounted(()=>{
    init()
})
onBeforeUnmount(()=>{
    removeListener()
})
provide('handleHash',handleHashChange)
provide('handleScro',handleScrollTo)
provide('select',emit)
provide('add',addLink)
provide('init',init)
provide('remove',removeLink)
</script>

<style lang="scss" >
$prefix: 'ysyz-anchor';
.#{$prefix}{
    &-wrapper{
        overflow: auto;
        padding-left: 4px;
        margin-left: -4px;
    }

    &{
        position: relative;
        padding-left: $anchor-border-width;

        &-ink {
            position: absolute;
            height: 100%;
            left: 0;
            top: 0;
            &:before {
                content: ' ';
                position: relative;
                width: $anchor-border-width;
                height: 100%;
                display: block;
                background-color: $border-color-split;
                margin: 0 auto;
            }
            &-ball {
                display: inline-block;
                position: absolute;
                width: 8px;
                height: 8px;
                border-radius: 50%;
                border: 2px solid $primary-color;
                background-color: $body-background;
                left: 50%;
                transition: top $transition-time $ease-in-out;
                transform: translate(-50%, 2px);
            }
        }

        &.fixed &-ink &-ink-ball {
            display: none;
        }
    }

    &-link {
        padding: 8px 0 8px 16px;
        line-height: 1;

        &-title {
            display: block;
            position: relative;
            transition: all .3s;
            color: $text-color;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-bottom: 8px;
            &:only-child {
                margin-bottom: 0;
            }
        }

        &-active > &-title {
            color: $primary-color;
        }
    }

    &-link &-link {
        padding-top: 6px;
        padding-bottom: 6px;
    }
}

</style>