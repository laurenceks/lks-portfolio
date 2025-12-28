<?php

require __DIR__ . '/vendor/autoload.php';
require 'smtpCredentials.php';


use AltchaOrg\Altcha\Altcha;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$altcha = new Altcha($altchaSecret);

$input = json_decode(file_get_contents('php://input'), true);

$payload = $input['altcha'] ? $input['altcha'] : '';

$output = new stdClass();

if (!$payload || !$altcha->verifySolution($payload, true)) {
    http_response_code(403);
    $output->status = "fail";
    $output->success = false;
    $output->response = "ALTCHA failed";
} else {
    $message = $input['message'];
    $emailFromName = $input['name'];
    $emailFrom = $input['email'];

    $mail = new PHPMailer;
    $mail->isSMTP();
    $mail->SMTPDebug = SMTP::DEBUG_OFF;
    $mail->Host = $smtpHost;
    $mail->Port = $smtpPort;
    $mail->SMTPSecure = 'tls';
    $mail->SMTPAuth = true;
    $mail->Username = $smtpUsername;
    $mail->Password = $smtpPassword;
    $mail->addReplyTo($emailFrom, $emailFromName);
    $mail->addAddress($emailTo, $emailToName);
    $mail->setFrom("no-reply@laurencesummers.com", "Laurence Summers Web Development contact form");
    $mail->Subject = 'Laurence Summers Web Development contact form enquiry from ' . $emailFromName . ' (' . $emailFrom . ')';
    $mail->msgHTML(str_replace("\r\n", "<br>", $message));
    $mail->AltBody = $message;
    $mail->Debugoutput = function ($str, $level) use (&$smtpResponse) {
        $smtpResponse[] = $str; // collect all responses
    };


    $output = new stdClass();

    if (!$mail->send()) {
        http_response_code(500);
        $output->status = "fail";
        $output->success = false;
        $output->response = "There was an error sending your message";
    } else {
        $output->status = "success";
        $output->success = true;
        $output->response = $smtpResponse ? implode("\n", $smtpResponse) : "Message sent successfully";
    }

    echo json_encode($output);
}
?>
