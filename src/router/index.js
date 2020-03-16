import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '@/views/LoginPage'
import CadastroPage from '@/views/CadastroPage'
import Admin from '@/views/Admin'
// import Home from '@/views/Home'
import Perfil from '@/views/Perfil'
import Home from '@/views/Home'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'login',
            component: LoginPage
        },
        {
            path: '/cadastro',
            name: 'cadastro',
            component: CadastroPage
        },
        {
            path: '/admin',
            name: 'admin',
            redirect: {name: 'home'},
            component: Admin,
            children: [
                {
                    path: '/admin/home',
                    name: 'home',
                    component: Home
                },
                {
                    path: '/admin/perfil',
                    name: 'perfil',
                    component: Perfil
                }
            ]
        },
    ]
})

export default router
