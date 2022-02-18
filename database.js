//conexion de base de datos
const mysql = require('mysql2');

//configuracion para workbech para establecer la conexiom
const connection = mysql.createConnection({
      host:'localhost',
      port:3306,
      user:'root',
      password:'1234',
      database:'BackEndFundamental'
}) 

//encapsulando con promesas
function query(sql,data){
    return new Promise((resolve,reject)=>{

        connection.query(sql, data, function(error,result){
            //error first callback
            if(error){
                reject(error.sqlMessage)
            }else{
               resolve(result)
            }
        })
    })
   
      
}

async function insertar(tableName,data){
    
   try {
    await  query(`INSERT INTO ${tableName}(??) VALUES(?)`,[Object.keys(data),Object.values(data)])
    return {data, success:true}
} catch (error) {
    return {error , success:false}
    
}
}
async function eliminar(tableName,data){
    
    try {
     await  query(`DELETE FROM ${tableName} WHERE id=?`,[data])
     return data
 } catch (error) {
     return error
     
 }
 }
//exportando un objeto

module.exports= {query,insertar,eliminar}

