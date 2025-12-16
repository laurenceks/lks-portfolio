<?php
$input = json_decode(file_get_contents('php://input'), true);
$message = $input['message'];
$emailFromName = $input['name'];
$emailFrom = $input['email'];

$headers = "From: " . $emailFromName . " <" . $emailFrom . ">";
$headers .= "Reply-To: $emailFrom";

use PHPMailer\PHPMailer\PHPMailer;

require 'PHPMailer-master/src/Exception.php';
require 'PHPMailer-master/src/PHPMailer.php';
require 'PHPMailer-master/src/SMTP.php';
require 'smtpCredentials.php';

$mail = new PHPMailer;
$mail->isSMTP();
$mail->SMTPDebug = 2; // 0 = off (for production use) - 1 = client messages - 2 = client and server messages
$mail->Host = $smtpHost; // use $mail->Host = gethostbyname('smtp.gmail.com'); // if your network does not support SMTP over IPv6
$mail->Port = $smtpPort; // TLS only
$mail->SMTPSecure = 'tls'; // ssl is depracated
$mail->SMTPAuth = true;
$mail->Username = $smtpUsername;
$mail->Password = $smtpPassword;
$mail->addReplyTo($emailFrom, $emailFromName);
$mail->addAddress($emailTo, $emailToName);
$mail->setFrom("no-reply@laurencesummers.com", "Laurence Summers Web Development contact form");
$mail->Subject = 'Laurence Summers Web Development contact form enquiry from ' . $emailFromName . ' (' . $emailFrom . ')';
$mail->msgHTML(str_replace("\r\n", "<br>", $message));
$mail->AltBody = $message;
$mail->Debugoutput = function($str, $level) use (&$smtpResponse) {
    $smtpResponse[] = $str; // collect all responses
};


$output = new stdClass();

if (!$mail->send()) {
    $output->status = "fail";
    $output->success = false;
    $output->response = $mail->ErrorInfo;
} else {
    $output->status = "success";
    $output->success = true;
    $output->response = implode("\n", $smtpResponse);
}

echo json_encode($output);
?>
