<?php
session_start();
$servername = "localhost";
$username = "root";
$contraseña = "";
$basedatos = "cblospalacios";
$vs = $_POST["vs"];
$fecha = $_POST["fecha"];
$fechaAntigua = $_POST["fechaAntigua"]; 
$hora = $_POST["hora"];
$lugar = $_POST["lugar"];
$precioUnitario = $_POST["precioUnitario"];


  $conn = new PDO("mysql:host=$servername;dbname=$basedatos", $username, $contraseña);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $stmt1 = $conn->prepare("UPDATE entradas
  SET vs = '$vs', fecha= '$fecha', hora='$hora', lugar='$lugar', precioUnitario='$precioUnitario'
  WHERE fecha = '$fechaAntigua'");
  $stmt1->execute();


$conn = null;
?>