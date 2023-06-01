<?php
include("./include/BD.php");
$usuario = $_POST['usuario'];
$carrera = $_POST['carrera'];
if (Base::comprobarSolicitud($usuario,$carrera)) {
   # code...
   echo "false";
} else {
    echo Base::mandarSolicitud($usuario,$carrera);
}
?>