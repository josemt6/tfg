<?php
include("./include/BD.php");
$usuario = $_POST['usuario'];
echo Base::getTipoUsuario2($usuario);
?>