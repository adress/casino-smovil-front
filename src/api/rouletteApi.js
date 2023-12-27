import axios from 'axios';
import { getEnvVariables } from '../helpers';

const { VITE_API_URL } = getEnvVariables()




const rouletteApi = axios.create({
    baseURL: VITE_API_URL
});

// Todo: configurar interceptores
rouletteApi.interceptors.request.use(config => {

    config.headers = {
        ...config.headers,
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }

    return config;
})


export default rouletteApi;



