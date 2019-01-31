<?php
if(isset($_POST['full_name']) && $_POST['full_name'] != "" &&
    isset($_POST['email']) && $_POST['email'] != "" && isset($_POST['message']) &&
    $_POST['message'] != "" && isset($_POST['subject']) && $_POST['subject'] != ""){
    $to = "lagos@impacthub.com.";
    $subject = "Message From ".$_POST['full_name']." Subject is ".$_POST['subject'];
    $txt = $_POST['message'];
    $headers = "From: ".$_POST['email'] . "\r\n" .
        "CC: herrytheeagle@gmail.com";

    if(mail($to,$subject,$txt,$headers)){
        echo "yes";
    }else{
        echo "no";
    }
}

if(isset($_POST['first_name']) && $_POST['first_name'] != "" &&
    isset($_POST['email_address']) && $_POST['email_address'] != "" && isset($_POST['last_name']) &&
    $_POST['last_name'] != ""){
    $to = "lagos@impacthub.com.";
    $subject = "Message From ".$_POST['first_name']." ".$_POST['last_name'];
    $txt = "Subscription details for ".$_POST['first_name']." ".$_POST['last_name'];
    $headers = "From: ".$_POST['email'] . "\r\n" .
        "CC: herrytheeagle@gmail.com";

    if(mail($to,$subject,$txt,$headers)){
        echo "yes";
    }else{
        echo "no";
    }
}
?>