const mysql = require('mysql2');

const myConnectionString = "mysql://viliv:salasana@localhost:3306/arviointi";
const connection = mysql.createPool(myConnectionString);

module.exports = connection;