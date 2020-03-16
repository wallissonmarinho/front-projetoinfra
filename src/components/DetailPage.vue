<template>
    <main id="DetailPage">
        <div id="DetailContent">
            <slot/>
        </div>
    </main>
</template>

<script>
export default {

};
</script>

<style>
/* DETAIL PAGE */
#DetailPage {
    flex: 1;
    overflow: hidden;
}

#DetailContent {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>
