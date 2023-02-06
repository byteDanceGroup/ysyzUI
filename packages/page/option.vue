<template>
    <div class="Here!" v-if="showSizer || showElevator" :class="optsClasses">
        
        <div v-if="showElevator" :class="ElevatorClasses">
            跳至<input
              type="text"
              :value="_current"
              autocomplete="off"
              spellcheck="false"
              @keyup.enter="changePage"
            >页
        </div>
    </div>
</template>
<script lang="ts">
export default{
    name:"ysyz-options"
}</script>
<script setup lang="ts">
import { computed, ref ,watch} from "vue";

const prefix = 'ysyz-page'

const isValueNumber = (value)=>{
    return (/^[1-9][0-9]*$/).test(value + '');
}
const props = defineProps({
    pageSizeOpts: Array,
    showSizer: Boolean,
    showElevator: Boolean,
    current: Number,
    _current: Number,
    pageSize: Number,
    allPages:{
        type:Number,
        default:0
    },
    isSmall: Boolean,
    placement: String,
    transfer: Boolean
})
const currentPageSize = ref(props.pageSize)
const emit = defineEmits(['on-size','on-page'])
watch(()=>currentPageSize.value,(val)=>{
    currentPageSize.value = val
})
const size = computed(()=>{
    return props.isSmall ? 'small' : 'default';
})
const optsClasses = computed(()=>{
    return [
            `${prefix}-options`
        ];
})
const sizerClasses = computed(()=>{
    return[
    `${prefix}-options-sizer`
    ]
})
const ElevatorClasses = computed(()=>{
    return [
    `${prefix}-options-elevator`
    ]
})
const changeSize = ()=>{
    emit('on-size', currentPageSize);
}
const changePage = (event)=>{
    let val = event.target.value.trim();
    let page = 0;

    if (isValueNumber(val)) {
        val = Number(val);
        if (val != props.current) {

            if (val > props.allPages) {
                page = props.allPages;
            } else {
                page = val;
            }
        }
    } else {
        page = 1;
    }

    if (page) {
        emit('on-page', page);
        event.target.value = page;
    }
}
</script>

<style scoped lang="scss">
    .ysyz-page-options {

        display: inline-block;
        vertical-align: middle;
        //float: left;
        margin-left: 15px;
        &-sizer {
            display: inline-block;
            //float: left;
            margin-right: 10px;
        }

        &-elevator {
            display: inline-block;
            vertical-align: middle;
            //float: left;
            height: 32px;
            line-height: 32px;
            input {
                text-indent:8px;
                top: 2px;
                bottom: 2px;
                padding-left:$input-padding-horizontal;
                background: #fff;
                height: 24px;
                margin: 0;
                padding: 0;
                list-style: none;
                border-radius: 4px;
                margin: 0 8px;
                width: 32px;
                border: 1px solid #dcdee2;
                color: $text-color;
                &:hover {
                   border: 1px solid $primary;
                   transition: all 0.2s ease-in-out;
                }
                &:focus{
                    outline:none;
                    border: 1px solid $primary;
                    box-shadow: 0 0 0 2px rgb(45 140 240 / 20%);
                }
            }
             
        }
    }
   
</style>