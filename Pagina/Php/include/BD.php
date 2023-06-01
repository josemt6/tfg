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
    public static function getTipoUsuario()
    {
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
    public static function getTipoUsuario2($usuario)
    {
        $conexion = self::conectar();
        $sql = "SELECT nombreTipo FROM tipoUsuario where codTipoUsuario=(select codTipoUsuario from usuario where usuario='" . $usuario . "')";
        $resultado = $conexion->query($sql);
        $cadena = "";
        while ($registro = $resultado->fetch()) {
            # code...
            $cadena .= $registro['nombreTipo'];
        }
        return $cadena;
    }
    public static function registrarse($usuario, $clave, $tipoUsuario, $localidad, $fechaNacimineto, $nombreUsuario)
    {
        $conexion = self::conectar();
        $sql = "INSERT INTO usuario (usuario,clave,codTipoUsuario,localidad,fechaNacimiento,nombreUsuario) VALUES (:usuario,:clave,:codTipoUsuario,:localidad,:fechaNacimiento,:nombreUsuario)";
        $resultado = $conexion->prepare($sql);
        $row = $resultado->execute(array(":usuario" => $usuario, ":clave" => $clave, ":codTipoUsuario" => $tipoUsuario, ":localidad" => $localidad, ":fechaNacimiento" => $fechaNacimineto, ":nombreUsuario" => $nombreUsuario));
        $resultado->closeCursor();
        return $row;
    }
    public static function getInfoUsuario($usuario)
    {
        $conexion = self::conectar();
        $sql = "SELECT * FROM usuario WHERE usuario='" . $usuario . "'";
        $resultado = $conexion->query($sql);
        $row = $resultado->fetch();
        return $row;
    }
    public static function getUsuario($codUsuario)
    {
        $conexion = self::conectar();
        $sql = "SELECT usuario from usuario where codUsuario='" . $codUsuario . "'";
        $rd = $conexion->query($sql);
        $rdo = $rd->fetch();
        return $rdo['usuario'];
    }
    public static function getCarrera($nombreCarrera)
    {
        $conexion = self::conectar();
        $sql = "SELECT * from carreras WHERE nombreCarrera='" . $nombreCarrera . "'";
        $rd = $conexion->query($sql);
        $rdo = $rd->fetch();
        return json_encode($rdo);
    }
    public static function getCodCarrera($nombreCarrera)
    {
        $conexion = self::conectar();
        $sql = "SELECT codCarrera from carreras WHERE nombreCarrera='" . $nombreCarrera . "'";
        $rd = $conexion->query($sql);
        $rdo = $rd->fetch();
        return $rdo['codCarrera'];
    }
    public static function getCodUsuario($usuario)
    {
        $conexion = self::conectar();
        $sql = "SELECT codUsuario from usuario WHERE usuario='" . $usuario . "'";
        $rd = $conexion->query($sql);
        $rdo = $rd->fetch();
        return $rdo['codUsuario'];
    }
    public static function updateNumParticipantes($carrera)
    {
        $codCarrera = self::getCodCarrera($carrera);
        $conexion = self::conectar();
        $sql = "UPDATE carreras SET numParticipantes=numParticipantes+1 WHERE codCarrera=:codCarrera";
        $rd = $conexion->prepare($sql);
        $rdo = $rd->execute(array(":codCarrera" => $codCarrera));
    }
    public static function getNumParticipantes($carrera)
    {
        $codCarrera = self::getCodCarrera($carrera);
        $conexion = self::conectar();
        $sql = "SELECT numParticipantes from carreras WHERE codCarrera='" . $codCarrera . "'";
        $rd = $conexion->query($sql);
        $row = $rd->fetch();
        return $row['numParticipantes'];
    }
    public static function getMaxParticipantes($carrera)
    {
        $codCarrera = self::getCodCarrera($carrera);
        $conexion = self::conectar();
        $sql = "SELECT maxParticipantes from carreras WHERE codCarrera='" . $codCarrera . "'";
        $rd = $conexion->query($sql);
        $row = $rd->fetch();
        return $row['maxParticipantes'];
    }
    public static function inscribirseCarrera($usuario, $carrera)
    {
        $numero = self::getNumParticipantes($carrera) + 1;
        $codUsuario = self::getCodUsuario($usuario);
        $codCarrera = self::getCodCarrera($carrera);
        # code...
        if (Base::getNumParticipantes($carrera) < Base::getMaxParticipantes($carrera)) {
            # code...
            self::updateNumParticipantes($carrera);
            $tiempo = rand(60, 240);
            $conexion = self::conectar();
            $sql = "INSERT INTO dorsal (codUsuario,codCarrera,tiempo,numero) VALUES (:codUsuario,:codCarrera,:tiempo,:numero)";
            $rd = $conexion->prepare($sql);
            $rdo = $rd->execute(array(":codUsuario" => $codUsuario, ":codCarrera" => $codCarrera, ":tiempo" => $tiempo, ":numero" => $numero));
            return $rdo;
        } else {
            return false;
        }
    }
    public static function eliminarCarrera($carrera)
    {
        $codCarrera = self::getCodCarrera($carrera);
        $conexion = self::conectar();
        $sql = "DELETE from  carreras WHERE codCarrera=:codCarrera";
        $rd = $conexion->prepare($sql);
        $rdo = $rd->execute(array(":codCarrera" => $codCarrera));
        return $rdo;
    }
    public static function editarCarrera($carrera, $modo, $fecha)
    {
        $codCarrera = self::getCodCarrera($carrera);
        $conexion = self::conectar();
        $sql = "UPDATE carreras SET fechaCarrera=:fecha , modoInscripcion=:modo WHERE codCarrera=:codCarrera";
        $rd = $conexion->prepare($sql);
        $rdo = $rd->execute(array(":fecha" => $fecha, ":modo" => $modo, ":codCarrera" => $codCarrera));
        return $rdo;
    }
    public static function getCarrerasTerminadas()
    {
        $conexion = self::conectar();
        $sql = "SELECT nombreCarrera,localizacion,fechaCarrera,estado,longitud,desnivel,modoInscripcion,tipoCarrera FROM carreras WHERE estado='finalizada'";
        $resultado = $conexion->query($sql);
        $row = $resultado->fetchAll();
        return json_encode($row);
    }
    public static function getClasificacionCarrera($carrera)
    {
        $codCarrera = self::getCodCarrera($carrera);
        $conexion = self::conectar();
        $sql = "SELECT u.*, d.tiempo, d.numero FROM usuario u JOIN dorsal d ON d.codUsuario = u.codUsuario JOIN carreras c ON c.codCarrera = d.codCarrera WHERE d.codCarrera = '" . $codCarrera . "' ORDER BY d.tiempo";
        $rdo = $conexion->query($sql);
        $row = $rdo->fetchAll();
        return json_encode($row);
    }
    public static function cerrarEstado($carrera)
    {
        $codCarrera = self::getCodCarrera($carrera);
        $conexion = self::conectar();
        $sql = "UPDATE carreras SET estado='cerrada' WHERE codCarrera=:codCarrera";
        $rd = $conexion->prepare($sql);
        $rdo = $rd->execute(array(":codCarrera" => $codCarrera));
        return $rdo;
    }
    public static function disponibleEstado($carrera)
    {
        $codCarrera = self::getCodCarrera($carrera);
        $conexion = self::conectar();
        $sql = "UPDATE carreras SET estado='disponible' WHERE codCarrera=:codCarrera";
        $rd = $conexion->prepare($sql);
        $rdo = $rd->execute(array(":codCarrera" => $codCarrera));
        return $rdo;
    }
    public static function finalizarEstado($carrera)
    {
        $codCarrera = self::getCodCarrera($carrera);
        $conexion = self::conectar();
        $sql = "UPDATE carreras SET estado='finalizada' WHERE codCarrera=:codCarrera";
        $rd = $conexion->prepare($sql);
        $rdo = $rd->execute(array(":codCarrera" => $codCarrera));
        return $rdo;
    }
    public static function listadoInscripciones($usuario)
    {
        $conexion = self::conectar();
        $sql = "SELECT c.nombreCarrera,c.localizacion,c.fechaCarrera,c.longitud,c.desnivel,c.tipoCarrera,c.modoInscripcion FROM dorsal d JOIN usuario u ON d.codUsuario = u.codUsuario JOIN carreras c ON c.codCarrera = d.codCarrera WHERE u.usuario = '" . $usuario . "'";
        $rdo = $conexion->query($sql);
        $row = $rdo->fetchAll();
        return json_encode($row);
    }
    public static function mandarSolicitud($usuario, $carrera)
    {
        $codUsuario = self::getCodUsuario($usuario);
        $usuario = self::getUsuario($codUsuario);
        $codCarrera = self::getCodCarrera($carrera);
        $conexion = self::conectar();
        $sql = "INSERT INTO solicitudes (codUsuario,nombreUsuario,codCarrera) VALUES (:codUsuario,:nombreUsuario,:carrera)";
        $rdo = $conexion->prepare($sql);
        $row = $rdo->execute(array(":codUsuario" => $codUsuario, ":nombreUsuario" => $usuario, ":carrera" => $codCarrera));
        return $row;
    }
    public static function getPendientes()
    {
        $conexion = self::conectar();
        $sql = "SELECT s.codSolicitud,s.codUsuario,u.usuario,u.nombreUsuario,c.nombreCarrera FROM solicitudes s JOIN carreras c ON s.codCarrera = c.codCarrera JOIN usuario u ON s.codUsuario = u.codUsuario where s.estado=0";
        $rdo = $conexion->query($sql);
        $row = $rdo->fetchAll();
        return json_encode($row);
    }
    public static function getAceptadas()
    {
        $conexion = self::conectar();
        $sql = "SELECT s.codSolicitud,s.codUsuario,u.usuario,u.nombreUsuario,c.nombreCarrera FROM solicitudes s JOIN carreras c ON s.codCarrera = c.codCarrera JOIN usuario u ON s.codUsuario = u.codUsuario where s.estado=1";
        $rdo = $conexion->query($sql);
        $row = $rdo->fetchAll();
        return json_encode($row);
    }
    public static function getRechazadas()
    {
        $conexion = self::conectar();
        $sql = "SELECT s.codSolicitud,s.codUsuario,u.usuario,u.nombreUsuario,c.nombreCarrera FROM solicitudes s JOIN carreras c ON s.codCarrera = c.codCarrera JOIN usuario u ON s.codUsuario = u.codUsuario where s.estado=2";
        $rdo = $conexion->query($sql);
        $row = $rdo->fetchAll();
        return json_encode($row);
    }
    public static function getDatosSolicitud($solicitud)
    {
        $conexion = self::conectar();
        $sql = "SELECT u.usuario,c.nombreCarrera FROM solicitudes s JOIN carreras c ON s.codCarrera=c.codCarrera JOIN usuario u ON s.codUsuario=u.codUsuario WHERE codSolicitud='" . $solicitud . "'";
        $rdo = $conexion->query($sql);
        $row = $rdo->fetch();
        return json_encode($row);
    }
    public static function setAceptada($solicitud)
    {
        $conexion = self::conectar();
        $sql = "UPDATE solicitudes SET estado=1 WHERE codSolicitud=:solicitud";
        $rdo = $conexion->prepare($sql);
        $row = $rdo->execute(array("solicitud" => $solicitud));
        return $row;
    }
    public static function setRechazada($solicitud)
    {
        $conexion = self::conectar();
        $sql = "UPDATE solicitudes SET estado=2 WHERE codSolicitud=:solicitud";
        $rdo = $conexion->prepare($sql);
        $row = $rdo->execute(array("solicitud" => $solicitud));
        return $row;
    }
    public static function comprobarSolicitud($usuario,$carrera){
        $codUsuario = self::getCodUsuario($usuario);
        $codCarrera = self::getCodCarrera($carrera);
        $conexion = self::conectar();
        $sql = "SELECT codSolicitud from solicitudes WHERE codUsuario='". $codUsuario ."' AND codCarrera='". $codCarrera ."'";
        $rdo = $conexion->query($sql);
        return $rdo;
    }
    public static function comprobarDorsal($usuario,$carrera){
        $codUsuario = self::getCodUsuario($usuario);
        $codCarrera = self::getCodCarrera($carrera);
        $conexion = self::conectar();
        $sql = "SELECT codUsuario,codCarrera FROM dorsal WHERE codUsuario='". $codUsuario ."' AND codCarrera='". $codCarrera ."'";
        $rdo = $conexion->query($sql);
        return $rdo;
    }
}
?>