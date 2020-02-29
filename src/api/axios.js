const axios = require('axios');

const instance = axios.create({
    baseURL: 'https://cdsapi.netimob.com/api/'
});

export const API = {
    auth (login, password)  {
        return instance.post('auth', {login, password, type: 'web'})
    },

    getProject () {
        return instance.get('project')
    },

    setAccessToken(token) {
        instance.defaults.headers.common['Access-Token'] = token
    }
}

//instance.defaults.headers.common['Access-Token'] = 1;

