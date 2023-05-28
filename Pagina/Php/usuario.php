<?php
include("./include/BD.php");
$usuario = $_POST['usuario'];
$clave = $_POST['clave'];

function verificarCredenciales($usuario, $clave)
{

    $conexion = new mysqli("localhost", "root", "", "carrerasdeportivas");

    $usuario = $conexion->real_escape_string($usuario);
    $clave = $conexion->real_escape_string($clave);

    $sql = "SELECT * FROM usuario WHERE usuario = '" . $usuario . "' AND clave = '" . $clave . "'";

    // Ejecutar la consulta
    $resultado = $conexion->query($sql);

    // Comprobar si se encontró un registro
    if ($resultado->num_rows == 0) {
        $conexion->close();
        return false;
    } else {
        $conexion->close();
        return true;
    }
}

if (verificarCredenciales($usuario, $clave)) {
    echo "true";
} else {
    echo "false";
}
?>