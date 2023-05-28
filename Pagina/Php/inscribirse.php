<?php
include("./include/BD.php");
$usuario = $_GET['usuario'];
$carrera = $_GET['carrera'];
echo Base::inscribirseCarrera($usuario,$carrera);
?>