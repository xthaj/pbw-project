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

    <body>
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
                      <a href="index.html" class="nav-link">Home</a>        
                   </li>

                  <li class="nav-item">
                    <a href="gallery.html" class="nav-link">Gallery</a>        
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
                      <button class="link" data-dropdown-button>Account</button>
                      <div class="dropdown-menu">
                        <a href="my-visits.html">My Visits</a>
                        <a href="given-support.html">Given Support</a>
                        <a href="login.html">Log In</a>
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

        <main id="account-page">
            <div class="account-profile">
                <div class="profile-image">
                    <img src="image/user_profile.png" alt="blank profile">
                </div>

                <p class="greetings">Hello, [username]!</p>

                <form>
                  <div>
                    <label for="profile-picture">Change Profile Picture:</label>
                    <input type="file" id="profile-picture" name="profile-picture" accept="image/*">
                  </div>
                    <button class="rounded-button" type="submit">Change</button>
                </form>

                <ul>
                    <li><a href="my-visits.html">My Visits</a></li>
                    <li><a href="given-support.html">Given Support</a></li>
                    <li><a href="bookmarked.html">Bookmarked Collections</a></li>
                </ul>
            </div>

          <div class="account-attributes">
            <div class="attribute-visit">
              <h1 class="title">My Visits</h1>

              <div class="search-bar-container">
                <form class="search-bar" action="search-action_page.php">
                  <input type="text" placeholder="Search Data" name="search">
                  <button type="submit">
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </button>
                </form>
              </div>

              <div class="container vertical-scroll">
                <table id="visitorTable">
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Contact Person</th>
                      <th>Destination</th>
                      <th>Visit Date</th>
                      <th>Visit Time</th>
                      <th>Group Size</th>
                      <th>Reason for Visit</th>
                      <th>Additional Requests</th>
                      <th>Edit | Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <!-- Visitor information will be inserted here -->
                    <?php
                      require 'dbconn_visit\fetch.php';

                      $i = 1;

                      foreach ($rows as $value) {
                        // if $value["destination"] == 

                        echo "<tr>";
                        echo "<td>", $i, "</td>";
                        echo "<td>", $value["name"], "<br>", $value["email"], "<br>", $value["phone"], "</td>";
                        echo "<td>";
                        echo match($value["destination"]) {
                          'art' => "Art & Design Museum",
                          'science' => "Science & Conservation Museum",
                          'history' => "History & Culture Museum",
                        };
                        echo "</td>";
                        echo "<td>", $value["date"], "</td>";
                        echo "<td>", $value["time"], "</td>";
                        echo "<td>", $value["group_size"], "</td>";
                        echo "<td>", $value["reason"], "</td>";
                        echo "<td>", $value["additional_requests"], "</td>";
                        echo 
                          "<td>
                          <a href='dbconn_edit_visit.php?name=",$value["name"],"'><img src='edit.png' style='width:30px;height:30px;'></a>
                          <a href='php09G.php?slot=",$value["name"],"'><img src='remove.png' style='width:30px;height:30px;'></a>
                          </td>";
                        echo "</tr>";

                        $i++;
                      }
                    ?>
                  </tbody>
                </table>

              </div>
            </div>


          </div>
        </main>
        
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

    </body>
</html>