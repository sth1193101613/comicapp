import * as types from './mutations-type.js'

export default {
    [types.USER_TYPE] (state,action){
        state.loginUser  = action
        try {
            localStorage.setItem('loginUser', JSON.stringify(state.loginUser))
        } catch (e) {}
    },

    [types.IDX_TYPE] (state,action){
        state.idx = action
        try {
            localStorage.setItem('idx',action)
        } catch (e) {}
    }
}