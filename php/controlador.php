<?php

session_start();
$_SESSION['nombre'] = $_GET['nombre'];
header('location:../info.php');
?>