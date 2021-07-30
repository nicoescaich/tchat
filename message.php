<?php
$connect = mysqli_connect("localhost", "root", "", "bot");
$getMess = mysqli_real_escape_string($connect, $_POST['text']);
$checkData = "SELECT replies from chatbot 
                WHERE queries LIKE'%$getMess%'";
$runQuery = mysqli_query($connect, $checkData);

if (mysqli_num_rows($runQuery) > 0) {
    $fetchData = mysqli_fetch_assoc($runQuery);
    $replay = $fetchData['replies'];
    echo $replay;
} else {
    echo "Sorry, I don't understand";
}
