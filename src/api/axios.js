const axios = require('axios');

const instance = axios.create({
    baseURL: 'https://cdsapi.netimob.com/api/'
});

export const API = {
    auth (login, password)  {
        return instance.post('auth', {login, password, type: 'web'})
    }
}

//instance.defaults.headers.common['Access-Token'] = 1;

