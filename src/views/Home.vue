<template>
    <div class="home">
        <vl-map :load-tiles-while-animating="true"
                :load-tiles-while-interacting="true"
                data-projection="EPSG:4326"
                style="height: 100%; width: 100%;">
            <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation"></vl-view>

            <vl-overlay :position="geolocPosition">
                <template>
                    <img class="position" src="@/assets/position.png"/>
                </template>
            </vl-overlay>

            <vl-overlay :position="pins[0]">
                <template>
                    <img class="pin" src="@/assets/pins/pin-buraco.png"/>
                </template>
            </vl-overlay>

            <vl-layer-tile id="osm">
                <vl-source-osm></vl-source-osm>
            </vl-layer-tile>
        </vl-map>
        
        <div class="fab" flex center @click="modalOpened = true">
            <vs-icon icon="alert" color="white" size="30px"/>
        </div>

        <vs-modal :isOpened.sync="modalOpened">
            <div class="vs-modal__content" flex column stretch>
                <div flex center class="vs-modal__header">
                    <span><b>Novo Alerta</b></span>
                </div>
                <div class="vs-modal__body">
                    <div class="modal-item">
                       <div flex column center class="modal-item__content" :class="{'--selected': pin.tipo == 0}" @click="pin.tipo = 0">
                           <vs-icon icon="luz" :color="pin.tipo == 0 ? 'white' : 'var(--primary-color)'" size="50px"/>
                           <span class="problema-titulo">Iluminação</span>
                       </div>
                    </div>
                    <div class="modal-item">
                       <div flex column center class="modal-item__content" :class="{'--selected': pin.tipo == 1}" @click="pin.tipo = 1">
                           <vs-icon icon="esgoto" :color="pin.tipo == 1 ? 'white' : 'var(--primary-color)'" size="50px" />
                           <span class="problema-titulo">Saneamento</span>
                       </div>
                    </div>
                    <div class="modal-item">
                       <div flex column center class="modal-item__content" :class="{'--selected': pin.tipo == 2}" @click="pin.tipo = 2">
                           <vs-icon icon="buraco" :color="pin.tipo == 2 ? 'white' : 'var(--primary-color)'" size="50px"/>
                           <span class="problema-titulo">Buraco na pista</span>
                       </div>
                    </div>
                   
                   
                </div>
                <div class="vs-modal__footer" flex center>
                    <p class="confirmar" @click="tipoSelecionado()">Confirmar</p>
                </div>
            </div>
        </vs-modal>

        <vs-modal :isOpened.sync="descricaoModal">
            <div class="vs-modal__content" flex column stretch>
                <div flex center class="vs-modal__header">
                    <span><b>Descrição do alerta</b></span>
                </div>
                <div class="vs-modal__body" style="padding: 30px;">
                    <textarea placeholder="Descreva o problema" class="mensagem" v-model="pin.descricao">

                    </textarea>
                </div>
                <div class="vs-modal__footer" flex center @click="cadastrarChamado()">
                    <p class="confirmar">Confirmar</p>
                </div>
            </div>
        </vs-modal>
    </div>
</template>

<script>
import VsIcon from '@/components/vs-Icon';
import VsModal from '@/components/vs-Modal';
export default {
    mounted(){
        navigator.geolocation.watchPosition(this.onSuccess, this.onError, { timeout: 30000 });
    },
    components: {
        VsIcon,
        VsModal
    },
    data(){
        return {
            geolocPosition: [-34.858889, -7.126884],
            zoom: 15,
            center: [-34.879540, -7.127867],
            rotation: 0,
            pins: [
                [-34.879540, -7.127867]
            ],
            modalOpened: false,
            descricaoModal: false,
            pin: {
                tipo: -1,
                descricao: '',
                coordenada: [0, 0]
            }
        }
    },
    methods: {
        tipoSelecionado(){
            this.modalOpened = false;
            this.descricaoModal = true;
        },
        onSuccess(position) {
            this.geolocPosition = [position.coords.longitude, position.coords.latitude];
        },
        onError(error) {
            console.log(error)
        },
        cadastrarChamado(){
            const chamado = {
                "data": new Date().toLocaleDateString(),
                "descricao": this.pin.descricao,
                "latitude": this.geolocPosition[0],
                "longitude": this.geolocPosition[1],
                "tipo_chamado": this.pin.tipo,
                "id_usuario": this.id_usuario
            }
            this.$http.post('chamado', chamado)
                .then(resp => {
                    console.log(resp)
                })
                .catch(error => {
                    window.alert(error.message)
                })
        }
    }
}
</script>

<style>
.home {
    width: 100%;
    height: 100%;
}

.fab {
    position: fixed;
    height: 60px;
    width: 60px;
    border-radius: 30px;
    background-color: var(--primary-color);
    box-shadow: 0 4px 8px rgba(0,0,0,.7);
    z-index: 50;
    bottom: 50px;
    right: 20px;
}

.pin{
    width: 45px;
}

.vs-modal__header{
    height: 50px;
    border-bottom: solid lightgray 1px;
}

.vs-modal__footer{
    font-weight: 800;
    border-top: solid lightgray 1px;
    height: 50px;
}

.confirmar {
    font-weight: 900 !important;
}
.modal-item{
    width: 50%;
    padding-top: 50%;
    position: relative;

}
.modal-item__content {
    height: 80px;
    border: solid var(--primary-color) 1px;
    border-radius: 5px;
    position: absolute;
    width: 90%;
    height: 90%;
    top: 5%;
    left: 5%;
}

.--selected {
    background-color: var(--primary-color);
    color: white;
}

.vs-modal__body{
    width: 100%;
    overflow-y: auto;
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
    flex: 1;
    padding: 5px;
}

.problema-titulo{
    font-size: 12px;
    font-weight: 700;
    padding-top: 10px;
    color: inherit
}
.position{
    width: 50px;
}

.mensagem {
    width: 100%;
    height: 100%;
    padding: 5px;
    border-radius: 10px;
    resize: none;
}
</style>