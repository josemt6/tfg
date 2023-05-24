<?php
    include("./include/BD.php");
    $usuario = $_POST['usuario'];
    $clave = $_POST['clave'];
    $nombreUsuario = $_POST['nombreUsuario'];
    $localidad = $_POST['localidad'];
    $tipoUsuario = $_POST['tipoUsuario'];
    $fechaNacimineto = $_POST['fechaNacimiento'];
    echo Base::registrarse($usuario,$clave,$tipoUsuario,$localidad,$fechaNacimineto,$nombreUsuario);
?>