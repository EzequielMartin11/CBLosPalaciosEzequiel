<?php
session_start();
if(isset($_SESSION['email'])) {
    // La sesión ha sido iniciada, puedes mostrar los datos
    $nombre = $_SESSION['nombreApellidos'];
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
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="cssPerfil.css"/>
    <title>Perfil de <?php echo "$nombre" ?></title>
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


  <h1 style="text-align:center;"> Actualizar Perfil</h1>
<form  id="formPerfil">
 
  <div class="form-group">
    <label for="nombre">Nombre:</label>
    <input type="text" class="form-control" id="inputNombre" value=<?php echo"$nombre"?>>
  </div>
  <div class="form-group">
    <label for="nombre">Dni:</label>
    <input type="text" class="form-control" id="inputDni" value=<?php echo"$dni"?>>
  </div>
  <div class="form-group">
    <label for="telefono">Teléfono:</label>
    <input type="tel" class="form-control" id="inputTelefono" value=<?php echo"$telefono"?>>
  </div>
  <div class="form-group">
    <label for="contrasena">Contraseña:</label>
    <input type="password" class="form-control" id="inputContraseña" value=<?php echo"$contraseña"?>>
  </div>
  <button type="submit" class="btn btn-primary" id="btnGuardar">Guardar</button>
</form>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
<script src="perfil.js"></script>
</body>
</html>