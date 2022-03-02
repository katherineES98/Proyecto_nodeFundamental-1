


console.log("hola mundo")
//aramando la peticion 
//utlizando fetch
fetch("/api/usuarios")//dar orden de trae  algo
.then(function(respuesta){
    console.log(respuesta)
    return respuesta.json()
}).then(function(data){
    console.log(data)
    var  usuarios = document.getElementById("usuarios")
    //usersData = data
    //console.log("esta es", data)
    for (let user of data){
        usuarios.innerHTML = usuarios.innerHTML + `<tbody>
        <tr>
        
          <td>${user.Nombre}</td>
          <td>${user.Edad}</td>
          <td>${user.Genero}</td>
          <td>${user.Correo}</td>
          <td>${user.Profesion}</td>
          <td>${user.Salario}</td>
         
          <td><button onClick="eliminar(${user.id})"> <span><i class=" fas fa-trash-alt icono-eliminar "></i> </span></button>
         <a href="/editUser/${user.id}"> <button > <span><i class=" fas fa-user-edit  icono-editar" ></i> </span></button></a>
         
        
          </td>
          
        
        </tr>
        
        </tbody>
        
        `
   } 
   
  
})



function eliminar(id){
    fetch("/api/usuarios/"+id, {
        method:"DELETE"
    }).then((response)=>{
        return response.json()
    })
    .then((data)=>{
        console.log(data)
        window.location.reload()
    })
}