<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Header</title>
</head>
<body>
    
    <header>
        <div class="logo">
            <img src="../image/logo.png" alt="logo">
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

    <nav>
      <div class="container"> 
          <!-- search bar -->
          <form class="search-bar" action="search-action_page.php">
            <input type="text" placeholder="Search.." name="search">
            <button type="submit">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>

        <div class="subcontainer">
          <nav class="navbar">
          <!-- nav on right side -->
            <ul class="nav-menu">
              <li class="nav-item">
                  <a href="index.php" class="nav-link">Home</a>        
               </li>

              <li class="nav-item">
                <a href="gallery.php" class="nav-link">Gallery</a>        
              </li>

              <li class="nav-item">
                  <a href="learn.html" class="nav-link">Learn</a>        
               </li>

               <li class="nav-item">
                  <a href="visit.html" class="nav-link">Visit</a>        
                </li>
              <li class="nav-item">
                  <a href="support.html" class="nav-link">Support</a>        
              </li>

             <li class="nav-item">
                <div class="dropdown" data-dropdown>
                  <button class="link" data-dropdown-button>My Account</button>
                  <div class="dropdown-menu">
                    <a href="my-visits.php">My Visits</a>
                    <a href="given-support.php">Given Support</a>
                    <a href="../logout.php">Log Out</a>
                  </div>
                </div>
              </li>

            </ul>

            <div class="hamburger">
              <span class="bar"></span>
              <span class="bar"></span>
              <span class="bar"></span>
            </div>

          </nav>
        </div>
      </div>
    </nav>

</body>
</html>