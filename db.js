import mysql from 'mysql2'


export const db = mysql.createConnection({
    host: "127.0.0.1",
    user: "siss9898",
    password:"sunyoung98*",
    database:"siss9898",
    port:3306
})