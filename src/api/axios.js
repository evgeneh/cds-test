const axios = require('axios');

const instance = axios.create({
    baseURL: 'https://cdsapi.netimob.com/api/'
});



export const API = {
    auth(login, password) {
        return instance.post('auth', {login, password, type: 'web'})
    },

    getProject(id, strId) {
        return instance.get('project/' + id + '/project-structure/' + strId)
    },

    getProjectList() {
        return instance.get('project')
    },

    getNode(id) {
        return instance.get('project/' + id)
    },

    setAccessToken(token) {
        instance.defaults.headers.common['Access-Token'] = token
    }
}



