

<?php
// Kiểm tra nếu form được gửi đi
$text_gui = "";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    foreach ($_POST as $key => $value) {
        if ($key == 'sdt') {
            $text_gui .= "SĐT: " . $value . "<br>";
        } elseif ($key == 'hoten') {
            $text_gui .= "Họ tên: " . $value . "<br>";
        } elseif ($key == 'sokhach') {
            $text_gui .= "Số khách: " . $value . "<br>";
        } elseif ($key == 'khunggio') {
            $text_gui .= "Khung giờ: " . $value . "<br>";
        } else {
            $text_gui .= $value . "<br>";
        }
    }
}


include_once('./env.php');
$targetChatId = "5768813690"; 

$url = "https://api.telegram.org/bot$botToken/sendMessage";
$data = [
    'chat_id' => $targetChatId, 
    'text' => $text_gui,
    'parse_mode' => 'HTML',
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