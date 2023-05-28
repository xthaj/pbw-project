<?php
    $servername = "localhost";
    $username = "root";
    $password = ""; // replace 'password' with the actual password for the user
    
    try {
        $conn = new PDO("mysql:host=$servername;dbname=croakculture", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        echo "Connected successfully";
    } catch(PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }
?>