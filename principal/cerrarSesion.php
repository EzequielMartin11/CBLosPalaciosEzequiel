<?php
// Iniciar sesión
session_start();

// Destruir la sesión
session_destroy();

// Redirigir a otra página
header("Location: ../login/index.php");
exit();
?>