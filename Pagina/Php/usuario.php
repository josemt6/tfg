<?php
    include("./include/BD.php");
    $usuario = $_POST['usuario'];
    $clave = $_POST['clave'];
    echo Base::getUsuario($usuario,$clave);
?>