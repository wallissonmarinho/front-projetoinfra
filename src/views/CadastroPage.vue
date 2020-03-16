<template>
    <div flex column class="cadastro-page">
        <vs-toolbar title="Cadastrar">
            <vs-toolbar-item icon="back" slot="Leading" @onPressed="$router.go(-1)"/>
        </vs-toolbar>
        <validation-observer flex column expand stretch ref="form" class="cadastro-form" @submit.prevent="cadastrar()">
            <div flex-1>
                <vs-input name="email" placeholder="Email" type="email" v-model="usuario.email"/>
                <vs-input name="nome" placeholder="Nome" v-model="usuario.nome"/>
                <vs-input name="sobrenome" placeholder="Sobrenome" v-model="usuario.sobrenome"/>
                <vs-input name="senha" placeholder="Senha" type="password" v-model="usuario.senha"/>
                <vs-input name="confSenha" placeholder="Confirmar Senha" type="password"/>
                <vs-input name="telefone" placeholder="Telefone" v-model="usuario.telefone"/>
                <vs-input name="cpf" placeholder="CPF" v-model="usuario.cpf"/>  
                <vs-input type="date" name="dtNascimento" placeholder="Data Nascimento:" v-model="usuario.dataNascimento"/> 
                <vs-input name="nome" style="display: none;" v-model="usuario.id_usuario"/>           
            </div>
            <button class="submit" @click="cadastrar()">
                Cadastrar
            </button>
        </validation-observer>
    </div>
</template>

<script>
import VsToolbar from '@/components/vs-Toolbar'
import VsToolbarItem from '@/components/vs-ToolbarItem'
import VsInput from '@/components/vs-Input'
import { ValidationObserver } from 'vee-validate'

export default {
    components: {
        VsToolbar,
        VsToolbarItem,
        ValidationObserver,
        VsInput,
    },
    data() {
        return {
            usuario: {
                email: '',
                nome: '',
                sobrenome:'',
                senha: '',
                telefone: '',
                cpf: '',
                dtNascimento:'',
                id_usuario: ''       
                
            }
        }
    },
    methods: {

        gerarIdUsuario() {
            Math.floor(Math.random() * 5);
        },

        cadastrar() {
            this.$http.post('usuario', this.usuario)
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
.cadastro-page {
    width: 100%;
    height: 100%;
    min-height: 400px;
    overflow: auto;
}
.cadastro-form{
    width: 100%;
    padding: 5px 20px 20px;
}
</style>