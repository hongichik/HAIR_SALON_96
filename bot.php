<?php
include_once('./env.php');

$update = file_get_contents("php://input");
$update = json_decode($update, true);

$chatId = $update['message']['chat']['id'];
$message = trim($update['message']['text']);

if (strcasecmp($message, "ID") === 0) { 
    $url = "https://api.telegram.org/bot$botToken/sendMessage";
    $data = [
        'chat_id' => $chatId,
        'text' => "Chat ID của bạn là: $chatId"
    ];

    $options = [
        'http' => [
            'header' => "Content-Type: application/json\r\n",
            'method' => 'POST',
            'content' => json_encode($data),
        ],
    ];

    $context = stream_context_create($options);
    file_get_contents($url, false, $context);
}

if (strcasecmp($message, "Chủ nhân của bạn là ai") === 0) { 
    $url = "https://api.telegram.org/bot$botToken/sendMessage";
    $data = [
        'chat_id' => $chatId,
        'text' => "Chủ nhân của bạn là Phạm Nguyên Hồng. Bạn có thể liên hệ qua:\nFacebook: https://www.facebook.com/pham.nguyen.hong.863330/ \nZalo: 0123456789"
    ];

    $options = [
        'http' => [
            'header' => "Content-Type: application/json\r\n",
            'method' => 'POST',
            'content' => json_encode($data),
        ],
    ];

    $context = stream_context_create($options);
    file_get_contents($url, false, $context);
}
?>
