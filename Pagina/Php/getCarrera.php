<?php
include("./include/BD.php");
$nombreCarrera = $_POST['nombreCarrera'];
echo Base::getCarrera($nombreCarrera);
?>