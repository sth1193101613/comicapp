let models = require("../db");
let express = require("express");
let router = express.Router();
let mysql = require("mysql");
let $sql = require("../sqlMap");
const fs = require("fs");

// 连接数据库
let conn = mysql.createConnection(models.mysql);
conn.connect();
// 增加用户接口
router.post("/addUser", (req, res) => {
    let sql = $sql.user.add;
    let sql_user = $sql.user.select_name;
    let params = req.body;
    conn.query(sql_user, [params.username], (err, result) => {
        if (result !== null) {
            res.send({
                msg: `用户${params.username}已经存在`,
                code: -1
            });
        } else {
            conn.query(sql, [params.username, params.password], (err, result) => {
                    res.send({
                        msg: "注册成功",
                        code: 0
                    });
                }
            );
        }
    });
});
router.post("/selectUser", (req, res) => {
    let sql_user = $sql.user.sel_user;
    let params = req.body;
    conn.query(sql_user, [params.username, params.password], (err, result) => {
            if (result.length === 0) {
                res.send({
                    msg: "用户名或者密码错误",
                    code: -1
                });
            } else {
                res.send({
                    result,
                    msg: "登录成功",
                    code: 1
                });
            }
        }
    );
});
module.exports = router;
