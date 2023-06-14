 // Función para generar la tabla de usuarios
 function generarTablaUsuarios() {
    fetch('obtenerUsuarios.php')
      .then(response => response.json())
      .then(data => {
        // Obtener el elemento del contenedor de la tabla
        var tablaUsuariosDiv = document.getElementById("tablaUsuariosDiv");
        var tablaCreada = document.querySelector(".table-striped");
        if(tablaCreada){
          tablaCreada.parentNode.removeChild(tablaCreada);
        }
        // Crear el elemento de la tabla
        var tablaUsuarios = document.createElement("table");
        tablaUsuarios.className = "table table-striped";

        // Crear el encabezado de la tabla
        var encabezado = document.createElement("thead");
        encabezado.innerHTML = "<tr><th>ID</th><th>DNI</th><th>Nombre</th><th>Teléfono</th><th>Email</th><th>Contraseña</th><th>Acciones</th></tr>";
        tablaUsuarios.appendChild(encabezado);

        // Crear el cuerpo de la tabla
        var cuerpoTabla = document.createElement("tbody");

        // Iterar sobre los usuarios y crear las filas de la tabla
        data.forEach(function(usuario) {
            var fila = document.createElement("tr");
            fila.innerHTML = "<td>"+usuario.id+"</td><td>" + usuario.dni + "</td><td>" + usuario.nombreApellidos + "</td><td>" + usuario.telefono + "</td><td>" + usuario.email + "</td><td>" + usuario.contraseña + "</td>";
            var accionesCell = document.createElement("td");
        
            // Botón Editar
            var editarBtn = document.createElement("button");
            editarBtn.type = "button";
            editarBtn.className = "btn btn-sm btn-warning";
            editarBtn.textContent = "Editar";
            editarBtn.addEventListener("click", function() {
              editarUsuario(usuario, fila);
            });
            accionesCell.appendChild(editarBtn);
        
            // Botón Eliminar
            var eliminarBtn = document.createElement("button");
            eliminarBtn.type = "button";
            eliminarBtn.className = "btn btn-sm btn-danger";
            eliminarBtn.textContent = "Eliminar";
            eliminarBtn.addEventListener("click", function() {
              eliminarUsuario(usuario);
            });
            accionesCell.appendChild(eliminarBtn);
        
            // Agregar la celda de acciones a la fila
            fila.appendChild(accionesCell);
        
            cuerpoTabla.appendChild(fila);
            // Agregar el cuerpo de la tabla a la tabla existente
        tablaUsuarios.appendChild(cuerpoTabla);

        // Agregar la tabla al contenedor
        tablaUsuariosDiv.appendChild(tablaUsuarios);
          });
        
      });
  }

  // Evento de clic para el botón "Listar usuarios"
  var listarUsuariosBtn = document.getElementById("btnListarUsuarios");
  listarUsuariosBtn.addEventListener("click", function() {
    generarTablaUsuarios();
  });


  //Funcion para generar la tabla de compras
  function generarTablaCompras() {
    fetch('obtenerCompras.php')
      .then(response => response.json())
      .then(data => {
        // Obtener el elemento del contenedor de la tabla
        var tablaComprasDiv = document.getElementById("tablaComprasDiv");

        // Si la tabla existe no se crea
        var tablaCreada = document.querySelector(".table-striped");
        if(tablaCreada){
          tablaCreada.parentNode.removeChild(tablaCreada);
        }
        //Si el formulario esta creado se borra
        var formEditar = document.getElementById("formEditar");
        var formularioExistente = formEditar.querySelector(".formulario-edicion");
        if (formularioExistente) {
          // Reemplazar el formulario existente con el nuevo formulario
          formularioExistente.parentNode.removeChild(formularioExistente);
        }
        var tablaCompras = document.createElement("table");
        tablaCompras.className = "table table-striped";

        // Crear el encabezado de la tabla
        var encabezado = document.createElement("thead");
        encabezado.innerHTML = "<tr><th>Usuario</th><th>Fecha</th><th>VS</th><th>Lugar</th><th>Numero Entradas</th><th>Total</th></tr>";
        tablaCompras.appendChild(encabezado);

        // Crear el cuerpo de la tabla
        var cuerpoTabla = document.createElement("tbody");

        // Iterar sobre los usuarios y crear las filas de la tabla
        data.forEach(function(entrada) {
          var fila = document.createElement("tr");
          fila.innerHTML = "<td>"+entrada.nombre+"</td><td>" + entrada.fecha + "</td><td>" + entrada.vs + 
          "</td><td>" + entrada.lugar + "</td><td>" + entrada.nEntradas  + "</td><td>" + entrada.precioTotal + "</td>";
          cuerpoTabla.appendChild(fila);
        });

        // Agregar el cuerpo de la tabla a la tabla existente
        tablaCompras.appendChild(cuerpoTabla);

        // Agregar la tabla al contenedor
        tablaComprasDiv.appendChild(tablaCompras);
      })

  }

  // Evento de clic para el botón "Listar usuarios"
  var listarComprasBtn = document.getElementById("btnListarCompras");
  listarComprasBtn.addEventListener("click", function() {
    generarTablaCompras();
  });


  function editarUsuario(usuario){
    var formEditar = document.getElementById("formEditar");
    var formularioExistente = formEditar.querySelector(".formulario-edicion");
    if (formularioExistente) {
      // Reemplazar el formulario existente con el nuevo formulario
      formularioExistente.parentNode.removeChild(formularioExistente);
    }
    var formulario = document.createElement("form");
  formulario.className = "formulario-edicion";

  // Campo DNI
  var dniGroup = document.createElement('div');
  dniGroup.className = 'form-group';
  var dniLabel = document.createElement("label");
  dniLabel.textContent = "DNI:";
  var dniInput = document.createElement("input");
  dniInput.type = "text";
  dniInput.className='form-control';
  dniInput.name = "dni";
  dniInput.setAttribute("id", "dniInput");
  dniInput.value = usuario.dni;
  dniGroup.appendChild(dniLabel);
  dniGroup.appendChild(dniInput);
  formulario.appendChild(dniGroup);

  // Campo Nombre
  var nombreGroup = document.createElement('div');
  nombreGroup.className = 'form-group';
  var nombreLabel = document.createElement("label");
  nombreLabel.textContent = "Nombre:";
  var nombreInput = document.createElement("input");
  nombreInput.type = "text";
  nombreInput.className='form-control';
  nombreInput.name = "nombre";
  nombreInput.value = usuario.nombreApellidos;
  nombreInput.setAttribute("id", "nombreInput");
  nombreGroup.appendChild(nombreLabel);
  nombreGroup.appendChild(nombreInput);
  formulario.appendChild(nombreGroup);

  // Campo Teléfono
  var telefonoGroup = document.createElement('div');
  telefonoGroup.className = 'form-group';
  var telefonoLabel = document.createElement("label");
  telefonoLabel.textContent = "Teléfono:";
  var telefonoInput = document.createElement("input");
  telefonoInput.type = "text";
  telefonoInput.className='form-control';
  telefonoInput.name = "telefono";
  telefonoInput.setAttribute("id", "telefonoInput");
  telefonoInput.value = usuario.telefono;
  telefonoGroup.appendChild(telefonoLabel);
  telefonoGroup.appendChild(telefonoInput);
  formulario.appendChild(telefonoGroup);

  // Campo Email
  var emailGroup = document.createElement('div');
  emailGroup.className = 'form-group';
  var emailLabel = document.createElement("label");
  emailLabel.textContent = "Email:";
  var emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.className='form-control';
  emailInput.name = "email";
  emailInput.setAttribute("id", "emailInput");
  emailInput.value = usuario.email;
  emailGroup.appendChild(emailLabel);
  emailGroup.appendChild(emailInput);
  formulario.appendChild(emailGroup);

  // Campo Contraseña
  var contraseñaGroup = document.createElement('div');
  contraseñaGroup.className = 'form-group';
  var contraseñaLabel = document.createElement("label");
  contraseñaLabel.textContent = "Contraseña:"; 
  var contraseñaInput = document.createElement("input");
  contraseñaInput.type = "password";
  contraseñaInput.className='form-control';
  contraseñaInput.name = "contraseña";
  contraseñaInput.setAttribute("id", "contraseñaInput");
  contraseñaInput.value = usuario.contraseña;
  contraseñaGroup.appendChild(contraseñaLabel);
  contraseñaGroup.appendChild(contraseñaInput);
  formulario.appendChild(contraseñaGroup);

  // Botón Guardar
  var guardarBtn = document.createElement("button");
  guardarBtn.type = "button";
  guardarBtn.className = "btn btn-primary";
  guardarBtn.textContent = "Guardar";
  guardarBtn.addEventListener("click", function() {
    guardarCambios(usuario);
  });
  formulario.appendChild(guardarBtn);

   // Agregar el formulario de edición a la fila
   var celdaFormulario = document.createElement("td");

   celdaFormulario.colSpan = "6";
   celdaFormulario.appendChild(formulario);
   formEditar.appendChild(celdaFormulario);

  }

  function guardarCambios(usuario){
    console.log(usuario);

    let id = usuario[0];
    let dni = document.getElementById("dniInput").value;
    let nombreApellidos = document.getElementById("nombreInput").value;
    let telefono = document.getElementById("telefonoInput").value;
    let email = document.getElementById("emailInput").value;
    let contraseña =document.getElementById("contraseñaInput").value;

    var formData = new FormData();
    formData.append("id",id);
    formData.append("dni",dni);
    formData.append("nombreApellidos",nombreApellidos);
    formData.append("telefono",telefono);
    formData.append("email",email);
    formData.append("contraseña",contraseña);


    // Realizar la llamada fetch con los datos modificados
    fetch('actualizarDatosUsuario.php', {
      method: 'POST',
      body: formData,
    })
    .then((res)=>res.json());
     location.reload(true);
  }


  function  eliminarUsuario(usuario){
    let id = usuario[0];

    var formData = new FormData();
    formData.append("id",id);

    fetch('eliminarUsuario.php', {
        method: 'POST',
        body: formData,
      })
      .then((res)=>res.json());
       location.reload(true);
    }
  



  