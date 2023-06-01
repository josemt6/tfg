<?php


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

try {

    $mail->SMTPDebug = 0;                      // 0 o 2 para mostrar errores
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth = true;                                   // Enable SMTP authentication
    $mail->Username = 'josevicentemartin02@educarex.es';    // SMTP username
    $mail->Password = 'noa29112002';                               // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above
    $mail->SMTPOptions = array(
        'ssl' => array(
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        )
    );

    //Recipients
    $mail->setFrom('josevicentemartin02@educarex.es');   //quien lo envia, en este caso nosotros mismo
    $mail->addAddress("josevicentemartin29@gmail.com");     // Añado si quiero otra cuenta a enviar


    // Attachments PARA ADJUNTAR IMAGENES O ARCHIVOS
    //$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Solicitudes de inscripcion'; //Aqui el asunto
    $mail->Body = 'Hola! El usuario jose2 ha realizado una solicitud para inscribirse en una carrera!!';
    $mail->send();
    echo 'Mensaje enviado';
} catch (Exception $e) {
    echo "Mensaje de error: {$mail->ErrorInfo}";
}
?>