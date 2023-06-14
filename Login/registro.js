const botonAceptarRegistro = document.getElementById("botonAceptarRegistro");
botonAceptarRegistro.addEventListener("click", validarRegistro);

//Validación de los campos del formulario
function validarRegistro(){
    const nombre = document.getElementById("nombreRegistro").value.trim();
    const expNombre= /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/;
    const dni = document.getElementById("dniRegistro").value.trim();
    const expDni = /^(^([0-9]{8,8}[A-Z])|^)$/;
    const tlf= document.getElementById("tlfRegistro").value.trim();
    const expTlf = /^([0-9]{9})$/;
    const email = document.getElementById("emailRegistro").value.trim();
    const expEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const contraseña = document.getElementById("passwordRegistro").value.trim();
    const expContraseña= /^(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{4,})$/;

    let hayVacios = false;
    let hayErrores = false;
    let errorContraseña=false;

    //compruebo el nombre
    if(nombre.length == 0){
        hayVacios = true;

    }else if(!expNombre.test(nombre)){
        hayErrores = true;
    }
    //Compruebo el dni
    if(dni.length == 0){
        hayVacios = true;

    }else if(!expDni.test(dni)){
        hayErrores = true;
    }
    //Compruebo el telefono
    if(tlf.length == 0){
        hayVacios = true;

    }else if(!expTlf.test(tlf)){
        hayErrores = true;
    }
    //Compruebo el email
    if(email.length == 0){
        hayVacios = true;

    }else if(!expEmail.test(email)){
        hayErrores = true;
    }
    //Compruebo la contraseña
    if(contraseña.length == 0){
        hayVacios = true;

    }else if(!expContraseña.test(contraseña)){
        hayErrores = true;
        errorContraseña=true;
    }

    if(hayErrores){
        event.preventDefault(); 
        alert("Datos incorrectos");

    }
    if(hayVacios){
        event.preventDefault(); 
        alert("Rellene todos los campos");
    }

    if(errorContraseña){
        var inputContraseña = document.getElementById("passwordRegistro");
        var alertContraseña = document.createElement("p");
        alertContraseña.textContent="Debe contener mas de 4 caracteres incluyendo números y letras";
        inputContraseña.parentNode.insertBefore(alertContraseña, inputContraseña.nextSibling);
    }



    if(hayErrores==false && hayVacios==false){
        registrarUsuario();    
    }

}
function registrarUsuario(){
    let formData=new FormData();
    formData.append("nombre", document.getElementById("nombreRegistro").value.trim());
    formData.append("dni", document.getElementById("dniRegistro").value.trim());
    formData.append("tlf", document.getElementById("tlfRegistro").value.trim());
    formData.append("email", document.getElementById("emailRegistro").value.trim());
    formData.append("contraseña",document.getElementById("passwordRegistro").value.trim());

    fetch("registrarUsuario.php", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then(cambiarPagina);
       

}

function cambiarPagina(){
    alert('Registro completado');
    window.open("../login/index.php","_self");
}

const botonCancelarRegistro = document.getElementById("botonCancelarRegistro");
botonCancelarRegistro.addEventListener("click", cancelarRegistro);

function cancelarRegistro(){
document.getElementById("formLogin").reset();
}