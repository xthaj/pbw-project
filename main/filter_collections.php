<?php
try {
    $servername = "localhost";
    $username = "root";
    $password = "";

    $conn = new PDO("mysql:host=$servername;dbname=croakculture", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Check if a specific location filter is requested
    $locationFilter = $_GET['location'] ?? null;
    
    // Prepare the SQL query based on the location filter
    if ($locationFilter) {
        $sql = "SELECT * FROM `gallery_item` WHERE location = :location";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':location', $locationFilter);
    } else {
        $sql = "SELECT * FROM `gallery_item`";
        $stmt = $conn->prepare($sql);
    }

    $stmt->execute();
    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

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
