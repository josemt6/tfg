<?php
    include("./include/BD.php");
    $usuario = "jose";
    $clave = "1234";
    echo Base::getUsuario($usuario,$clave);
?>