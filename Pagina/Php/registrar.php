<?php
    include("./include/BD.php");
    $usuario = $_GET['usuario'];
    $clave = $_GET['clave'];
    $nombreUsuario = $_GET['nombreUsuario'];
    $localidad = $_GET['localidad'];
    $tipoUsuario = $_GET['tipoUsuario'];
    $fechaNacimineto = $_GET['fechaNacimiento'];
    echo Base::registrarse($usuario,$clave,$tipoUsuario,$localidad,$fechaNacimineto,$nombreUsuario);
?>