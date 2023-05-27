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
    public static function getTipoUsuario2($usuario){
        $conexion = self::conectar();
        $sql = "SELECT nombreTipo FROM tipoUsuario where codTipoUsuario=(select codTipoUsuario from usuario where usuario='". $usuario ."')";
        $resultado = $conexion->query($sql);
        $cadena = "";
        while ($registro = $resultado->fetch()) {
            # code...
            $cadena .= $registro['nombreTipo'];
        }
        return $cadena;
    }
    public static function registrarse($usuario,$clave,$tipoUsuario,$localidad,$fechaNacimineto,$nombreUsuario){
        $conexion = self::conectar();
        $sql = "INSERT INTO usuario (usuario,clave,codTipoUsuario,localidad,fechaNacimiento,nombreUsuario) VALUES (:usuario,md5(:clave),:codTipoUsuario,:localidad,:fechaNacimiento,:nombreUsuario)";
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
    public static function getUsuario($usuario){
        $conexion = self::conectar();
        $sql = "SELECT codUsuario from usuario where usuario='". $usuario ."'";
        $rd = $conexion->query($sql);
        $rdo = $rd->fetch();
        return $rdo['codUsuario'];
    }
    public static function getCarrera($nombreCarrera){
        $conexion = self::conectar();
        $sql = "SELECT * from carreras WHERE nombreCarrera='". $nombreCarrera ."'";
        $rd = $conexion->query($sql);
        $rdo = $rd->fetch();
        return json_encode($rdo);
    }
    public static function getCodCarrera($nombreCarrera){
        $conexion = self::conectar();
        $sql = "SELECT codCarrera from carreras WHERE nombreCarrera='". $nombreCarrera ."'";
        $rd = $conexion->query($sql);
        $rdo = $rd->fetch();
        return $rdo['codCarrera'];
    }
    function updateNumParticipantes($carrera){
        $codCarrera = self::getCodCarrera($carrera);
        $conexion = self::conectar();
        $sql = "UPDATE carreras SET numParticipantes=numParticipantes+1 WHERE codCarrera=:codCarrera";
        $rd = $conexion->prepare($sql);
        $rdo = $rd->execute(array(":codCarrera"=>$codCarrera));
    }
    public static function inscribirseCarrera($usuario , $carrera){
        $codUsuario = self::getUsuario($usuario);
        $codCarrera = self::getCodCarrera($carrera);
        self::updateNumParticipantes($carrera);
        $tiempo = rand(60,240);
        $conexion = self::conectar();
        $sql = "INSERT INTO dorsal (codUsuario,codCarrera,tiempo) VALUES (:codUsuario,:codCarrera,:tiempo)";
        $rd = $conexion->prepare($sql);
        $rdo = $rd->execute(array(":codUsuario"=>$codUsuario,":codCarrera"=>$codCarrera,":tiempo"=>$tiempo));
        return $rdo;
    }
}
?>