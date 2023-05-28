<?php
include("./include/BD.php");
$carrera = $_POST['carrera'];
$nombre = $_POST['nombre'];
$localizacion = $_POST['localizacion'];
$longitud = $_POST['longitud'];
$desnivel = $_POST['desnivel'];
$modo = $_POST['modo'];
$tipo = $_POST['tipo'];
$fecha = $_POST['fecha'];
$estado = $_POST['estado'];
echo Base::editarCarrera($carrera,$nombre,$localizacion,$longitud,$desnivel,$modo,$tipo,$fecha,$estado);
?>