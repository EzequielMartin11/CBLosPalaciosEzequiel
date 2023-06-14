<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../bootstrap/css/bootstrap.min.css" />
    <link rel="stylesheet" href="cssLogin.css"/>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">    
    
    <title>LOGIN</title>
</head>
<body style="background-color:#CDEEF8;">
    <!--<video src="intro.mp4" autoplay="true" muted="true" loop="loop" id="video_background" preload="auto"/>
</video/>
-->
<div id="divLogoPrincipal">
<image id="logoPrincipal" src="../Imagenes/PNG/CB LP.png"></image>
</div>
    
    <div class="row justify-content-center mt-2" id="divForm">
      <div class="col-md-4" >
        <form id="formLogin">
          <div class="form-group">
            <label for="email" id="emailLabel">Email:</label>
            <input type="email" class="form-control" id="emailInput"placeholder="Introduce tu email">
          </div>
          <div class="form-group">
            <label for="password" id="passwordLabel">Contraseña:</label>
            <input type="password" class="form-control" id="passwordInput" placeholder="Introduce tu contraseña">
          </div>
          <button type="submit" id="botonAceptarLogin" class="btn btn-primary btn-no-border">Iniciar sesión</button>
        </form>
        <div class="form-group col text-center mt-3">
          <h4>¿Aún no estás registrado? <a href="registrarUsuario.html" style="color:#1b7191;" id="btnRegistro">Pulsa aquí</a></h4>
        </div>
      </div>
    </div>

<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
<script src="login.js"></script>
</body>
</html>