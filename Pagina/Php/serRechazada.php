<?php
include("./include/BD.php");
$solicitud = $_POST['solicitud'];
echo Base::setRechazada($solicitud);
?>