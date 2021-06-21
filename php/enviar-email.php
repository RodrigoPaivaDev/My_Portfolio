<?php
    //variaveis
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $mensagem = $_POST['message'];
    $data_envio = date('d/m/y');
    $hora_envio = date('H:i:s')
    
    //campo email
    $arquivo = "
    <html>
        <p><b>Nome: </b>$nome</p>
        <p><b>Email: </b>$email</p>
        <p><b>Mensagem: </b>$message</p>
        <p>Este email foi enviado em <b>$data_envio</b> às <b>$hora_envio</b></p>
    </html>
    ";

    //Email para quem será enviado
    $destino = "rodrigopaiva0502@gmail.com";
    $assunto = "Contato pelo site";

    //comando necessario para garanrtir a exibição dos caracteres
    $headers = "MIME-Version: 1.0\n";
    $headers .= "Content-type: text/html; charset-iso-8859-1\n";
    $headers .= "From: $nome <$email>";

    //enviar
    mail($destino, $assunto, $arquivo, $headers);
    echo "<meta http-equiv='refresh' content='10;URL=../index.html'>";
    ?>