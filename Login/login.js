document.getElementById('formLogin').addEventListener('submit', enviarFormulario);

function enviarFormulario(event) {
  const email = document.getElementById("emailInput").value.trim();
  const expEmail= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const contraseña = document.getElementById("passwordInput").value.trim();
  const expContraseña= /^(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{4,})$/;

  let hayVacios = false;
  let hayErrores = false;

  //Compruebo el email
  if(email.length==0){
      hayVacios=true;
      }else if(!expEmail.test(email)){
      hayErrores = true;
  }
  //Compruebo la contraseña
  if(contraseña.length==0){
      hayVacios=true;
      }else if(!expContraseña.test(contraseña)){
      hayErrores = true;
  }

  if(hayErrores){
      alert("Datos incorrectos");
  }
  if(hayVacios){
      alert("Rellene todos los campos");
  }
  
  if(hayErrores==false && hayVacios==false){
      comprobarUsuarioBaseDatos();
   
  }
}

function comprobarUsuarioBaseDatos(){
  const email1 = document.getElementById('emailInput').value;
  const password1 = document.getElementById('passwordInput').value;
  const formData = new FormData();
  formData.append("email", email1);
  formData.append("password", password1);

  fetch("comprobarUsuario.php", {
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .then(cambiarPagina);
}

  

function cambiarPagina(datos){
  if(datos != "error"){
    window.open("../entradas/entradas.php","_self");
  }else{
    alert("Datos erróneos");
  }
  
}




















































/** 

    function comprobarUsuarioBaseDatos(){
    let formData=new FormData();
    formData.append("email", document.getElementById("emailInput").value.trim());
    formData.append("contraseña",document.getElementById("passwordInput").value.trim());

    fetch("comprobarUsuario.php", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then(comprobar);
        function comprobar(valorDevuelto){
          
          if((valorDevuelto[0].email === document.getElementById("emailInput").value.trim()) && (valorDevuelto[0].contraseña === document.getElementById("passwordInput").value.trim())){
            
            //Abro la ventana principal de la web
            
            //Inicio la sesión con los datos del usuario
            let emailActivo = valorDevuelto[0].email;
            let contraseñaActiva = valorDevuelto[0].contraseña;
            let dniActivo = valorDevuelto[0].dni;
            let nombreActivo = valorDevuelto[0].nombreApellidos;
            let telefonoActivo = valorDevuelto[0].telefono;
            
           // setUserDataInCookie(emailActivo, contraseñaActiva, dniActivo, nombreActivo, telefonoActivo);
           document.cookie = "emailActivo="+emailActivo+"; expires=Thu, 18 Dec 2099 12:00:00 UTC";
           document.cookie = "contraseñaActiva="+contraseñaActiva+"; expires=Thu, 18 Dec 2099 12:00:00 UTC";
           document.cookie = "dniActivo="+dniActivo+"; expires=Thu, 18 Dec 2099 12:00:00 UTC";
           document.cookie = "nombreActivo="+nombreActivo+"; expires=Thu, 18 Dec 2099 12:00:00 UTC";
           document.cookie = "telefonoActivo="+telefonoActivo+"; expires=Thu, 18 Dec 2099 12:00:00 UTC";
           console.log(document.cookie);
           
           window.open("../principal/principal.html","_self");
          }else{A
            alert("Usuario incorrecto");
          }
 
        }
    }
/** 
    function setUserDataInCookie(email, password, dni, nombre, telefono) {
      document.cookie = `emailActivo=${(email)};`;
      document.cookie = `contraseñaActiva=${(password)};`;
      document.cookie = `dniActivo=${(dni)};`;
      document.cookie = `nombreActivo=${(nombre)};`;
      document.cookie = `telefonoActivo=${(telefono)};`;
    }
*/


