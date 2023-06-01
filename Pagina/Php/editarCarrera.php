<?php
include("./include/BD.php");
$carrera = $_POST['carrera'];
$modo = $_POST['modo'];
$fecha = $_POST['fecha'];
echo Base::editarCarrera($carrera,$modo,$fecha);
?>