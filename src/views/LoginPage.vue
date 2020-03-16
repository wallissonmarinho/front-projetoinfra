<template>
    <div flex column justify stretch align-center class="login-page">
        <div flex column align-center>
            <vs-icon icon="work" color="white" size="100px"/>
            <br/>
            <h2 style="color: white">Pro Infra</h2>
        </div>
        <validation-observer tag="form" @submit.prevent="submitLogin" class="login-form" ref="form">
            <vs-input v-model="login" type="email" name="login" rules="required" placeholder="E-mail"/>
            <vs-input v-model="senha" type="password" name="senha" rules="required" placeholder="Senha"/>
            <br/>
            <div flex align-center>
                <input type="checkbox"/><span class="login-page__lembrar-senha">Lembrar minha senha</span>
            </div>
            <br/>
            <br/>
            <button class="submit">
                Login
            </button>
        </validation-observer>
        <a class="login-page__cadastrar" @click="$router.push({name: 'cadastro'})">CADASTRAR</a>
        <vs-modal :isOpened="isOpened">
            <div flex expand center>
                <vs-lottie animationData="loading" :loop="true"/>
            </div>
        </vs-modal>
    </div>
</template>

<script>
import { ValidationObserver } from 'vee-validate'
import VsInput from '@/components/vs-Input'
import VsIcon from '@/components/vs-Icon'
import VsModal from '@/components/vs-Modal'
import VsLottie from '@/components/vs-Lottie'
export default {
    components: {
        ValidationObserver,
        VsInput,
        VsIcon,
        VsModal,
        VsLottie
    },
    data(){
        return {
            login: '',
            senha: '',
            isOpened: false
        }         

    },
    methods: {
        submitLogin(){
            this.$refs.form.validate()
                .then(isValid => {
                    if(isValid) {
                        this.isOpened = true;
                        this.isBusy = true;

                        setTimeout(function() {
                            this.$router.push({name: 'admin'})
                        }.bind(this), 300);
                        console.log(isValid)
                    }
                })
        }
    }
}
</script>

<style>
.login-page {
    width: 100%;
    height: 100%;
    
    padding: 40px 20px;
    min-height: 400px;
    overflow: auto;
}
.login-form{
    width: 100%;
    padding-bottom: 50px;
}
.login-page__lembrar-senha{
    color: white;
    font-size: 12px;
    padding: 0 10px;
}
.login-page__cadastrar{
    text-decoration: none;
    font-weight: var(--bold);
    color: white;
    font-size: 14px;
}
</style>