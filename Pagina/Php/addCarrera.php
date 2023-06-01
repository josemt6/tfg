<?php
include("./include/BD.php");
$nombre = $_POST['nombre'];
$localizacion = $_POST['localizacion'];
$fecha = $_POST['fecha'];
$max = $_POST['max'];
$longitud = $_POST['longitud'];
$desnivel = $_POST['desnivel'];
$modo = $_POST['modo'];
$tipo = $_POST['tipo'];
$recorrido = $_POST['recorrido'];
$conexion = Base::conectar();
$sql = "INSERT INTO carreras (nombreCarrera,localizacion,fechaCarrera,maxParticipantes,longitud,desnivel,modoInscripcion,tipoCarrera,recorrido) VALUES (:nombreCarrera,:localizacion,:fechaCarrera,:maxParticipantes,:longitud,:desnivel,:mnodoInscripcion,:tipoCarrera,:recorrido)";
$rd = $conexion->prepare($sql);
$rdo = $rd->execute(array(":nombreCarrera"=>$nombre,":localizacion"=>$localizacion,":fechaCarrera"=>$fecha,":maxParticipantes" => $max , ":longitud" => $longitud , ":desnivel" => $desnivel , ":mnodoInscripcion" => $modo , ":tipoCarrera" => $tipo , ":recorrido" => $recorrido));
echo $rdo;
?>
