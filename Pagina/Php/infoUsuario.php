<?php
include("./include/BD.php");
$usuario = $_POST['usuario'];
echo json_encode(Base::getInfoUsuario($usuario));
?>