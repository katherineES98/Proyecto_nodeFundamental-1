const database = require("../database")

class UserController{
    //usuario que quiero crear le paso
   async create(usuario){
    const result = await database.insertar('usuarios', usuario)
    console.log(result)
    return result
   }

   //metodo para leer un solo usuario 

   async read(id){
    const usuario = await database.query("SELECT * FROM usuarios where id=?",id)
    //me devolveria solo la informacion del usuari cosas extra no 
    return usuario [0]
 }

   async readAll(){
       const usuarios = await database.query("SELECT * FROM usuarios ")
       return usuarios
    }

  //nueva data

  async edit(id,data){
   const user = await  database.query("UPDATE usuarios SET ? WHERE id =? ", [data,id])
    return user
  }

   async delete(id){
        const users= await database.eliminar('usuarios', id)
        return users
      }
}


module.exports= UserController;