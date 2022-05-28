const mysql = require ("mysql")

const db = mysql.createConnection({
host:"localhost",
user:"root",
password : "",
database:"login_db"
})

module.exports = db;