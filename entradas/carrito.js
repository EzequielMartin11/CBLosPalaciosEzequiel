
let contadorFilasCarrito = 0;
// Espera a que el documento esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
  // Obtiene la tabla del carrito
  var tablaCarrito = document.getElementById('tablaCarrito');
  tablaCarrito.classList.add('table-striped');
  // Obtiene los productos del carrito desde el LocalStorage
  var productosCarrito = JSON.parse(localStorage.getItem('productosCarrito')) || [];

// Agrega las filas correspondientes a la tabla del carrito
for (var i = 0; i < productosCarrito.length; i++) {
  var producto = productosCarrito[i];

  // Crea una nueva fila en la tabla del carrito
  var nuevaFila = tablaCarrito.insertRow();

  var celdaVS = nuevaFila.insertCell();
  celdaVS.textContent = producto.vs;

  var celdaFecha = nuevaFila.insertCell();
  celdaFecha.textContent = producto.fecha;
  celdaFecha.classList.add("celdaFecha");

  var celdaHora = nuevaFila.insertCell();
  celdaHora.textContent = producto.hora;

  var celdaLugar = nuevaFila.insertCell();
  celdaLugar.textContent = producto.lugar;

  var celdaNEntradas = nuevaFila.insertCell();
  celdaNEntradas.textContent = producto.nEntradas;
  celdaNEntradas.classList.add("celdaNEntradas");

  var celdaPrecioTotal = nuevaFila.insertCell();
  celdaPrecioTotal.textContent = producto.precioTotal;
  celdaPrecioTotal.classList.add("celdaPrecioTotal");
  contadorFilasCarrito += 1;
}
});

var aceptarCompraBtn = document.getElementById('aceptarCompraBtn');
aceptarCompraBtn.addEventListener('click', aceptarCarrito);
let idUsuario;
async function aceptarCarrito(){
  //funcion para obtener las lineas del carrito
  const carrito = await obtenerArrayCarrito();
   idUsuario = await obtenerIdUsuario();
  añadirCompra(carrito);
}

let arrayCarrito = [];
let contadorCompras = 0;
async function obtenerArrayCarrito() {
  let fecha;
  let nEntrada;
  let precioTotals;
  console.log(contadorFilasCarrito)

  for (let i = 0; i < contadorFilasCarrito; i++) {
    let filaCarrito = [];
    const fechasFila = document.getElementsByClassName('celdaFecha')[i];
    console.log(fechasFila);
    const nEntradasFila = document.getElementsByClassName('celdaNEntradas')[i];
    const precioTotalFila = document.getElementsByClassName('celdaPrecioTotal')[i];
    fecha = fechasFila.textContent;
    nEntrada = nEntradasFila.textContent;
    precioTotals = precioTotalFila.textContent;
    filaCarrito.push(fecha);
    filaCarrito.push(nEntrada);
    filaCarrito.push(precioTotals);
    arrayCarrito.push(filaCarrito);
    const idPartido = await consultarBaseDatos(fecha);
    totalCarrito = calcularTotalCarrito(precioTotals);
    filaCarrito.push(idPartido);
    console.log(arrayCarrito);
  }
  
  return arrayCarrito;
}

async function consultarBaseDatos(fecha) {  
  const formData = new FormData();
  formData.append("fecha", fecha);

  const response = await fetch("recogerIdPartido.php", {
    method: "POST",
    body: formData,
  });

  const data = await response.json();
  const idReturn = data[0].id;
  return idReturn;
}

async function obtenerIdUsuario(){
  
  const fetchIdUsuario = await fetch("sacarIdUsuario.php",{
    method: "POST",
  });
  const data = await fetchIdUsuario.json();
  
  idUsuario = data[0].id;
  arrayCarrito.push(idUsuario);
 return idUsuario;
  }

let precioTotalCarrito = 0;
  function calcularTotalCarrito(totalLinea){
    const precioLinea = parseFloat(totalLinea);
    precioTotalCarrito += precioLinea;
    return precioTotalCarrito;

  }

  async function añadirCompra(carrito) {
      
    for (let i = 0; i < carrito.length; i++) {
      const lineaCarrito = carrito[i];
      const fecha = lineaCarrito[0];
      const nEntrada = lineaCarrito[1];
      const precioTotal = lineaCarrito[2];
      const idPartido = lineaCarrito[3];
      // Crear el objeto de datos a enviar en el fetch
      let formData=new FormData();
      formData.append("fecha",fecha);
      formData.append("nEntrada",nEntrada);
      formData.append("precioTotal",precioTotal);
      formData.append("idPartido",idPartido);
      formData.append("idUsuario",idUsuario);
      if(idPartido){
        fetch("añadirCompra.php", {
          method: "POST",
          body: formData,
        })
        .then((res)=>res.json())
        .then(compraAñadida);
      }
        
      
    }
  }
  
  function compraAñadida(algo){
    if(contadorCompras == arrayCarrito.length-2){
      alert("Compra aceptada");
      productosCarrito = [];
      localStorage.removeItem('productosCarrito');
      tablaCarrito.innerHTML = ''; 
      location.reload(true);
      contadorCompras = 0;
    }
    
  else{
    contadorCompras++;
  }
  }
 
// Botón Eliminar Carrito
var eliminarCarritoBtn = document.getElementById('eliminarCarritoBtn');
eliminarCarritoBtn.addEventListener('click', function() {
  // Limpia el carrito
  productosCarrito = [];
  localStorage.removeItem('productosCarrito');
  tablaCarrito.innerHTML = ''; 
  location.reload(true);
  arrayCarrito = [];
  console.log(arrayCarrito);  
});

