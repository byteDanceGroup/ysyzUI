<template>
	<div :class="anchorLinkClasses">
        <a :class="linkTitleClasses" :href="href" :data-scroll-offset="scrollOffset" :data-href="href" @click.prevent="goAnchor" :title="title">{{ title }}</a>
        <slot></slot>
    </div>
</template>
<script lang="ts">
export default{
    name:'ysyz-anchorLink'
}</script>
<script setup lang="ts">
    import { ref,computed, inject,nextTick, onBeforeMount, onBeforeUnmount, onMounted } from 'vue';
    import { useRouter,useRoute } from 'vue-router'
    import random from '../source/random_str'
    import {isClient} from '../source/index'
    const router = useRouter()
    
    let currentLink:any = inject('currentlink')
    const handleHashChange:any = inject('handleHash')
    const handleScrollTo:any = inject('handleScro')
    const emit:any = inject('select')
    const addLink:any = inject('add')
    const init:any = inject('init')
    const removeLink:any = inject('remove')
    const props = defineProps({
        href: String,
        title: String,
        scrollOffset: {
            type: Number,
            default: 0
            
        }
    })
    const prefix = 'ysyz-anchor-link'
    const id = random(6)
    const anchorLinkClasses = computed(()=>{
        return [
            prefix,
            currentLink === props.href? `${prefix}-active`:''
        ]
    })
    const linkTitleClasses = computed(()=>{
        return [
            `${prefix}-title`
        ]
    })
    const goAnchor  = ()=>{
        currentLink = props.href
        handleHashChange()
        handleScrollTo()
        emit('on-select',props.href)
        const isRoute = router
        if (isRoute) {
            const a:any = ref(props.href)
            router.push(a);
        } else {
            let windowHref:any = window.location.href
            isClient && (windowHref = props.href);
        }
        console.log('触发goAnchor')
    }
    onMounted(()=>{
        addLink(id,this)
        nextTick(()=>{
            init()
            console.log('触发nextTick')
        })
    })
    onBeforeUnmount(()=>{
        
        removeLink(id)
    })
</script>

<style scoped lang="scss">

</style>