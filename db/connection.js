const mysql  = require("mysql");

const mysqlconnection = mysql.createConnection({
    "host":"127.0.0.1",
    "user":"root",
    "password":"pratik",
    //first you need to create database in mysql
    "database":"mysqlproductwebservice",
    "port":3306
})

mysqlconnection.connect((err)=>{
    if(err){
        console.log("connection not successfull"+JSON.stringify(err))
    }else{
        console.log("connection successfully");
    }
})

module.exports =mysqlconnection;