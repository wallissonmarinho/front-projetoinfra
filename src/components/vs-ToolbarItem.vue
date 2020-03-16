<template>
    <div class="toolbar-item" flex center @click="pressed()">
        <vs-icon :icon="icon" color="white" :size="size"/>
        <div ref="circle" class="toolbar-item__circle"></div>
    </div>
</template>

<script>
import VsIcon from '@/components/vs-Icon';
export default {
    props: {
        icon: {
            type: String,
            default: 'menu'
        },
        size: {
            type: String,
            default: '30px'
        }
    },
    components: {
        VsIcon
    },
    methods: {
        pressed() {
            let el = this.$refs.circle;
            
            el.style.animation = 'none';
            el.offsetHeight;
            el.style.animation = 'circleshow .4s linear';
            
            this.$emit('onPressed');
        }
    }
};
</script>

<style>
.toolbar-item{
    width: 56px;
    height: 56px;
    overflow: hidden;
    position: relative;
}
.toolbar-item__circle{
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 50px;
    top: calc(50% - 50px);
    left: calc(50% - 50px);
    background-color: rgba(255,255,255,.3);
    opacity: 0;
}
</style>