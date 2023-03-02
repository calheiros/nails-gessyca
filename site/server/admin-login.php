<?php
    if (!$_SERVER['REQUEST_METHOD'] === 'GET') {
        die('unsupported method!');
    }

    session_start();
    $passwd = $_GET['password'];
    $user = $_GET['user'];
    $database = new mysqli('', '');
    
?>