<?php
session_start();
$servername = "localhost";
$username = "root";
$password = "";
$basedatos = "cblospalacios";
$id = $_POST["id"];
$dni = $_POST["dni"];
$telefono = $_POST["telefono"];
$nombreApellidos = $_POST["nombreApellidos"];
$email = $_POST["email"];
$contrasena = $_POST["contraseña"];


  $conn = new PDO("mysql:host=$servername;dbname=$basedatos", $username, $password);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $stmt1 = $conn->prepare("UPDATE usuarios
  SET dni = '$dni', nombreApellidos= '$nombreApellidos', telefono= '$telefono', email='$email', contraseña='$contrasena'
  WHERE id = '$id'");
  $stmt1->execute();
  echo JSON_ENCODE($stmt1->fetchAll());

  $conn = null;


  ?>