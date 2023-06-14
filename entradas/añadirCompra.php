<?php
$servername = "localhost";
$username = "root";
$password = "";
$basedatos = "cblospalacios";
$idUsuario = $_POST['idUsuario'];
$idPartido = $_POST['idPartido'];
$fecha = $_POST['fecha'];
$nEntrada = $_POST['nEntrada'];
$precioTotal = $_POST['precioTotal'];


$conn = mysqli_connect($servername, $username, $password, $basedatos);

  // Check connection
if (!$conn) {
    die("Conexión fallida: " . mysqli_connect_error());
}

$sql = "INSERT INTO compras (idUsuario, idEntrada, nEntradas, precioTotal) 
VALUES ('$idUsuario', '$idPartido', '$nEntrada','$precioTotal')";


if (mysqli_query($conn, $sql)) {
    echo json_encode ('Partido añadido');
  } else {
    echo json_encode ('Error');
  }
  
?>