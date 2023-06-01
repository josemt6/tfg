<?php
include("./include/BD.php");
$usuario = $_POST['usuario'];
$carrera = $_POST['carrera'];
if (Base::comprobarDorsal($usuario, $carrera) == false) {
    # code...
    echo Base::inscribirseCarrera($usuario, $carrera);
} else {
    echo "false1";
}
?>
