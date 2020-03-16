<template>
    <div class="toolbar" flex justify :style="{'background': background}">
        <div class="toolbar__actions">
            <slot name="Leading"/>
        </div>
        <div class="toolbar__title" :class="{'--force-center': centerTitle}">
            {{ title }}
        </div>
        <div class="toolbar__actions">
            <slot name="Actions"/>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'titulo'
        },
        centerTitle: {
            type: Boolean,
            default: true
        },
        background: {
            type: String,
            default: 'var(--primary-color)'
        }
    }
};
</script>

<style>
.toolbar{
    width: 100vw;
    height: 56px;
    position: relative;
    box-shadow: 0 0 10px rgba(0,0,0,.7);
    z-index: 10;
}
.toolbar__title{
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 15px;
    color: white;
    text-align: center;
    font-weight: var(--semi-bold)
}
.--force-center{
    word-wrap: none;
    white-space: nowrap;
    position: absolute;
    height: 100%;
    align-items: center;
    left: 50%;
    transform: translateX(-50%)
}
.toolbar__actions{
    height: 100%;
}

</style>