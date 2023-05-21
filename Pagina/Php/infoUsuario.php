<?php

include("./include/BD.php");

$usuario = $_GET['usuario'];
echo json_encode(Base::getInfoUsuario($usuario));

?>