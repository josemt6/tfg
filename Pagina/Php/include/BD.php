<?php

include("Usuario.php");
include("Carrera.php");

class Base
{
    public static function conectar()
    {
        try {
            $conexion = new PDO("mysql:host=localhost; dbname=carrerasdeportivas", "root", "");
            $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $conexion->exec("SET CHARACTER SET utf8");
            return $conexion;
        } catch (Exception $e) {
            echo "Error al realizar la conexión: " . $e->getMessage();
        }
    }
    public static function getTipoUsuario(){
        $conexion = self::conectar();
        $sql = "SELECT nombreTipo FROM tipoUsuario";
        $resultado = $conexion->query($sql);
        $cadena = "";
        while ($registro = $resultado->fetch()) {
            # code...
            $cadena .= $registro['nombreTipo'] . ";";
        }
        return $cadena;
    }
    public static function registrarse($usuario,$clave,$tipoUsuario,$localidad,$fechaNacimineto,$nombreUsuario){
        $conexion = self::conectar();
        $sql = "INSERT INTO usuario (usuario,clave,codTipoUsuario,localidad,fechaNacimiento,nombreUsuario) VALUES (:usuario,:clave,:codTipoUsuario,:localidad,:fechaNacimiento,:nombreUsuario)";
        $resultado = $conexion->prepare($sql);
        $row = $resultado->execute(array(":usuario" => $usuario, ":clave" => $clave, ":codTipoUsuario" => $tipoUsuario, ":localidad" => $localidad, ":fechaNacimiento" => $fechaNacimineto, ":nombreUsuario" => $nombreUsuario));
        $resultado->closeCursor();
        return $row;
    }
    public static function getInfoUsuario($usuario){
        $conexion = self::conectar();
        $sql = "SELECT * FROM usuario WHERE usuario='". $usuario ."'";
        $resultado = $conexion->query($sql);
        $row = $resultado->fetch();
        return $row;
    }
}
?>