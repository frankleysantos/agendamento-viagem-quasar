import axios from 'axios'
import store from '../store';

const Connection = axios.create({
    // baseURL: "http://192.168.1.14:8005/laravel-9/public/api/", // Sua URL de API
    // baseURL: process.env.API_URL, // Sua URL de API
    baseURL: "http://localhost:8005/api/", // Sua URL de API
    headers: {
        'Content-Type': 'application/json'
    }
})

Connection.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

Connection.interceptors.response.use(
    (res) => {
        return res;
    },
    async (error) => {
        try {
            const originalConfig = error.config;
            if (error.response.status === 401 && originalConfig.url != 'login') {
                store().dispatch('auth/ActionLoginUserRefresh', true)
            }
        } catch (_error) {
            return Promise.reject(_error);
        }
    }
);

export default ({ app, Vue }) => {
    // Configuração global para acessar através do this.$axios
    Vue.prototype.$axios = Connection
}

export { Connection }
