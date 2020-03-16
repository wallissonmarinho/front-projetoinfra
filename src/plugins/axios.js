import axios from 'axios';

const http = {
    install(Vue) {
        Vue.prototype.$http = axios.create({
            baseURL: 'http://localhost:8080/api/'
        })
    }
}

export default http;
