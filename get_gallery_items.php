<?php
    // Include your database connection configuration file
    include('dbconn.php');

    // Retrieve the chosen filter value from the AJAX request
    $filter = $_GET['filter'];

    // Prepare the SQL query to fetch the gallery items based on the filter
    $query = "SELECT * FROM gallery_item WHERE location = :filter";
    $statement = $conn->prepare($query);
    $statement->bindParam(':filter', $filter);
    $statement->execute();

    // Fetch the results and return as JSON
    $results = $statement->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($results);
?>
