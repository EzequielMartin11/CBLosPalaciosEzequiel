<?php
session_start();
$servername = "localhost";
$username = "root";
$contraseña = "";
$basedatos = "cblospalacios";

try {
  $conn = new PDO("mysql:host=$servername;dbname=$basedatos", $username, $contraseña);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $stmt = $conn->prepare("SELECT usuarios.nombreApellidos as nombre, entradas.fecha as fecha,entradas.vs as vs,
  entradas.lugar as lugar, nEntradas, precioTotal from compras
  INNER JOIN usuarios ON compras.idUsuario = usuarios.id
  INNER JOIN entradas ON compras.idEntrada = entradas.id");
  $stmt->execute();

  echo JSON_ENCODE($stmt->fetchAll());

  
} catch(PDOException $e) {
  echo "Error: " . $e->getMessage();
}


$conn = null;
?>