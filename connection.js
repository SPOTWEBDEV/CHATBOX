const mysql = require('mysql')

const db = mysql.createConnection({
     host:'localhost',
     user: 'root',
     password:"",
     database: 'chatbox'
})


db.connect((error,result)=>{
    if(error){
        console.log(error);
    }else{
        console.log('STATUES FOR CONNECTIONM TO MYSQL DATABASE 2000');
    }
})

module.exports = db