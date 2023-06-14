<!DOCTYPE html>
<html>
<head>
  <title>Nuevo Partido</title>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
  <link rel="stylesheet" href="cssNuevasEntradas.css"/>

</head>
<body style="background-color:#CDEEF8;">
    <?php
session_start();
if(isset($_SESSION['email'])) {
  // La sesión ha sido iniciada, puedes mostrar los datos
  $email = $_SESSION['email'];
  $contraseña = $_SESSION['contraseña'];
  $dni = $_SESSION['dni'];
  $nombre = $_SESSION['nombreApellidos'];
  $telefono = $_SESSION['telefono'];

} else {
  // La sesión no ha sido iniciada
  echo "<h1>No has iniciado sesión</h1> ";
}
  ?>
 <nav class="navbar navbar-expand-lg navbar-light bg-custom" id="navPrincipal">
    <a class="navbar-brand" href="#">
      <img src="../Imagenes/PNG/CB LP.png" alt="Logo" width="50" height="50">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="../entradas/entradas.php" style="color:azure;">Entradas</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="../contacto/contacto.php" style="color:azure;">Contacto</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="../entradas/carrito.php" style="color:azure;">Carrito</a>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false" style="color:azure;">
            <?php echo "$nombre" ?>
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown" id="menuDrop">
            <a class="dropdown-item" href="../perfil/perfil.php" style="color:azure;">Perfil</a>
            <?php
              if($dni === '99999999A'){
                ?>
                   <a class="dropdown-item" href="../entradas/listas.php" style="color:azure;">Listas</a>
                <?php
              }?>
            

            <a class="dropdown-item" href="../principal/cerrarSesion.php" style="color:azure;">Log-out</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>

  <div class="container">
    <h1 style="text-align:center;" class="mt-4">Nuevo Partido</h1>
    <form id="formularioPartido">
      <div class="form-group">
        <label for="vs">VS</label>
        <input type="text" class="form-control" id="vs" name="vs" required>
      </div>
      <div class="form-group">
        <label for="fecha">Fecha</label>
        <input type="date" class="form-control" id="fecha" name="fecha" required>
      </div>
      <div class="form-group">
        <label for="hora">Hora</label>
        <input type="time" class="form-control" id="hora" name="hora" required>
      </div>
      <div class="form-group">
        <label for="lugar">Lugar</label>
        <input type="text" class="form-control" id="lugar" name="lugar" required>
      </div>
      <div class="form-group">
        <label for="precio">Precio</label>
        <input type="number" class="form-control" id="precio" name="precio" step="0.01" required>
      </div>
      <button type="submit" class="btn btn-primary" id="aceptarBtn">Aceptar</button>
      <button type="button" class="btn btn-secondary" id="cancelarBtn">Cancelar</button>
    </form>
  </div>

  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
  <script>
    document.addEventListener("DOMContentLoaded", function() {
      // Obtener elementos del DOM
      var formularioPartido = document.getElementById("formularioPartido");
      var cancelarBtn = document.getElementById("cancelarBtn");
      var aceptarBtn = document.getElementById("aceptarBtn");

      // Agregar evento al botón "Cancelar"
      cancelarBtn.addEventListener("click", function() {
        formularioPartido.reset();
      });

      // Agregar evento al formulario para realizar la llamada Fetch
      formularioPartido.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar el envío del formulario

        // Obtener los valores del formulario
        var vs = document.getElementById("vs").value;
        var fecha = document.getElementById("fecha").value;
        var hora = document.getElementById("hora").value;
        var lugar = document.getElementById("lugar").value;
        var precio = document.getElementById("precio").value;

        let formData=new FormData();
        formData.append("vs",vs);
        formData.append("fecha",fecha);
        formData.append("precioUnitario",precio);
        formData.append("hora",hora);
        formData.append("lugar",lugar);

        fetch("nuevaEntrada.php", {
          method: "POST",
          body: formData,
        })
        .then((res)=>res.json())
        .then(entradaAñadida);
      });
    });

    function entradaAñadida(result){
        alert(result);
        if(result!='Ya existe un partido en esta fecha'){
          window.open("../entradas/entradas.php","_self");
        }
        
    }
  </script>

</body>
</html>