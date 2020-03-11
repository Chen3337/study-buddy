import axios from "axios";
export default {
    registerUsers: function(newUsers){
        return axios.post('/', newUsers)
    },
    authenticateUsers: function(users){
        return axios.post('/login', users)
    }
}

