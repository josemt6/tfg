<?php
include("./include/BD.php");
# code...
$tipo = $_POST['tipo'];
if ($tipo == "aceptadas") {
    # code...
    echo Base::getAceptadas();
} elseif ($tipo == "rechazadas") {
    # code...
    echo Base::getRechazadas();
} else {
    echo Base::getPendientes();
}
?>