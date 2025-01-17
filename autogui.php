

<?php
// Kiểm tra nếu form được gửi đi
$text_gui = "";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    foreach ($_POST as $key => $value) {
        if ($key == 'sdt') {
            $text_gui .= "SĐT: " . $value . "\n";
        } elseif ($key == 'hoten') {
            $text_gui .= "Họ tên: " . $value . "\n";
        } elseif ($key == 'sokhach') {
            $text_gui .= "Số khách: " . $value . "\n";
        } elseif ($key == 'khunggio') {
            $text_gui .= "Khung giờ: " . $value . "\n";
        } elseif ($key == 'ngaydat') {
            $text_gui .= "Ngày đặt: " . $value . "\n";
        } else {
            $text_gui .= $value . "\n";
        }
    }
}


include_once('./env.php');
$targetChatIds = ["5768813690","7737408944","1895689057"];

$url = "https://api.telegram.org/bot$botToken/sendMessage";

foreach ($targetChatIds as $chatId) {
    $data = [
        'chat_id' => $chatId,
        'text' => $text_gui,
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