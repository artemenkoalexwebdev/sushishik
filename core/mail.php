<?php
$token = "5327349864:AAE8iwjnqdE0MvqoQPWeeLs6myIe3hHLiyg";

//Сюда вставляем chat_id
$chat_id = "-647808088";
//читать json файл
$cart = [];
$json = file_get_contents('../db/all.json');
$json = json_decode($json, true);
// письмо
$message = '';
$phone .= ''.$_POST['ephone'].'';
$adress .= ''.$_POST['eadress'].'';
$name .= ''.$_POST['ename'].'';
$counter .= ''.$_POST['ecounter'].'';
$text .= ''.$_POST['etext'].'';
$deliver .= ''.$_POST['deliver'].'';
$deliverself .= ''.$_POST['deliverself'].'';
$cart = $_POST['cart'];
$sum = '0';

foreach($cart as $id=>$count){
    $message .=$json[$id]['title'].' ';
    $message .=$count.' шт. ';
    $message .='  ('.$count*$json[$id]['price'].'руб) |   ';
    $sum = $sum + $count*$json[$id]['price'].'руб';
}
$arr = array (
    'Имя: ' => $name,
    'Телефон:' => $phone,
    'Адрес: ' => $adress,
    'Количество персон:' => $counter,
    'Примечания к заказу:' => $text,
    'Доставка:' => $deliver,
    'Cамовывоз:' => $deliverself,
    'Заказ' => $message,
    'Сумма заказа' => $sum
);
foreach($arr as $key => $value) {

    $txt .= "<b>".$key."</b> ".$value."%0A";
  
  };
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

?>