<?php 
session_start();
 ?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Croak Culture</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="style.css">
        <script src="https://kit.fontawesome.com/65d6be58fa.js" crossorigin="anonymous"></script>

    </head>

    <body class="main-layout">
      <div>
        <header>
          <div class="logo">
              <img src="image/logo.png" alt="logo">
          </div>
  
          <p class="page-title">CROAK CULTURE</p>
  
          <ul>
              <li>
                  <a href="https://www.instagram.com/athathathatha">
                      <i class="fa-brands fa-instagram"></i>
                  </a>
              </li>
              <li>
                  <a href="mailto:athajuli@gmail.com">
                      <i class="fa-solid fa-envelope"></i>
                  </a>
              </li>
          </ul> 
      </header>
      </div>

      <div class="message">

        <?php 
          if (isset($_GET['success'])) {
            $successMessage = $_GET['success'];
            echo '<p>' . $successMessage . '</p>';
        }
        ?>
        <button><a href="index.php"></a>Back to Home</button>
       
      </div>

      <div style="background-color: red;">
        <footer>
          <div class="footer-wrap">
            <div class="footer-logo">
              <a href="https://github.com/xthaj" target="_blank">
                <i class="fa-brands fa-github"></i>
              </a>
            </div>
    
            <div class="footer-col">
              <p>About the website</p>
              <ul>
                <li><a href="https://www.si.edu" target="_blank">Reference and Sources</a></li>
                <li><a href="https://docs.google.com/document/d/1uS482CSX6L9nysM13FL_yskhoIGfC5mF2-P07MzQL2o/edit?usp=sharing" target="_blank">Other Attributions</a></li>
                <li><a href="https://youtube.com/playlist?list=PLl2VaUX1bspnsR8EGU1zAyygDsSYrH8P2" target="_blank" rel="noopener noreferrer">Tutorials Followed</a></li>
                <li><a href="https://youtu.be/dQw4w9WgXcQ" target="_blank">Important</a></li>
              </ul>
            </div>
    
            <div class="footer-col">
              <p>For & By</p>
              <ul>
                <li>PBW Project 2023</li>
                <li>Atha Juli R</li>
              </ul>
            </div>
          </div>
  </footer>
      </div>
      
      

      </body>
</html>