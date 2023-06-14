<?php
session_start();
$servername = "localhost";
$username = "root";
$contraseña = "";
$basedatos = "cblospalacios";
$fecha = $_POST["fecha"];



  $conn = new PDO("mysql:host=$servername;dbname=$basedatos", $username, $contraseña);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $stmt1 = $conn->prepare("DELETE FROM entradas WHERE fecha = '$fecha';");
  $stmt1->execute();


$conn = null;
?>