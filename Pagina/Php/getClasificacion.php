<?php
include("./include/BD.php");
$carrera = $_POST['carrera'];
echo Base::getClasificacionCarrera($carrera);
?>