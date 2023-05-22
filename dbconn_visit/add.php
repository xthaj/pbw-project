<?php
    try {
        $servername = "localhost";
        $username = "root";
        $password = ""; 

        $conn = new PDO("mysql:host=$servername;dbname=croakculture", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // Retrieve form data
        $name = $_POST['name'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $destination = $_POST['destination'];
        $date = $_POST['date'];
        $time = $_POST['time'];
        $group_size = $_POST['group_size'];
        $reason = $_POST['reason'];
        $additional_requests = $_POST['additional-requests'];
        
        $sql="INSERT INTO visit_form (name, email, phone, destination, date, time, group_size, reason, additional_requests) VALUES ('$name', '$email', '$phone', '$destination', '$date', '$time', '$group_size', '$reason', '$additional_requests')";

        $conn->exec("$sql");
        // echo "Data berhasil ditambahkan";

        $last_id = $conn->lastInsertId();
        echo "Data berhasil ditambahkan, id terakhir = ", $last_id;

        $conn = null;

        //radio button what do?
        
    } catch(PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }
?>