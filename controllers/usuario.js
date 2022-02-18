const database = require("../database")

class UserController{
    //usuario que quiero crear le paso
   async create(usuario){
    const result = await database.insertar('usuarios', usuario)
    console.log(result)
    return result
   }

   async readAll(){
       const usuarios = await database.query("SELECT * FROM usuarios ")
       return usuarios
    }

   async delete(id){
        const users= await database.eliminar('usuarios', id)
        return users
      }
}


module.exports= UserController;