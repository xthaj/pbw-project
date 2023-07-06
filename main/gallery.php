<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Croak Culture</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="../style.css">
        <script src="https://kit.fontawesome.com/65d6be58fa.js" crossorigin="anonymous"></script>

    </head><body id="gallery">
      
    <?php  
        include ('header.php');
      ?>

      <main>
        <h1 class="title">Gallery</h1>
    
        <div class="gallery-navigator">
          <div class="gallery-table">
            <div class="col-gallery" id="choose-art">
              <a href="#" class="filter" data-filter="art">Art & Design Museum</a>
            </div>

            <div class="col-gallery" id="choose-history">
              <a href="#" class="filter" data-filter="history">History & Culture Museum</a>
            </div>

            <div class="col-gallery" id="choose-science">
              <a href="#" class="filter" data-filter="science">Science & Conservation Museum</a>
            </div>
          </div>

          <a class="gallery-all" href="#" data-filter="all">See All</a>
        </div>

        
        <h2 class="title">All Collections</h2>
    
        <div id="collections">
          <div id="collection-container" class="vertical-scroll">
            <template id="collection-template">
                <div class="collection">
                  <div class="collection-image-container">
                    <img class="collection-image">
                    <button class="bookmark-button"><i class="fa-solid fa-bookmark"></i></button>
                  </div>
    
                    <div class="collection-details">
                        <h2 class="collection-name"></h2>
                        <p class="collection-description justify"></p>
                        <p class="collection-location"></p>
                        <p class="collection-date"></p>
                        <a class="collection-link change-lightgreen">More Information</a>
                    </div>
                </div>
            </template>
    
            <?php
            try {
                $servername = "localhost";
                $username = "root";
                $password = ""; 
    
                $conn = new PDO("mysql:host=$servername;dbname=croakculture", $username, $password);
                $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
                $sql = "SELECT * FROM `gallery_item`";
                $result = $conn->query($sql);
                $result->setFetchMode(PDO::FETCH_ASSOC);
                $rows = $result->fetchAll();
    
                foreach ($rows as $row) {
                  echo '<div class="collection">';
                  echo '<div class="collection-image-container">';
                  echo '<img class="collection-image" src="' . $row["image_path"] . '">';
                  echo '</div>';
                  echo '<div class="collection-details">';
                  echo '<h2 class="collection-name">' . $row["name"] . '</h2>';
                  echo '<a class="collection-link change-lightgreen" href="museum-item.php?id=' . $row["id"] . '">More Information</a>';
                  echo '</div>';
                  echo '</div>';
              }              
    
                $conn = null;
            } catch (PDOException $e) {
                echo "Connection failed: " . $e->getMessage();
            }
            ?>
    
          </div>
        </div>
      </main>     

      <?php  
        include ('footer.php');
      ?>
        
    </body>
</html>