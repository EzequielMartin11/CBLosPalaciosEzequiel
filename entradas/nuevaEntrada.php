<?php
$servername = "localhost";
$username = "root";
$password = "";
$basedatos = "cblospalacios";
$vs = $_POST['vs'];
$fecha = $_POST['fecha'];
$hora = $_POST['hora'];
$lugar = $_POST['lugar'];
$precioUnitario = $_POST['precioUnitario'];


$conn = mysqli_connect($servername, $username, $password, $basedatos);

  // Check connection
if (!$conn) {
    die("Conexión fallida: " . mysqli_connect_error());
}

$sql1="SELECT fecha FROM entradas WHERE fecha='$fecha'";

$sql2 = "INSERT INTO entradas (fecha, lugar, precioUnitario, vs, hora) 
VALUES ('$fecha', '$lugar', '$precioUnitario','$vs','$hora')";

$resultadoSql1 = mysqli_query($conn, $sql1);

  $existe = mysqli_fetch_assoc($resultadoSql1);
 // $valor = $existe['fecha'];


if($existe){
  echo json_encode ('Ya existe un partido en esta fecha');
}else
{
  $resultadoSql2=mysqli_query($conn, $sql2);
  if ($resultadoSql2) {
    echo json_encode ('Registro insertado correctamente en la BD');
  } else {
    echo json_encode ('Error');
  }
}


  
/**
 
if($resultadoSql1 == $fecha){
  
}else
 */
?>