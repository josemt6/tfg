<?php
include("./include/BD.php");
$conexion = Base::conectar();
$sql = "SELECT * FROM carreras";
$resultado = $conexion->query($sql);
$row = $resultado->fetch();
echo json_encode($row);
?>
