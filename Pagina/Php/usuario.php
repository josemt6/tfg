<?php
    include("./include/BD.php");
    $usuario = $_GET['usuario'];
    $clave = $_GET['clave'];
    echo Base::getUsuario($usuario,$clave);
?>