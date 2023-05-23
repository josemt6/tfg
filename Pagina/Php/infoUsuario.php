<?php

include("./include/BD.php");

$usuario = $_GET['usuario'];
echo Base::getInfoUsuario($usuario);

?>