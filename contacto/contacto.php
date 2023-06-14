<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="contacto.css"/>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <title>CONTACTO</title>
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

   
<div class="d-flex mx-5  justify-content-center align-items-center" style="height:50vh;">
    <div class="divBotones flex flex-row" id="botonInstagram">
    <button class="btn custom-button" id="btnInstagram">
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"/></svg>

    <b>Instagram</button>
    </div>
  
    <div class="divBotones flex flex-row" id="botonFacebook">
    <button class="btn custom-button" id="btnFacebook">
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 25.832031 46 A 1.0001 1.0001 0 0 0 26.158203 46 L 31.832031 46 A 1.0001 1.0001 0 0 0 32.158203 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 33 44 L 33 30 L 36.820312 30 L 38.220703 23 L 33 23 L 33 21 C 33 20.442508 33.05305 20.398929 33.240234 20.277344 C 33.427419 20.155758 34.005822 20 35 20 L 38 20 L 38 14.369141 L 37.429688 14.097656 C 37.429688 14.097656 35.132647 13 32 13 C 29.75 13 27.901588 13.896453 26.71875 15.375 C 25.535912 16.853547 25 18.833333 25 21 L 25 23 L 22 23 L 22 30 L 25 30 L 25 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 32 15 C 34.079062 15 35.38736 15.458455 36 15.701172 L 36 18 L 35 18 C 33.849178 18 32.926956 18.0952 32.150391 18.599609 C 31.373826 19.104024 31 20.061492 31 21 L 31 25 L 35.779297 25 L 35.179688 28 L 31 28 L 31 44 L 27 44 L 27 28 L 24 28 L 24 25 L 27 25 L 27 21 C 27 19.166667 27.464088 17.646453 28.28125 16.625 C 29.098412 15.603547 30.25 15 32 15 z"/></svg>
    <b>  Facebook</button>
    </div>
            </div>


    <div class="d-flex w-100  justify-content-center align-items-center" style="">
    <div class="divBotones " id="botonTelefono">
    <button class="btn custom-button ml-3" id="btnTlf">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="50px" width="50px" version="1.1" id="Layer_1" viewBox="0 0 359.456 359.456" xml:space="preserve">
<g id="XMLID_450_">
    <g>
        <path d="M344.788,261.44l-64.759-64.758l-61.013,41.681c-14.041-10.256-40.275-31.33-54.537-45.588    c-13.962-13.961-32.607-37.637-41.941-50.74l42.208-60.668L92.903,9.548C86.634,3.302,78.845,0,70.377,0    c-12.699,0-26.54,7.402-41.139,22c-9.77,9.771-25.823,31.549-23.555,67.624c2.896,46.069,34.553,99.618,94.094,159.159    c68.618,68.617,113.205,110.673,163.065,110.673c1.915,0,3.858-0.065,5.773-0.193c7.193-0.479,14.658-2.306,24.205-5.925    l0.102-0.04c8.896-3.482,25.719-14.553,39.376-28.21c14.402-14.403,21.7-28.349,21.691-41.453    C353.983,275.111,350.798,267.433,344.788,261.44z M318.155,310.946c-12.295,12.295-26.623,21.401-32.481,23.712    c-7.592,2.874-13.265,4.308-18.388,4.649c-43.492,2.9-86.099-37.4-153.367-104.667C-10.898,109.822,28.372,51.151,43.381,36.142    C53.79,25.733,63.377,20,70.377,20c3.193,0,5.865,1.181,8.397,3.704l59.997,59.979l-40.438,58.124l3.665,5.639    c8.228,12.661,31.704,42.839,48.339,59.474c16.745,16.739,49.772,43.038,63.016,51.922l5.622,3.771l58.64-40.06l53.041,53.04    c2.24,2.235,3.331,4.87,3.333,8.057C333.992,287.927,331.939,297.163,318.155,310.946z"/></g></g></svg>
        <b> 666777555</button>
      </div>

      <div class="divBotones" id="botonEmail">
        <button class="btn custom-button  mr-3"><a href="mailto:cblospalacios@hotmail.com" id="inputEmail">
      <svg fill="#000000" width="50px" height="50px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><path d="M0 1694.235h1920V226H0v1468.235ZM112.941 376.664V338.94H1807.06v37.723L960 1111.233l-847.059-734.57ZM1807.06 526.198v950.513l-351.134-438.89-88.32 70.475 378.353 472.998H174.042l378.353-472.998-88.32-70.475-351.134 438.89V526.198L960 1260.768l847.059-734.57Z" fill-rule="evenodd"/></svg>
      <b> Email</a></button>
      </div>
</div> 
  

      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
<script src="contacto.js"></script>
  </body>