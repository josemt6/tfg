<?php
include("./include/BD.php");
$usuario = $_POST['usuario'];
echo Base::listadoInscripciones($usuario);
?>