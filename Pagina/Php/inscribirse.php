<?php
include("./include/BD.php");
$usuario = $_POST['usuario'];
$carrera = $_POST['carrera'];
echo Base::inscribirseCarrera($usuario,$carrera);
?>