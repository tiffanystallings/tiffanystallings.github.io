<?php
/* Created with the help of http://form.guide/email-form/html-email-form.html */
if(isset($_POST['submit']))
{
	$name = $_POST['name'];
	$visitor_email = $_POST['email'];
	$message = $_POST['text'];

	function IsInjected($str)
	{
		$injections = array('(\n+)',
			'(\r+)',
			'(\t+)',
			'(%0A+)',
			'(%0D+)',
			'(%08+)',
			'(%09+)'
			);
		$inject = join('|', $injections);
		$inject = "/$inject/i";

		if(preg_match($inject, $str))
		{
			return true;
		}
		else
		{
			return false;
		}
	}

	if(IsInjected($visitor_email))
	{
		echo "Bad email value!";
		exit;
	}

	if(empty($name)||empty($visitor_email))
	{
		echo "All fields required.";
		exit;
	}

	$email_from = "handler@tiffanystallings.github.io";
	$email_subject = 'Message from Portfolio Page';
	$email_body = "Message from $name :\n $message";

	$to = "tiffany.c.stallings@gmail.com";
	$headers = "From: $email_from \r\n";
	$headers .= "Reply-To: $visitor_email \r\n";

	mail($to, $email_subject, $email_body, $headers);
	echo "Message sent!";
}
?>