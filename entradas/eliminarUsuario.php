<?php
session_start();
$servername = "localhost";
$username = "root";
$contraseña = "";
$basedatos = "cblospalacios";
$id = $_POST["id"];



  $conn = new PDO("mysql:host=$servername;dbname=$basedatos", $username, $contraseña);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $stmt = $conn->prepare("DELETE FROM compras WHERE idUsuario = '$id'");
  $stmt1 = $conn->prepare("DELETE FROM usuarios WHERE id = '$id'");
  $stmt->execute();
  $stmt1->execute();


$conn = null;
?>