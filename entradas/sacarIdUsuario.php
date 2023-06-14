<?php
session_start();
$servername = "localhost";
$username = "root";
$contraseña = "";
$basedatos = "cblospalacios";
$dni = $_SESSION['dni'];

try {
  $conn = new PDO("mysql:host=$servername;dbname=$basedatos", $username, $contraseña);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $stmt = $conn->prepare("SELECT id
  FROM usuarios 
  WHERE dni='$dni'");
  $stmt->execute();

  echo JSON_ENCODE($stmt->fetchAll());

  
} catch(PDOException $e) {
  echo "Error: " . $e->getMessage();
}


$conn = null;
?>