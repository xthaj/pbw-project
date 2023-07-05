<?php
    // Start the session
    session_start();

    // Clear all session variables
    $_SESSION = array();

    // Destroy the session
    session_unset();
    session_destroy();

    // Redirect to the login page or any other desired page
    $successMessage = "You have been logged out successfully!";
    header("Location: message.php?success=" . urlencode($successMessage));

    exit;
?>
