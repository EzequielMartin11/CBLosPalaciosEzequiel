<?php
session_start();
$servername = "localhost";
$username = "root";
$contraseña = "";
$basedatos = "cblospalacios";
$nombre = $_POST["nombre"];
$password = $_POST["password"];
$telefono = $_POST["telefono"];
$dni = $_POST["dni"];


  $conn = new PDO("mysql:host=$servername;dbname=$basedatos", $username, $contraseña);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $stmt1 = $conn->prepare("UPDATE usuarios
  SET nombreApellidos = '$nombre', telefono= '$telefono', contraseña='$password'
  WHERE dni = '$dni'");
  $stmt1->execute();

  $stmt = $conn->prepare("SELECT email, contraseña, dni, nombreApellidos, telefono FROM usuarios  
  WHERE dni = '$dni'");
  $stmt->execute();

  $result = $stmt->fetchAll();
  foreach($result as $datos => $valor){
    echo $datos;
  }
 
  if (count($result) > 0) {
    // Los datos existen en la base de datos
    $row = $result[0];

    // Almacenar los datos en variables de sesión
    $_SESSION['email'] = $row['email'];
    $_SESSION['contraseña'] = $row['contraseña'];
    $_SESSION['dni'] = $row['dni'];
    $_SESSION['nombreApellidos'] = $row['nombreApellidos'];
    $_SESSION['telefono'] = $row['telefono'];

    exit();
  } else {
    // Los datos no existen en la base de datos

    echo json_encode( "error");
  }

$conn = null;
?>