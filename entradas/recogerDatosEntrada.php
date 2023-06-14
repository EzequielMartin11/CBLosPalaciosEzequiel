<?php
session_start();
$servername = "localhost";
$username = "root";
$contraseña = "";
$basedatos = "cblospalacios";
$fecha = $_POST["fecha"];

try {
  $conn = new PDO("mysql:host=$servername;dbname=$basedatos", $username, $contraseña);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $stmt = $conn->prepare("SELECT *
  FROM entradas
  WHERE fecha = '$fecha'");
  $stmt->execute();

  echo JSON_ENCODE($stmt->fetchAll());

  
} catch(PDOException $e) {
  echo "Error: " . $e->getMessage();
}


$conn = null;
?>