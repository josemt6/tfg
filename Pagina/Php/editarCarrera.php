<?php
include("./include/BD.php");
$carrera = $_POST['carrera'];
$modo = $_POST['modo'];
$fecha = $_POST['fecha'];
$estado = $_POST['estado'];
echo Base::editarCarrera($carrera,$nombre,$localizacion,$longitud,$desnivel,$modo,$tipo,$fecha,$estado);
?>