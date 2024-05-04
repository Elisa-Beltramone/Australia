<?php
// Verificar si se enviaron datos por el formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario
    $nombre = $_POST["nombre"];
    $comentario = $_POST["comentario"];

    // Guardar el comentario en un archivo de texto (o en una base de datos)
    $archivo = 'comentarios.txt';
    $contenido = "Nombre: $nombre\nComentario: $comentario\n\n";
    file_put_contents($archivo, $contenido, FILE_APPEND | LOCK_EX);

    // Redireccionar de vuelta a la página de comentarios
    header("Location: tu_pagina_de_comentarios.php");
    exit;
}
?>
