<?php
    try {
        $servername = "localhost";
        $username = "root";
        $password = ""; 

        $conn = new PDO("mysql:host=$servername;dbname=croakculture", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        function sanitizeInput($input) {
            $input = trim($input);
            $input = stripslashes($input);
            $input = htmlspecialchars($input);
            return $input;
          }

        // Retrieve form data
        $name = sanitizeInput($_POST['name']);
        $email = sanitizeInput($_POST['email']);
        $password = sanitizeInput($_POST['pswd']);
        $phone = sanitizeInput($_POST['phone']);
        $address = sanitizeInput($_POST['address']);
        
        $stmt = $conn->prepare("SELECT COUNT(*) FROM users WHERE email = ?");
        $stmt->bindParam(1, $email);
        $stmt->execute();
        $count = $stmt->fetchColumn();

        if ($count > 0) {
            // Email already exists, display an error message or perform any necessary action
            echo "Email is already taken. Please choose a different email.";
        } else {
            $stmt = $conn->prepare("INSERT INTO users (name, email, password, phone, address) VALUES (?, ?, ?, ?, ?)");
            //apparently better for security and stuff
            $stmt->bindParam(1, $name);
            $stmt->bindParam(2, $email);
            $stmt->bindParam(3, $password);
            $stmt->bindParam(4, $phone);
            $stmt->bindParam(5, $address);

            $stmt->execute();
            
            $conn = null;

            $successMessage = "Your account was made successfully!";
            header("Location: php09D.php?success=" . urlencode($successMessage));
            exit;
        }

        

    } catch(PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }
?>