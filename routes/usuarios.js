const express = require("express")
const path = require("path");
const UserController = require("../controllers/usuario");

function views(document){
    //console.log(__dirname)
    return path.join(__dirname,"../","views", document)
  
}
   
const router = express.Router()
const userController = new UserController();


//asiganando middleware al router
//router.use('/usuarios')

router.get('/registro', function(request,response){
    return response.sendFile(views("registro.html"))
})
router.get("/usuarios" ,(req,res)=>{
  return res.sendFile(views("usuarios.html"))
})

//ruta de editar 
router.get("/editUser/:id" ,(req,res)=>{
  return res.sendFile(views("editUser.html"))
})

router.get("/api/usuarios" ,async(req,res)=>{
    var usuarios= await userController.readAll()
    
    return res.json(usuarios)
  })

  //obtener el usuario por el id para el editar
router.get("/api/usuarios/:id" ,async(req,res)=>{
  const id = req.params.id
  var usuario= await userController.read(id)
    
    return res.json(usuario)
  })
  
router.post("/usuarios" ,(req,res)=>{
    console.log(req.body)
    return res.json({usuarios: ["Tzuzul", "Gistavos"]})
  })

///eliminar
router.delete("/api/usuarios/:id" ,async(req,res)=>{
  const id = req.params.id
  var user= await userController.delete(id)
    
    return res.json(user)
  })

//ruta de editar otra
router.post("/api/editUser/:id" ,async(req,res)=>{
    const id = req.params.id
    var user= await userController.edit(id,req.body)
      
      return res.redirect("/")
    })
  

router.post('/registro', async function(request, response){
    const persona = request.body;
    console.log(request.body)
    //const result = await database.insertar('usuarios', persona)
    //console.log(result)
    const usuario= await userController.create(persona)
    if(usuario.success){
        return response.redirect("/")
    }else{
        return response.redirect("/registro")
    }
   
    })
    
module.exports= router;

