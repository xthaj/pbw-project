<?php
    session_start();
    $errorMessage = "";

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
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
            $email = sanitizeInput($_POST['email']);
            $password = sanitizeInput($_POST['pswd']);

            $stmt = $conn->prepare("SELECT * FROM users WHERE email = ?");
            $stmt->bindParam(1, $email);
            $stmt->execute();
            $row = $stmt->fetch(PDO::FETCH_ASSOC);

            if ($row) {
                if ($password === $row["password"]) {
                    // Successful login
                    $_SESSION['email'] = $email;
                    $_SESSION['name'] = $row['name'];
                    $_SESSION['phone'] = $row['phone'];

                    header("Location: ../user/index.php");
                    exit;
                } else {
                    // Incorrect password
                    $failedMessage = "Incorrect Password!";
                    header("Location: ../login.php?failed=" . urlencode($failedMessage));
                    exit;
                }
            } else {
                // Username not found
                $failedMessage = "Email Not Found!";
                header("Location: ../login.php?failed=" . urlencode($failedMessage));

                exit;
            }

        } catch(PDOException $e) {
            echo "Connection failed: " . $e->getMessage();
        }
    }
?>