<template>
    <transition name="fade">
        <div class="vs-modal" flex center v-if="isOpened" @click.self="$emit('update:isOpened', false)">
            <transition name="modalAppear" appear>
                <slot/>
            </transition>
        </div>
    </transition>
</template>

<script>
export default {
    props: {
        isOpened: {
            type: Boolean,
            default: false
        },
        backgroundColor: {
            type: String,
            default: ""
        }
    }
};
</script>

<style>

.vs-modal{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.7);
    z-index: 50;
}

.vs-modal__content{
    width: 280px;
    height: 400px;
    max-height: 90%;
    background-color: white;
    border-radius: 25px;
    display: flex;
    box-shadow: 4px 4px 30px rgba(0,0,0,.3);
}
</style>