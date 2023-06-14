//OBtener las entradas de la base de datos
document.addEventListener("DOMContentLoaded", function() {
let contadorTr = 0;
fetch("obtenerEntradas.php")
.then(response => response.json())
.then(data => {
  // Obtener el elemento de la tabla
  var tablaProductos = document.getElementById("tablaProductos");

  // Crear la estructura de la tabla
  var tbody = document.createElement("tbody");
  tbody.classList.add("tbody");

  // Recorrer los datos y generar las filas de la tabla
  data.forEach(item => {

    var tr = document.createElement("tr");
    tr.classList.add("lineaTabla");
    contadorTr++;
    tr.setAttribute('id', contadorTr);
    // Crear las celdas y asignarles los valores
    var vsCell = document.createElement("td");
    vsCell.textContent = item.vs;
    tr.appendChild(vsCell);

    var fechaCell = document.createElement("td");
    fechaCell.textContent = item.fecha;
    tr.appendChild(fechaCell);

    var horaCell = document.createElement("td");
    horaCell.textContent = item.hora;
    tr.appendChild(horaCell);

    var lugarCell = document.createElement("td");
    lugarCell.textContent = item.lugar;
    tr.appendChild(lugarCell);

    var precioCell = document.createElement("td");
    precioCell.textContent = item.precioUnitario+"€";
    tr.appendChild(precioCell);

    var accionesCell = document.createElement("td");
    var incrementBtn = document.createElement("button");
    incrementBtn.type = "button";
    incrementBtn.className = "btn btn-sm btn-primary increment-btn";
    incrementBtn.textContent = "+";
    accionesCell.appendChild(incrementBtn);

    var decrementBtn = document.createElement("button");
    decrementBtn.type = "button";
    decrementBtn.className = "btn btn-sm btn-primary decrement-btn";
    decrementBtn.textContent = "-";
    accionesCell.appendChild(decrementBtn);

    tr.appendChild(accionesCell);

    var nEntradasCell = document.createElement("td");
    nEntradasCell.className = "entry-count";
    nEntradasCell.textContent = "0";
    tr.appendChild(nEntradasCell);

    var precioTotalCell = document.createElement("td");
    precioTotalCell.className = "total-price";
    precioTotalCell.textContent = "0.0€";
    tr.appendChild(precioTotalCell);

    var añadirCell = document.createElement("td");
    var añadirBtn = document.createElement("button");
    añadirBtn.type = "button";
    añadirBtn.className = "btn btn-sm btn-success add-btn";
    añadirBtn.textContent = "Añadir";
    añadirBtn.setAttribute("id", "btnAñadir");
    añadirCell.appendChild(añadirBtn);
    
    //Añadir botones editar y eliminar si es el usuario
    const idUsuarioPromise = obtenerIdUsuario();
    console.log(idUsuarioPromise);
    (async () => {
      
      const idUsuario = await idUsuarioPromise;
      if(idUsuario == 1){
      var editarBtn = document.createElement("button");
        editarBtn.type = "button";
        editarBtn.className = "btn btn-sm btn-warning";
        editarBtn.textContent = "Editar";
        editarBtn.setAttribute("id", "btnEditar");
        añadirCell.appendChild(editarBtn);

        var eliminarBtn = document.createElement("button");
        eliminarBtn.type = "button";
        eliminarBtn.className = "btn btn-sm btn-danger";
        eliminarBtn.textContent = "Eliminar";
        eliminarBtn.setAttribute("id", "btnEliminar");
        añadirCell.appendChild(eliminarBtn);

        //controlador para el boton editar
        editarBtn.addEventListener('click', () => {
          // Obtener la fecha de la fila
          var fecha = fechaCell.textContent;
          //crear formulario para editar
          obtenerPartido(fecha);

        });

        //controlador para el boton eliminar
        eliminarBtn.addEventListener('click', () => {
          // Obtener la fecha de la fila
          var fecha = fechaCell.textContent;
          //crear formulario para editar
          obtenerPartidoEliminar(fecha);

        });
      }
      })();
  
    tr.appendChild(añadirCell);
    //console.log(contadorTr);
    tbody.appendChild(tr);

  });

  // Agregar el cuerpo de la tabla a la tabla existente
  tablaProductos.appendChild(tbody);
  manejarFilasProductos();

  // Obtener todos los botones de incremento
  const incrementButtons = document.querySelectorAll('.increment-btn');

  // Agregar evento de clic a cada botón de incremento
  incrementButtons.forEach(button => {
    button.addEventListener('click', () => {
      const entryCountElement = button.parentNode.parentNode.querySelector('.entry-count');
      const totalPriceElement = button.parentNode.parentNode.querySelector('.total-price');
      const price = parseFloat(button.parentNode.parentNode.querySelector('td:nth-child(5)').textContent);

      let entryCount = parseInt(entryCountElement.textContent);
      let totalPrice = parseFloat(totalPriceElement.textContent);

      entryCount++;
      totalPrice += price;

      entryCountElement.textContent = entryCount;
      totalPriceElement.textContent = totalPrice.toFixed(2) + '€';
    });
  });

  // Obtener todos los botones de decremento
  const decrementButtons = document.querySelectorAll('.decrement-btn');

  // Agregar evento de clic a cada botón de decremento
  decrementButtons.forEach(button => {
    button.addEventListener('click', () => {
      const entryCountElement = button.parentNode.parentNode.querySelector('.entry-count');
      const totalPriceElement = button.parentNode.parentNode.querySelector('.total-price');
      const price = parseFloat(button.parentNode.parentNode.querySelector('td:nth-child(5)').textContent);

      let entryCount = parseInt(entryCountElement.textContent);
      let totalPrice = parseFloat(totalPriceElement.textContent);

      // Restar 1 al número de entradas y restar el precio de una entrada al precio total
      entryCount = Math.max(entryCount - 1, 0);
      totalPrice = Math.max(totalPrice - price, 0);

      // Actualizar los valores en los elementos correspondientes
      entryCountElement.textContent = entryCount;
      totalPriceElement.textContent = totalPrice.toFixed(2) + '€';
    });
  });
});

window.addEventListener('load', function() {
  // Obtener el botón de "Añadir partido"

  var addPartidoBtn = document.querySelector(".add-partido-btn");
  if(addPartidoBtn != null){
 // Agregar evento al botón "Añadir partido"
 addPartidoBtn.addEventListener("click", function() {
  // Redireccionar a la página de nuevo partido
  window.location.href = "nuevasEntradas.php";
});
}

});

  // Obtener elementos del DOM
  var addPartidoBtn = document.querySelector('.add-partido-btn');

  // Agregar evento al botón "Añadir partido"
  if(addPartidoBtn != null){
  addPartidoBtn.addEventListener('click', function() {
    // Redireccionar a la página de nuevo partido
    window.location.href = 'nuevasEntradas.php';
  });
}
});


async function obtenerIdUsuario(){

  const fetchIdUsuario = await fetch("sacarIdUsuario.php",{
    method: "POST",
  });
  const data = await fetchIdUsuario.json();
  idUsuario = data[0].id;
  
  return idUsuario;
}


function obtenerPartido(fecha){
let formData = new FormData();
formData.append("fecha",fecha)

  fetch('recogerDatosEntrada.php', {
    method: 'POST',
    body:formData,
  })
    .then(response => response.json())
    .then(data => {
      // Hacer algo con los datos obtenidos
      generarFormularioEditar(data);
    });
   // console.log(idPartido);    
}

function generarFormularioEditar(data){
  var formulariosAntiguos = document.getElementsByClassName('formulario-editar');
  while (formulariosAntiguos.length > 0) {
    formulariosAntiguos[0].remove();
  }
    const { vs, fecha, hora, lugar, precioUnitario } = data;

    // Crear el formulario
    var form = document.createElement('form');
    form.className = 'formulario-editar';
  
    // Crear el campo "vs"
    var vsFormGroup = document.createElement('div');
    vsFormGroup.className = 'form-group';
    var vsLabel = document.createElement('label');
    vsLabel.textContent = 'VS:';
    var vsInput = document.createElement('input');
    vsInput.setAttribute("id", "vsInput");
    vsInput.type = 'text';
    vsInput.className = 'form-control';
    vsInput.value = data[0].vs;
    vsInput.name = 'vs';
    vsFormGroup.appendChild(vsLabel);
    vsFormGroup.appendChild(vsInput);
    
    // Crear el campo "fecha"
    var fechaFormGroup = document.createElement('div');
    fechaFormGroup.className = 'form-group';
    var fechaLabel = document.createElement('label');
    fechaLabel.textContent = 'Fecha:';
    var fechaInput = document.createElement('input');
    fechaInput.setAttribute("id", "fechaInput");
    fechaInput.type = 'date';
    fechaInput.className = 'form-control';
    fechaInput.value = data[0].fecha;
    fechaInput.name = 'fecha';
    fechaFormGroup.appendChild(fechaLabel);
    fechaFormGroup.appendChild(fechaInput);
  
    // Crear el campo "hora"
    var horaFormGroup = document.createElement('div');
    horaFormGroup.className = 'form-group';
    var horaLabel = document.createElement('label');
    horaLabel.textContent = 'Hora:';
    var horaInput = document.createElement('input');
    horaInput.setAttribute("id", "horaInput");
    horaInput.type = 'time';
    horaInput.className = 'form-control';
    horaInput.value = data[0].hora;
    horaInput.name = 'hora';
    horaFormGroup.appendChild(horaLabel);
    horaFormGroup.appendChild(horaInput);
  
    // Crear el campo "lugar"
    var lugarFormGroup = document.createElement('div');
    lugarFormGroup.className = 'form-group';
    var lugarLabel = document.createElement('label');
    lugarLabel.textContent = 'Lugar:';
    var lugarInput = document.createElement('input');
    lugarInput.setAttribute("id", "lugarInput");
    lugarInput.type = 'text';
    lugarInput.className = 'form-control';
    lugarInput.value = data[0].lugar;
    lugarInput.name = 'lugar';
    lugarFormGroup.appendChild(lugarLabel);
    lugarFormGroup.appendChild(lugarInput);
  
    // Crear el campo "precioUnitario"
    var precioFormGroup = document.createElement('div');
    precioFormGroup.className = 'form-group';
    var precioLabel = document.createElement('label');
    precioLabel.textContent = 'Precio Unitario:';
    var precioInput = document.createElement('input');
    precioInput.setAttribute("id", "precioInput");
    precioInput.type = 'number';
    precioInput.className = 'form-control';
    precioInput.value = data[0].precioUnitario;
    precioInput.name = 'precioUnitario';
    precioFormGroup.appendChild(precioLabel);
    precioFormGroup.appendChild(precioInput);
  
    // Agregar los campos al formulario
    form.appendChild(vsFormGroup);
    form.appendChild(fechaFormGroup);
    form.appendChild(horaFormGroup);
    form.appendChild(lugarFormGroup);
    form.appendChild(precioFormGroup);
  
    // Crear el botón de envío
    var enviarBtn = document.createElement('button');
    enviarBtn.type = 'submit';
    enviarBtn.className = 'btn btn-primary';
    enviarBtn.textContent = 'Guardar';
  
    // Agregar el botón de envío al formulario
    form.appendChild(enviarBtn);
  
    // Agregar el formulario al documento (al final del elemento "body" en este ejemplo)
    document.body.appendChild(form);
  
    // Agregar un controlador de eventos al formulario para manejar el envío
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      let vs = document.getElementById("vsInput").value;
      let fecha = document.getElementById("fechaInput").value;
      let hora = document.getElementById("horaInput").value;
      let lugar = document.getElementById("lugarInput").value;
      let precioInput = document.getElementById("precioInput").value;
      
      // Obtener los datos modificados del formulario
      var formData = new FormData(form);
      formData.append("vs",vs);
      formData.append("fecha",fecha);
      formData.append("fechaAntigua",fecha);
      formData.append("hora",hora);
      formData.append("lugar",lugar);
      formData.append("precioUnitario",precioInput);

      // Realizar la llamada fetch con los datos modificados
      fetch('actualizarDatosEntrada.php', {
        method: 'POST',
        body: formData,
      })
        .then(response => response.json())
        .then(data => {
          
        });
        location.reload(true);
    });
}


function obtenerPartidoEliminar(fecha){
  let formData = new FormData();
  formData.append("fecha",fecha)
  
    fetch('recogerDatosEntrada.php', {
      method: 'POST',
      body:formData,
    })
      .then(response => response.json())
      .then(data => {
        eliminarPartido(data);
      });   
  }

  function eliminarPartido(data){
    let formData = new FormData();
    formData.append("fecha",data[0].fecha)
    
      fetch('eliminarPartido.php', {
        method: 'POST',
        body:formData,
      })
        .then(response => response.json())
        .then(data => {
        });
        location.reload(true);
    }

    function cogerFilas(){
      document.addEventListener("DOMContentLoaded", function() {
          let fila=document.getElementsByTagName('tr');
          console.log(fila);
          return fila;
      });
    }
  
    function manejarFilasProductos() {
      // Obtener la tabla de productos
      var tablaProductos = document.getElementById('tablaProductos');
      let filasProductos ;

        filasProductos= document.getElementsByClassName("lineaTabla");

      // Recorrer las filas de productos
      for(var i = 0; i < filasProductos.length; i++) {
        var fila = document.getElementById(i+1);
        

        // Obtener el botón de "Añadir" de la fila actual
        var botonAgregar = fila.querySelector('.add-btn');
        
        // Agregar un controlador de eventos para el evento de clic
        botonAgregar.addEventListener('click', function(event) {
          var elementoClicado = event.target;
          var padreAgregar = elementoClicado.parentNode;
        var trClicado = padreAgregar.parentNode;
          var vs = trClicado.cells[0].textContent;
          var fecha = trClicado.cells[1].textContent;
          var hora = trClicado.cells[2].textContent;
          var lugar = trClicado.cells[3].textContent;
          var nEntradas = trClicado.cells[6].textContent;
          var precioTotal = trClicado.cells[7].textContent;
  
          // Crear un objeto con los datos
          var nuevoProducto = {
            vs: vs,
            fecha: fecha,
            hora: hora,
            lugar: lugar,
            nEntradas: nEntradas,
            precioTotal: precioTotal
          };
  
          // Obtener los productos existentes en el carrito desde el LocalStorage
          var productosCarrito = JSON.parse(localStorage.getItem('productosCarrito')) || [];
          productosCarrito.push(nuevoProducto);
  
          // Guardar los productos actualizados en el LocalStorage
          localStorage.setItem('productosCarrito', JSON.stringify(productosCarrito));
        });
      }
    }

