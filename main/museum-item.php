<?php
    // Get the ID parameter from the URL
    $id = $_GET['id'];
?>

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

      <main class="gallery-item-layout">
        <h1 class="title">Gallery</h1>

        <?php 
        try {
            $servername = "localhost";
            $username = "root";
            $password = ""; 
            
            $conn = new PDO("mysql:host=$servername;dbname=croakculture", $username, $password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            // Assuming you have an `id` parameter in the URL query string
            $id = isset($_GET['id']) ? $_GET['id'] : null;

            // Retrieve the collection with the specified ID
            if ($id) {
                $sql = "SELECT * FROM `gallery_item` WHERE id = :id";
                $stmt = $conn->prepare($sql);
                $stmt->bindParam(':id', $id);
                $stmt->execute();
                $row = $stmt->fetch(PDO::FETCH_ASSOC);

                // Check if a collection was found
                if ($row) {
                    echo '
                        <div class="collection-single">
                            <div class="collection-image-container">
                                <img class="collection-singleimage" src="' . $row["image_path"] . '">
                            </div>

                            <div class="collection-details">
                                <h2 class="collection-name">' . $row["name"] . '</h2>
                                <p class="collection-description justify"><h2 class="subtitle">Description</h2><p>' . $row["description"] . '</p>
                                <p class="collection-location"><h2 class="subtitle">Location</h2><p>' . $row["location"] . '</p>
                                <p class="collection-date"><h2 class="subtitle">Date Acquired</h2><p>' . $row["date_acquired"] . '</p>
                                <a class="collection-link change-lightgreen" href="gallery.php">Back to Gallery</a>
                            </div>
                        </div>
            ';
                } else {
                    echo "No collection found with the specified ID.";
                }
            } else {
                echo "Invalid ID parameter.";
            }

            $conn = null;
        } catch (PDOException $e) {
            echo "Connection failed: " . $e->getMessage();
        }
        ?>
    
    </main>

      <?php  
        include ('footer.php');
      ?>

      <script src="script_home.js "></script>
        
    </body>
</html>