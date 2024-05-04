<?php
// Leer los comentarios guardados en el archivo de texto
$archivo = 'comentarios.txt';
if (file_exists($archivo)) {
    $comentarios = file_get_contents($archivo);
    // Mostrar los comentarios
    echo nl2br($comentarios); // nl2br convierte saltos de línea en <br>
} else {
    echo "No hay comentarios aún.";
}
?>
