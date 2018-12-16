import * as types from "./mutations-type.js";
import axios from "axios";
import { Dialog } from "../cube-ui";
export default {
  getUserLogin({ commit }, user) {
    axios
      .post("/api/user/selectUser", {
        username: user.username,
        password: user.password
      })
      .then(res => {
        if (res.code !== 1) {
          // Dialog.$create({
          //     type: 'alert',
          //     title: '提示',
          //     content: '用户名或者密码不对',
          // }).show()
        } else {
          commit(types.USER_TYPE, res.data.result[0]);
        }
      });
  }
};
