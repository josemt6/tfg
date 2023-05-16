<?php

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
    public static function getUsuario($usuario,$clave){
        $conexion = self::conectar();
        $sql = "SELECT usuario,clave FROM usuario WHERE usuario='". $usuario ."' and clave='". $clave ."'";
        $resultado = $conexion->query($sql);
        $registro = $resultado->fetch();
        if ($registro==false) {
            # code...
            return false;
        } else {
            return true;
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
    public static function registrarse($usuario,$clave,$tipoUsuario,$localidad,$fechaNacimiento,$nombreCompleto){
        $conexion = self::conectar();
        $sql = "INSERT INTO usuario (usuario,clave,codTipoUsuario,localidad,fechaNacimiento,nombreUsuario) VALUES (:usuario,:clave,:codTipo,:localidad,:fechaNacimiento,:nombreUsuario)";
        $resultado = $conexion->prepare($sql);
        $afectados = $resultado->execute(array(":usuario"=>$usuario,":clave" => $clave,":codTipo"=>$tipoUsuario,":localidad" => $localidad,":fechaNacimiento"=>$fechaNacimiento,":nombreUsuario"=>$nombreCompleto));
        $resultado->closeCursor();
    }
}
?>