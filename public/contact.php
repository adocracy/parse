<?php

$ownermail 	= 	‘admin’@hollywoodstarpop.com;
$from 		= 	$_POST['email'];
$message 	= 	$_POST['message'];
$name		= 	$_POST['name'];
$subject 	= 	$name.'Sent a message from HollywoodStarPop contact form';


mail($ownermail, $subject, $message, "From: $name <$from>\r\n");



// mail to sender

$to = $from;
$message = ‘Hello from Hollywood!  Your email is on its way to us - please allow us a day or two to reply to you.  If you don’t hear from us within 1 business day, please feel free to follow up with us at admin@hollywoodstarpop.com’;
$subject = ‘HollywoodStarPop.com Mail Sent confirmation';

mail($to, $subject, $message, "From: $name <$ownermail>\r\n");