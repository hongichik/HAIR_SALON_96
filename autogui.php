<?php
include_once('./env.php');

$url = "https://api.telegram.org/bot$botToken/sendMessage";
$data = [
    'chat_id' => $targetChatId, 
    'text' => "Đây là tin nhắn của tôi gửi cho bạn"
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
?>
