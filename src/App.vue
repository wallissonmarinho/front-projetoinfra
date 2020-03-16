<template>
    <div id="app">
        <transition name="drillIn">
            <router-view/>
        </transition>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
* {
    font-family: 'Roboto', sans-serif;
    list-style: none;
    -webkit-tap-highlight-color: transparent;
    padding: 0;
    margin: 0;
    flex-shrink: 0;
    flex-grow: 0;
    outline: 0;
    align-items: flex-start;
    align-content: flex-start;
    box-sizing: border-box;
}

:root{
    --light: 300;
    --regular: 400;
    --medium: 500;
    --semi-bold:600;
    --bold: 700;
    --black: 800;

    --gradient: linear-gradient(180deg, #FF8642 0%, #FF6C18 42.5%);
    --primary-color: #0B2035;
    --primary-color-light: #0d2843;
    --primary-color-focus: #FFA471;
    --primary-color-dark: #D15914;
    --error: #B30909;
    --error-focus: #DA3A3A;
    --accent-color: #A18138;
    --gray-1: #666666 ; 
    --gray-2: #606060 ; 
    --gray-3: #E5E5E5;
    --gray-4: #F4F4F4;

    --bg: #0B2035;
}

body, html {
    height: 100%;
    width: 100%;
}
#app {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: var(--bg);
}

[flex] {
    display: flex;
    overflow: hidden;
}
[column] {
    flex-direction: column;
}
[justify] {
    justify-content: space-between;
}
[stretch] {
    align-items: stretch;
}
[distribute] {
    justify-content: space-evenly;
}
[align-center] {
    align-items: center;
}
[expand] {
    align-self: stretch;
    flex: 1;
}
[center] {
    align-items: center;
    justify-content: center;
}
[wrap] {
    flex-wrap: wrap;
}
[flex-1]{
    flex: 1;
}

[scroll] {
    overflow: auto;
}
button {
    background-color: transparent;
    height: 40px;
    border-radius: 5px;
}

span {
    color: #232323;
}

.confirm {
    width: 100px;
    border: solid var(--gray-1) 1px;
    font-weight: var(--bold);
    margin: 0 15px;
}
.submit {
    border: solid var(--accent-color) 1px;
    width: 100%;
    color: var(--accent-color);
}

.drillIn-enter, .drillIn-leave-to{
    opacity: 0;
    transform: scale(.95);
}
.drillIn-enter-active, .drillIn-leave-active{
    transition: .3s;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.modalAppear-enter, .modalAppear-leave-to{
    opacity: 0;
}

.modalAppear-enter-active{
    animation: modalShow .3s ease-out;
    transition: .3s;
}

.modalAppear-leave-active{
    transition: .3s;
}

.errorAppear-enter, .errorAppear-leave-to{
    opacity: 0;
}

.errorAppear-enter-active {
    width: 100%;
    height: 100%;
    position:absolute;
    animation: modalShow .3s ease-out;
    transition: .3s;
}

.errorAppear-leave-active{
    width: 100%;
    height: 100%;
    position:absolute;
    opacity: 0;
    transition: .3s;
}
</style>
