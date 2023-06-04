<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

try {
    $servername = "localhost";
    $username = "root";
    $password = ""; 
    $database = "croakculture";

    $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Retrieve form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $amount = $_POST['donation_amount'];
    $method = $_POST['donation_method'];

    // Check if a file was uploaded
    if (isset($_FILES['proof']) && is_uploaded_file($_FILES['proof']['tmp_name'])) {
        // The file is uploaded and accessible
        // You can perform further operations on the file
        $proof = $_FILES['proof']['tmp_name'];
        $proof_name = $_FILES['proof']['name'];
    
        // Move the uploaded file to a desired location
        $target_directory = "../donation_proofs/";
        $target_file = $target_directory . $proof_name;
        if (move_uploaded_file($proof, $target_file)) {
            // File uploaded successfully
            // Do additional processing or database insertion here
        } else {
            // File upload failed, check for errors
            $errorMessage = "Failed to move uploaded file.";
        }
    } else {
        // No file uploaded or unable to access the uploaded file
        $errorMessage = "No file uploaded or unable to access the uploaded file.";
    }
    
    // You can display or handle the error message as per your requirements
    if (isset($errorMessage)) {
        echo $errorMessage;
    }

    $for_preservation = isset($_POST['for_preservation']) ? 1 : 0;
    $for_projects = isset($_POST['for_projects']) ? 1 : 0;
    $for_acquirement = isset($_POST['for_acquirement']) ? 1 : 0;

    // Prepare the SQL statement with placeholders
    $sql = "INSERT INTO support_form (name, email, phone, amount, method, proof, for_preservation, for_projects, for_acquirement) 
            VALUES (:name, :email, :phone, :amount, :method, :proof, :for_preservation, :for_projects, :for_acquirement)";

    // Prepare the statement
    $stmt = $conn->prepare($sql);

    // Bind the values to the parameters
    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':phone', $phone);
    $stmt->bindParam(':amount', $amount);
    $stmt->bindParam(':method', $method);
    $stmt->bindParam(':proof', $target_file, PDO::PARAM_STR);
    $stmt->bindParam(':for_preservation', $for_preservation);
    $stmt->bindParam(':for_projects', $for_projects);
    $stmt->bindParam(':for_acquirement', $for_acquirement);

    // Execute the statement
    $stmt->execute();

    // Close the connection
    $conn = null;

    // $successMessage = "Thank you for your donation.";
    // header("Location: ../support.php?success=" . urlencode($successMessage));
    exit;
} catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
?>
