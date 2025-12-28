<?php

use AltchaOrg\Altcha\Altcha;
use AltchaOrg\Altcha\ChallengeOptions;
use AltchaOrg\Altcha\Hasher\Algorithm;

require "smtpCredentials.php";

require __DIR__ . '/vendor/autoload.php';

$altcha = new Altcha($altchaSecret);

$options = new ChallengeOptions(Algorithm::SHA256, 1000000, (new DateTimeImmutable())->add(new DateInterval('PT2M')));

header('Content-Type: application/json');
echo json_encode($altcha->createChallenge($options));
