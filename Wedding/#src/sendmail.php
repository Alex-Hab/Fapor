<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/PHPMailer.php';

	$mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('ru', 'phpmailer/language/');
	$mail->IsHTML(true);

	//От кого письмо, здесь указана почта созданная на хостинге
	$mail->setFrom('wedding@sam-climate.ru', 'Сайт Wedding.ru');
	//Кому отправить сообщение с сайта
	$mail->addAddress('sam_climate@mail.ru');
	//Тема письма
	$mail->Subject = 'Сообщение с сайта Wedding.ru';
	

	//Тело письма
	$body = '<h1>Принято приглашение на свадьбу</h1>';
	//Проверка если поле не пустое то вывести name
	if(trim(!empty($_POST['name']))){
		$body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
	}
	if(trim(!empty($_POST['phone']))){
		$body.='<p><strong>Телефон:</strong> '.$_POST['phone'].'</p>';
	}
	if(trim(!empty($_POST['email']))){
		$body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
	}
	if(trim(!empty($_POST['message']))){
		$body.='<p><strong>Сообщение:</strong> '.$_POST['message'].'</p>';
	}
	
		
	$mail->Body = $body;

	//Отправляем
	if (!$mail->send()) {
		$message = 'Ошибка';
	} else {
		$message = 'Данные отправлены!';
	}

	$response = ['message' => $message];
	//Формируем json
	header('Content-type: application/json');
	echo json_encode($response);
?>