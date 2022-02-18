
const express = require('express');//libreria que estamos usando y que esta tiene muchos metodos
const path = require("path");
//const database = require('./database');
const userRoutes = require('./routes/usuarios')
const app= express();



function views(document){
 return path.join(__dirname,"views", document)
}



app.use(express.static(path.join(__dirname, "static")));
app.use(express.text())
app.use(express.json()) 
app.use(express.urlencoded({extended:true}))

app.use(userRoutes)

app.get('/', function(peticion, respuesta){
    
 
    return respuesta.sendFile(views("index.html"))
}) 



//app.get('/registro', function(request,response){
    //eturn response.sendFile(views("registro.html"))
//})




//probar la petiion de get
app.listen(4000, function(){
    console.log("Funcionando.... http://localhost:4000/")
})


