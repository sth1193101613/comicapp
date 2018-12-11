import * as types from './mutations-type.js'
import axios from 'axios'
import { Dialog } from '../cube-ui'
export default {
    getUserLogin({commit}, user) {
        axios.post('/api/user/selectUser',{
            username: user.username,
            password:user.password
        }).then(res => {
            if(res.code !== 1){
                alert(1)
            }else{
                commit(types.USER_TYPE,res.data.result[0])
            }
        })
    }
}