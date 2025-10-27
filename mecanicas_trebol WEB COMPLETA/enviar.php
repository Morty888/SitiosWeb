<?php
// Verificar campo trampa (honeypot)
if (!empty($_POST['empresa'])) {
  die("Acceso no autorizado.");
}

// Recoger y limpiar datos
$nombre = htmlspecialchars(trim($_POST['nombre']));
$apellidos = htmlspecialchars(trim($_POST['apellidos']));
$telefono = trim($_POST['telefono']);
$mensaje = htmlspecialchars(trim($_POST['mensaje']));


// Verificar que no todos los dígitos sean iguales
if (preg_match('/^(\d)\1{8}$/', $telefono)) {
  echo "<script>alert('Número de teléfono no válido. No puede tener todos los dígitos iguales.'); window.history.back();</script>";
  exit();
}

// Configurar el email
$destinatario = "direccion.obras.tsm@gmail.com";
$asunto = "Nuevo mensaje desde el formulario web";

$contenido = "Nombre: $nombre\n";
$contenido .= "Apellidos: $apellidos\n";
$contenido .= "Teléfono: $telefono\n";
$contenido .= "Mensaje:\n$mensaje";

// Cabeceras seguras para que no lo mande a spam
$headers = "From: Web Mecánicas Trébol <no-reply@tudominio.com>\r\n";
$headers .= "Reply-To: $nombre <$destinatario>\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Enviar el correo
if (mail($destinatario, $asunto, $contenido, $headers)) {
  header("Location: gracias.html");
  exit();
} else {
  die("Hubo un error al enviar el mensaje.");
}
?>
