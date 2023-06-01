<?php
include("./include/BD.php");
$solicitud = $_GET['solicitud'];
$usuario = $_GET['usuario'];
$carrera = $_GET['carrera']; 
Base::setAceptada($solicitud);
echo Base::inscribirseCarrera($usuario,$carrera);
?>