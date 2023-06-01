<?php
$host="localhost";
$usuario="root";
$clave="";
$bd="carrerasdeportivas";
$conn=mysqli_connect($host,$usuario,$clave,$bd);
//Coger varias filas
$resultado=$conn->query("select * from carreras where estado='disponible'");
$row=$resultado->fetch_all(MYSQLI_ASSOC); 
$conn->close();
$rdo=json_encode($row);
echo $rdo;
?>
