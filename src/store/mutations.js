import * as types from './mutations-type'

export default {
    [types.USER_TYPE] (state,action){
        state.loginUser  = action
    },
    [types.SEX_TYPE] (state,action) {
        state.sex = action
    }
}