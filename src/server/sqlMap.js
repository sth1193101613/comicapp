let sqlMap = {
  user: {
    add: 'insert into user(name, password) values (?, ?)',//添加
    select_name: 'SELECT * from user where name = ?',    //查询 username
    sel_user:'SELECT name,password from user where name = ? and password = ?',
    update_password:'update Users set password= ? where id=?',//修改
  }
}
module.exports = sqlMap;
