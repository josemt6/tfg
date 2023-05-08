<?php

include("Pelicula.php");

class Base
{
    public static function conectar()
    {
        try {
            $conexion = new PDO("mysql:host=localhost; dbname=carrerasDeportivas", "root", "");
            $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $conexion->exec("SET CHARACTER SET utf8");
            return $conexion;
        } catch (Exception $e) {
            echo "Error al realizar la conexión: " . $e->getMessage();
        }
    }
    public static function getUsuario($usuario,$clave){
        $conexion = self::conectar();
        $sql = "SELECT usuario,clave FROM usuario WHERE usuario='". $usuario ."' and clave='". $clave ."'";
        $resultado = $conexion->query($sql);
        $registro = $resultado->fetch();
        if ($registro==false) {
            # code...
            return "error";
        } else {
            return "correcto";
        }
    }
}


?>