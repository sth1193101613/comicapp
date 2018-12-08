import * as types from './mutations-type'
import axios from 'axios'

export default {
    getUserLogin({commit}, user) {
        axios.post('/api/user/selectUser',{
            username: user.username,
            password:user.password
        }).then(res => {
            console.log(res)
            commit(types.USER_TYPE,res.data.result[0])
        })
    }
}