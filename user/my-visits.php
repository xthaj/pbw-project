<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Croak Culture</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="../style.css">
        <script src="https://kit.fontawesome.com/65d6be58fa.js" crossorigin="anonymous"></script>
    </head>

    <body>
        
        <?php  
          include ('header.php');
        ?>

        <main id="account-page">
            <div class="account-profile">
                <div class="profile-image">
                    <img src="../image/user_profile.png" alt="blank profile">
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
        
        <?php  
          include ('footer.php');
        ?>

    </body>
</html>