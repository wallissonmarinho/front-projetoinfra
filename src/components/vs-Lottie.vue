<template>
    <div ref="animation" class="success-animation" :style="[{'width': size},{'height': size}]">
    </div>
</template>

<script>
import lottie from "lottie-web";

export default {
    mounted() {
        this.animation = lottie.loadAnimation({
            container: this.$refs.animation, // the dom element
            renderer: 'svg',
            loop: false,
            autoplay: false,
            animationData: require('@/assets/lottie/'+ this.animationData)
        });
        if(this.autoPlay) {
            this.animation.play();
        }
        if(this.loop) {
            this.animation.loop = true;
        }
    },
    props: {
        animationData: {
            type: String,
            required: true
        },
        autoPlay: {
            type: Boolean,
            default: true
        },
        loop: {
            type: Boolean,
            default: false
        },
        size: {
            type: String,
            default: "120px"
        }
    },
    data() {
        return {
            animation: undefined,
        };
    },
    methods: {
        stop() {
            this.animation.stop();
        },
        play(){
            this.animation.play();
        }
    },
    destroyed(){
        setTimeout(() => {
            this.animation.destroy();
        }, 300);
    }
};
</script>

<style>

</style>