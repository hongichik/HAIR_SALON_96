<?php
die("oke");
include_once('./env.php');

$update = file_get_contents("php://input");
$update = json_decode($update, true);

$chatId = $update['message']['chat']['id'];
$message = trim($update['message']['text']); // Loại bỏ khoảng trắng thừa

// Kiểm tra nếu tin nhắn là "ID"
if (strcasecmp($message, "ID") === 0) { // So sánh không phân biệt hoa thường
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
?>
