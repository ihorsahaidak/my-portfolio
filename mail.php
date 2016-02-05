<?php

$recepient = "thesagaydak@gmail.com";
$sitename = "THESagaydak personal website";

$name = trim($_GET["name"]);
$phone = trim($_GET["phone"]);


$pagetitle = "THESagaydak from site \"$sitename\"";
$message = "name: $name \n email: $phone ";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");