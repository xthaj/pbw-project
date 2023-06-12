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

    <body id="visit">
            <?php  
                include ('header.php');
              ?>

            <main>
            <h1 class="title">Visit Us!</h1>
            
            <p>Please fill out the form below to request a visit to our museum.</p>
            
            <div id="visit-form" >
              <form onsubmit="return validateVisitForm()" action="dbconn_visit/add.php" method="post">
              <div class="visit-message">
                   <?php 
                        if (isset($_GET['success'])) {
                            $successMessage = $_GET['success'];
                            echo '<br><p>' . $successMessage . '</p><br>';
                        }
                    ?>
                </div>  
              <div class="form-item">
                  <span>Name</span>
                  <input type="text" id="name" name="name" required>
                </div>

                <div class="form-item">
                  <span>Email</span>
                  <input type="email" id="email" name="email" required>
                </div>

                <div class="form-item">
                  <span>Phone</span>
                  <input type="tel" id="phone" name="phone" required>
                </div>

                <div class="form-item">
                  <span>Destination</span>
                  <select id="destination" name="destination">
                    <option value="" disabled selected>---</option>
                    <option value="art">Art & Design Museum</option>
                    <option value="history">History & Culture Museum</option>
                    <option value="science">Science & Conservation Museum</option>
                  </select>
                </div>

                <div class="form-item">
                  <span>Visit Date</span>
                  <input type="date" id="visit-date" name="date">
                </div>

                <div class="form-item">
                  <span>Visit Time</span>
                  <input type="time" id="visit-time" name="time">
                </div>

                <div class="form-item">
                  <span>Group Size</span>
                  <input type="number" id="group-size" name="group_size" min="1" max="20">
                </div>

                <div class="form-item">
                  <span>Reason for Visit</span>
                  <div class="radio-menus">
                    <div>
                      <input type="radio" id="education" name="reason" value="education">
                      <label for="education">Education</label>
                    </div>
                    <div>
                      <input type="radio" id="research" name="reason" value="research">
                      <label for="research">Research</label>
                    </div>
                    <div>
                      <input type="radio" id="leisure" name="reason" value="leisure">
                      <label for="leisure">Leisure</label>
                    </div>
                </div>
                </div>

                <div class="form-item">
                  <span>Additional Requests</span>
                  <textarea id="additional-requests" name="additional-requests" rows="4" cols="50"></textarea>
                </div>

                

                <input type="submit" value="Submit" class="form-submit-btn">
              </form>
            </div>
          </main>

      <?php  
        include ('footer.php');
      ?>

    </body>
</html>