// require('dotenv').config({path:'./.env'})
const mysql = require ('mysql')

module.exports.request = (query) => new Promise((res, rej) =>{
    const connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '',
        database: 'pdtc'
    })


connection.query(query, (error, data, fields) => {
    if(error) rej(error)
    connection.end((err)=>{
        if(err) rej(err)
        res(data)
    })
  })
})


// module.exports.request = (query) => new Promise((res, rej) =>{
//     const connection = mysql.createConnection({
//         host: process.env.DB_HOST,
//         port: process.env.PORT,
//         user: process.env.USER,
//         password: process.env.PASS,
//         database: process.env.DATABASE
//     })
