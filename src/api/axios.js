const axios = require('axios');

const instance = axios.create({
    baseURL: 'https://cdsapi.netimob.com/api/'
});



export const API = {
    auth(login, password) {
        return instance.post('auth', {login, password, type: 'web'})
    },

    getProjectList() {
        return instance.get('project')
    },
    getProjectStruct(id, structId) {
        return instance.get(`project/${id}/project-structure/${structId}`)
    },

    setAccessToken(token) {
        instance.defaults.headers.common['Access-Token'] = token
    }
}



