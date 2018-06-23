<?php

    $destino = "dcomercialvectorial@gmail.com";
    $nombre = $_POST['nombre'];
    $empresa = $_POST['empresa'];
    $correo = $_POST['correo'];
    $celular = $_POST['celular'];

    $contenido = "Nombre: " . $nombre . "\nCorreo: " . $correo . "\nTelefono: " . $celular . "\nEmpresa: " . $empresa;

    mail($destino, "contacto", $contenido);

    header("Location:../index.html")


?>