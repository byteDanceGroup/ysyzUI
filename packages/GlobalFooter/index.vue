<template>
    <div class="ysyz-global-footer">
        <div class="ysyz-global-footer-links" v-if="props.links.length || this.$slots.links">
        <slot name="links">
            <a
            v-for="item in props.links"
            :href = "item.href"
            :target="item.blankTarget ? '_blank' : '_self'"
            :key="item.key"
            :title="item.title"
            >
            {{ item.title }}
            </a>
        </slot>
    </div>
    <div class="ysyz-global-footer-copyright" v-if="copyright || this.$slots.copyright">
            <slot name="copyright">{{ copyright }}</slot>
        </div>
    </div>
    
</template>
<script lang="ts">
export default{
    name:'ysyz-globalfooter'
}
</script>
<script setup lang="ts">
const props = defineProps({

    links:{
        type:Array,
        default(){
            return []
        }
    },
    copyright:{
        type:String,
        default:""
    }

})

</script>

<style scoped lang="scss">
$prefix:ysyz-global-footer;
.#{$prefix}{
    margin: 48px 0 24px 0;
    padding: 0 16px;
    text-align: center;
    &-links{
        margin-bottom: 8px;
        a {
            background: transparent;
            text-decoration: none;
            outline: none;
            cursor: pointer;
            font-size: 14px;
            color: #808695;
            transition: all .1s ease-in-out;

            &:not(:last-child) {
                margin-right: 40px;
            }

            &:hover {
                color: #515a6e;
            }
        }
    }
    &-copyright{
        color: #808695;
        font-size: 14px;
    }
}
</style>