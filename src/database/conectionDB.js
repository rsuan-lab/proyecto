const mysql = require('mysql');
const myConnection = require('express-myconnection');
const mydb = myConnection(mysql, {
    host: 'localhost',
    user: 'user',
    password: 'password',
    port: 3306,
    database: 'db'
  }, 'single')
module.exports = mydb 