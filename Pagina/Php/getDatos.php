<?php
include("./include/BD.php");
$solicitud = $_POST['solicitud'];
echo Base::getDatosSolicitud($solicitud);

?>