
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

<!DOCTYPE html>
<html>
<head>
  <title>Carrito</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <link rel="stylesheet" href="cssCarrito.css"/>
</head>
<body style="background-color:#CDEEF8;">

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
          <a class="nav-link" href="carrito.php" style="color:azure;">Carrito</a>
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

  <div class="container mt-4  table-responsive">
    <h1>Carrito</h1>
    <table class="table " id="tablaCarrito">
      <thead>
        <tr>
          <th scope="col">VS</th>
          <th scope="col">Fecha</th>
          <th scope="col">Hora</th>
          <th scope="col">Lugar</th>
          <th scope="col">Nº Entradas</th>
          <th scope="col">Precio Total</th>
        </tr>
      </thead>
    </table>
  </div>

  
<div class="container">
        <button id="aceptarCompraBtn" class="btn btn-success">Aceptar compra</button>
        <button id="eliminarCarritoBtn" class="btn btn-danger">Eliminar Carrito</button>
</div>

<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
  <script src="carrito.js"></script>
</body>
</html>