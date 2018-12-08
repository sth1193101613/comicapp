let sqlMap = {
  user: {
    add: "insert into user(name, password) values (?, ?)", //添加
    sel_user: "SELECT name,password,sex,info from user where name = ? and password = ?",
  }
};
module.exports = sqlMap;
