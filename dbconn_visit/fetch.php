<?php
    try {
        $servername = "localhost";
        $username = "root";
        $password = ""; 

        $conn = new PDO("mysql:host=$servername;dbname=croakculture", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $sql = "SELECT * FROM `visit_form`";

        // $result=$conn->query("$sql");
        // $result->setFetchMode(PDO::FETCH_ASSOC);
        // $row = $result->fetch();
        // $row = $result->fetchAll();
        // var_dump($row);

        //Cara 1

        // foreach($result as $value) {
        //     echo "Name: ", $value["name"], "<br>\n";
        //     echo "Email: ", $value["email"], "<br>\n";
        //     echo "Phone: ", $value["phone"], "<br>\n";
        //     echo "Destination: ", $value["destination"], "<br>\n";
        //     echo "Date: ", $value["date"], "<br>\n";
        //     echo "Time: ", $value["time"], "<br>\n";
        //     echo "Group Size: ", $value["group_size"], "<br>\n";
        //     echo "Reason for Visit: ", $value["reason"], "<br>\n";
        //     echo "Additional Requests: ", $value["additional_requests"], "<br><br>\n";
        // }

        //Cara 3
        $result=$conn->query("$sql");
        $result->setFetchMode(PDO::FETCH_ASSOC);
        $rows = $result->fetchAll();

        //Cara 2
        
        $conn = null;

        //radio button what do?
        
    } catch(PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }

//     INSERT INTO visitors (name, email, phone, destination, visit_date, visit_time, group_size, reason_for_visit, additional_requests)
// VALUES
// ('John Doe', 'johndoe@example.com', '123-456-7890', 'art', '2023-05-20', '14:00:00', 2, 'education', 'No additional requests'),
// ('Jane Smith', 'janesmith@example.com', '098-765-4321', 'history', '2023-05-22', '10:30:00', 4, 'leisure', 'No additional requests'),
// ('Bob Johnson', 'bjohnson@example.com', '555-555-5555', 'science', '2023-05-25', '13:45:00', 1, 'research', 'Need wheelchair access');
?>