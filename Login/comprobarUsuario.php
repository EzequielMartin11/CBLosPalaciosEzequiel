<?php
session_start();
$servername = "localhost";
$username = "root";
$contraseña = "";
$basedatos = "cblospalacios";
$email = $_POST["email"];
$password = $_POST["password"];


  $conn = new PDO("mysql:host=$servername;dbname=$basedatos", $username, $contraseña);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $stmt = $conn->prepare("SELECT email, contraseña, dni, nombreApellidos, telefono FROM usuarios  
  WHERE email='$email' AND contraseña='$password'");
  $stmt->execute();

 //echo JSON_ENCODE($stmt->fetchAll());
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

