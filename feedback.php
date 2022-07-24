<?php


// initialise variables here
$chat_an = 1798473959;
$chat_nik = 302843340;
$chat_alex = 431393482;

$ids = [$chat_an, $chat_nik, $chat_alex];
//$ids = [431393482, 743702796];

$text = sprintf(
    "%s \n%s \n%s \n%s \n%s \n%s",
    "Имя: " . trim($_GET["name"], '"'),
    "Компания: " . trim($_GET["company"], '"'),
    "Email: " . trim($_GET["email"], '"'),
    "Телефон: " . trim($_GET["phone"], '"'),
    "Интересует: " . trim($_GET["interest"], '"'),
    "Количество сотрудников: " . trim($_GET["countEmploy"], '"'),
);
// following ones are optional, so could be set as null
$disable_web_page_preview = null;
$reply_to_message_id = null;
$reply_markup = null;

foreach ($ids as $id) {
    $data = [
    		'chat_id' => urlencode($id),
            'text' => $text,
            'disable_web_page_preview' => urlencode($disable_web_page_preview),
            'reply_to_message_id' => urlencode($reply_to_message_id),
            'reply_markup' => urlencode($reply_markup)
    ];



    $token = '5096755921:AAGkhkl17Wbv2dbBMGUjhcMbefuj3VFhgjE';

    $url = 'https://api.telegram.org/bot' . $token . '/sendMessage';



    //  open connection
    $ch = curl_init();
    //  set the url
    curl_setopt($ch, CURLOPT_URL, $url);
    //  number of POST vars
    curl_setopt($ch, CURLOPT_POST, count($data));
    //  POST data
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
    //  To display result of curl
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    //  execute post
    $result = curl_exec($ch);
    //  close connection
    curl_close($ch);
}
?>