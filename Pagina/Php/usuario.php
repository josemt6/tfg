<?php
    include("./include/BD.php");
    $usuario = $_POST['usuario'];
    $clave = $_POST['clave'];

    function verificarCredenciales($usuario,$clave){
        
    $conexion = new mysqli("localhost", "root", "", "carrerasdeportivas");
    // Comprobar errores de conexión
    
        if ($conexion->connect_error) {
            die("Error de conexión a la base de datos: " . $conexion->connect_error);
        }
    
        // Escapar caracteres especiales en los parámetros
        $usuario = $conexion->real_escape_string($usuario);
        $clave = $conexion->real_escape_string($clave);
    
        // Consulta SQL para verificar las credenciales
        $consulta = "SELECT * FROM usuario WHERE usuario = '$usuario' AND clave = '$clave'";
    
        // Ejecutar la consulta
        $resultado = $conexion->query($consulta);
    
        // Comprobar si se encontró un registro
        if ($resultado->num_rows == 0) {
            // No se encontró el registro
            $conexion->close();
            return false;
        } else {
            // Se encontró el registro
            $conexion->close();
            return true;
        }
    }

if (verificarCredenciales($usuario, $clave)) {
    echo "true";
} else {
    echo "false";
}
