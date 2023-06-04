<?php
    session_start();

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

            if (isset($_POST['sign_in'])) {
                $email = sanitizeInput($_POST['email']);
                $password = sanitizeInput($_POST['pswd']);

                $stmt = $conn->prepare("SELECT * FROM users WHERE email = ?");
                $stmt->bindParam(1, $email);
                $stmt->execute();
                $row = $stmt->fetch(PDO::FETCH_ASSOC);

                if ($row) {
                    if ($password === $row["password"]) {
                        $_SESSION['username'] = $username;
                        header("Location: index.php");
                        exit;
                    } else {
                        // Incorrect password
                        $errorMessage = "Wrong password!";
                        exit;
                    }
                } else {
                    // Username not found
                    $errorMessage = "Username not found.";
                    exit;
                }
            }

        } catch(PDOException $e) {
            $errorMessage = "Connection failed: " . $e->getMessage();
        }
    }
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Croak Culture</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="style.css">
    </head>
    
    <body id="login-page">
         <div class="container" id="loginPageContainer">
             <div class="signin-register">
                <form class="sign-up-form" id = "signUpForm" action="user\process_register.php" method="post">
                    <h1>Create Account</h1>
                    <input type="text" name="name" placeholder="Name" required>
                    <input type="email" name="email" placeholder="Email" required>
                    <input type="password" name="pswd" placeholder="Password" required>
                    <input type="password" name="pswd2" placeholder="Confirm Password" required>
                    <input type="tel" name="phone" placeholder="Phone Number" required>
                    <input type="text" name="address" placeholder="Address" required>
                    <button type="submit">Sign Up</button>
                    <p class="account-text change-green">Already have an account? <a href="#" class="change-lightgreen" id="signInButton2">Sign In</a></p>
                    
                </form>
                    
                <form class="sign-in-form" onsubmit="return validateSignInForm()" action="" method="post">
                    <h1>Sign In</h1>
                    <input type="email" name="email" placeholder="Email" required>
                    <input type="password" name="pswd" placeholder="Password" required>
                    <button type="submit" name="sign_in">Sign In</button>
                    <div id="errorMessages">
                        <?php if (!empty($errorMessage)) { ?>
                            <p><?php echo $errorMessage; ?></p>
                        <?php } ?>
                    </div>
                    <p class="account-text change-green">Don't have an account? <a href="#" class="change-lightgreen" id="signUpButton2">Sign Up</a></p>
                </form>
             </div>

             <div class="panels-container">
                <div class="panel left-panel">
                    <div class="content">
                        <h1>Welcome Back!</h1>
                        <p>Find out what's new and updates on Croak projects</p>
                        <p>Not a member?</p>
                        <button id="signUpButton">Sign Up</button>
                    </div>
                    <img src="image/login_image.png" alt="">
                </div>
    
                <div class="panel right-panel">
                    <div class="content">
                        <h1>Welcome!</h1>
                        <p>Discover and expand your knowledge as you explore our exhibits.</p>
                        <p>Already a member?</p>
                        <button id="signInButton">Sign In</button>
                    </div>
                    <img src="image/register_image.png" alt="">
                </div>
            </div>
         </div>
        
         

        <script src="script_login.js"></script>
        <script> loginPage();</script>

    </body>
</html>