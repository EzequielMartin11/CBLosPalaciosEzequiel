<?php
// Detalles de conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$basedatos = "cblospalacios";
$nombre = $_POST["nombre"];
$dni = $_POST["dni"];
$tlf = $_POST["tlf"];
$email = $_POST['email'];
$contraseña = $_POST['contraseña'];

try {
  $conn = new PDO("mysql:host=$servername;dbname=$basedatos", $username, $password);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $stmt = $conn->prepare("INSERT INTO usuarios (nombreApellidos,dni, telefono, email, contraseña) 
  VALUES ('$nombre', '$dni', '$tlf', '$email', '$contraseña')");
  $stmt->execute();

  echo JSON_ENCODE($stmt->fetchAll());

  
} catch(PDOException $e) {
  echo "Error: " . $e->getMessage();
}


$conn = null;
?>