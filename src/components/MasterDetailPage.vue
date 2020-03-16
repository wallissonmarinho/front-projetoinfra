<template>
    <div id="MasterDetailPage">
        <div class="MasterDetailHeader">
            <slot name="Header"/>
        </div>
        <div id="MasterDetailContent">
            <slot name="MasterPage"/>
            <slot name="DetailPage"/>
        </div>
    </div>
</template>

<script>
export default {

};
</script>

<style>
/* MASTER DETAIL PAGE*/
#MasterDetailPage {
    display: flex;
    align-items: stretch;
    flex-direction: column;
    height: 100%;
    width: 100%;
    overflow: hidden;
}

.MasterDetailHeader{
    width: 100%;
}

#MasterDetailContent{
    display: flex;
    width: 100%;
    align-items: stretch;
    flex: 1;
    overflow: hidden;
}
</style>
