<template>
    <nav class="master-page">
        <transition name="shadow">
            <div class="shadow" v-if="paneOpened" @click="$emit('update:paneOpened', false)"></div>
        </transition>
        <ul class="master-page__menu" :class="{'--closed ': !paneOpened}">
            <slot/>
        </ul>
    </nav>
</template>

<script>
export default {
    props: {
        paneOpened: {
            default: true,
            type: Boolean
        },
    },
};
</script>

<style>
/* MASTER PAGE*/
.master-page {
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 50;
    background-color: red;
}

.master-page__menu{
    display: flex;
    transition: transform .4s;
    overflow: hidden;
    z-index: 55;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 280px;
    background-color: red;
}

.--closed {
    will-change: transform;
    transform: translateX(-100%);
}

.shadow {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0; 
    background-color: rgba(0,0,0,0.5);
    z-index: 9;
}
.shadow-enter, .shadow-leave-to{
    opacity: 0;
}
.shadow-enter-active{
    transition: .4s;
}
.shadow-leave-active{
    transition: .7s;
}
</style>
