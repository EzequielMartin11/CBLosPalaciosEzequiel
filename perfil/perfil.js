document.getElementById('formPerfil').addEventListener('submit', comprobarCampos);

function comprobarCampos(){
    event.preventDefault();
    const nombre = document.getElementById("inputNombre").value.trim();
    const expNombre= /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/;
    const tlf= document.getElementById("inputTelefono").value.trim();
    const expTlf = /^([0-9]{9})$/;
    const contraseña = document.getElementById("inputContraseña").value.trim();
    const expContraseña= /^(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{4,})$/;

    let hayVacios = false;
    let hayErrores = false;

    //compruebo el nombre
    if(nombre.length == 0){
        hayVacios = true;

    }else if(!expNombre.test(nombre)){
        hayErrores = true;
    }

    //Compruebo el telefono
    if(tlf.length == 0){
        hayVacios = true;

    }else if(!expTlf.test(tlf)){
        hayErrores = true;
    }

    //Compruebo la contraseña
    if(contraseña.length == 0){
        hayVacios = true;

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
        modificarDatos();
     
    }
}

function modificarDatos(){
    const nombre1 = document.getElementById('inputNombre').value;
    const tlf = document.getElementById('inputTelefono').value;
    const password1 = document.getElementById('inputContraseña').value;
    const dni = document.getElementById('inputDni').value;
    const formData = new FormData();
    formData.append("nombre", nombre1);
    formData.append("telefono", tlf);
    formData.append("password", password1);
    formData.append("dni", dni);
  
    fetch("editarPerfil.php", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
       .then(aceptarCambio);
}

function aceptarCambio(datos){
    if(datos != "error"){
        window.open("../principal/principal.php","_self");
      }else{
        alert("Datos erróneos");
}
}

