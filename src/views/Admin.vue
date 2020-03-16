<template>
    <master-detail-page>
        <vs-toolbar slot="Header" title="Pro Infra">
            <vs-toolbar-item icon='menu' slot="Leading" size="25px" @onPressed="paneOpened = true"/>
        </vs-toolbar>
        <master-page slot="MasterPage" :paneOpened.sync="paneOpened">
            <div flex column stretch expand class="menu">
                <div flex column center class="menu-header">
                    <vs-icon icon="work" color="white" size="60px"/>
                    <br/>
                    <p>Pro Infra</p>
                </div>
                <div flex align-center class="menu-item" @click="navigate('home')">
                    <vs-icon icon="home" color="white"/>
                    <span style="padding: 0 10px;">Home</span>
                </div>
                <div flex align-center class="menu-item"  @click="navigate('perfil')">
                    <vs-icon icon="user" color="white"/>
                    <span style="padding: 0 10px;">Perfil</span>
                </div>
                <div flex align-center class="menu-item" @click="modalOpened = true">
                    <vs-icon icon="exit" color="white"/>
                    <span style="padding: 0 10px;">Sair</span>
                </div>
            </div>
        </master-page>
        <detail-page slot="DetailPage">
            <router-view/>
            <vs-modal :isOpened="modalOpened">
                <div class="vs-modal__content">
                    <div flex column expand center justify>
                        <h3 style="width: 100%;text-align: center; color: var(--gray-1)">Tem certeza que deseja sair?</h3>
                        <br/>
                        <br/>
                        <br/>
                        <div flex>
                            <button flex-1 class="confirm" @click="modalOpened = false">Fechar</button>
                            <button flex-1 class="confirm" @click="logout()">Sim</button>
                        </div>
                    </div>
                </div>
            </vs-modal>
        </detail-page>
    </master-detail-page>
</template>

<script>
import MasterDetailPage from '@/components/MasterDetailPage'
import MasterPage from '@/components/MasterPage'
import DetailPage from '@/components/DetailPage'
import VsToolbar from '@/components/vs-Toolbar'
import VsToolbarItem from '@/components/vs-ToolbarItem'
import VsIcon from '@/components/vs-Icon'
import VsModal from '@/components/vs-Modal'
export default {
    components: {
        MasterDetailPage,
        MasterPage,
        DetailPage,
        VsToolbar,
        VsToolbarItem,
        VsIcon,
        VsModal
    },
    data(){
        return {
            paneOpened: false,
            modalOpened: false
        }
    },
    methods: {
        navigate(page) {
            this.paneOpened = false;
            this.$router.replace({name: page})
        },
        logout(){
            this.$router.replace({name: 'login'})
        }
    }
}
</script>

<style>
.menu{
    background-color: #0D2B48;
}
.menu-header{
    width: 100%;
    height: 130px;
    border-bottom: solid rgba(255,255,255,.3) 1px;
    color: white;
}
.menu-item{
    height: 55px;
    border-bottom: solid rgba(255,255,255,.3) 1px;
    padding: 0 10px;
    color: white;
    font-size: 14px;
    font-weight: var(--bold)
}

</style>