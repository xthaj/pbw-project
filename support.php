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

    <body id="support">
                <?php  
                  include ('header.php');
                ?>

                <h2>Support Our Cause</h2>
                <p>Please fill out the form below to support Croak Culture financially.</p>

                <div id="support-form">
                  <form onsubmit="return validateSupportForm()" action="dbconn_support/add.php" method="post" enctype="multipart/form-data">
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
                      <span>Donation Amount</span>
                      <div class="radio-menus">
                        <div>
                          <input type="radio" id="donation-25" name="donation_amount" value="25000">
                          <label for="donation-25">Rp25,000</label>
                        </div>
                        <div>
                          <input type="radio" id="donation-50" name="donation_amount" value="50000">
                          <label for="donation-50">Rp50,000</label>
                        </div>
                        <div>
                          <input type="radio" id="donation-100" name="donation_amount" value="100000">
                          <label for="donation-100">Rp100,000</label>
                        </div>
                      </div>
                      
                    </div>
                
                    <div class="form-item">
                      <span>Donation Method</span>
                      <select id="donation-method" name="donation_method" required>
                        <option value="" disabled selected>---</option>
                        <option value="transfer_bank">Transfer Bank</option>
                        <option value="QRIS">QRIS</option>
                        <option value="supermarket">Alfamart/Indomart/Alfamidi</option>
                      </select>
                    </div>
                
                
                    <div class="form-item">
                      <span>Proof of Donation</span>
                      <input type="file" id="proof" name="proof" accept="image/*" maxlength="2097152" required>
                    </div>

                    <div class="checkbox-label form-item">
                      <span>Preference</span>
                      <p>I want my money to be used for...</p>
                      <div>
                        <input type="checkbox" id="preserve" name="for_preservation" value="false">
                        <label for="preserve">Exhibits Preservation</label>
                      </div>

                      <div>
                        <input type="checkbox" id="projects" name="for_projects" value="false">
                        <label for="projects">Fund Our Projects</label>
                      </div>

                      <div>
                        <input type="checkbox" id="acquire" name="for_acquirement" value="false">
                        <label for="projects">Exhibits Acquirements</label>
                      </div>
                    </div>
                
                    <div class="support-message">
                      <?php 
                            if (isset($_GET['success'])) {
                                $successMessage = $_GET['success'];
                                echo '<br><p>' . $successMessage . '</p><br>';
                            }
                        ?>
                    </div>

                    <input type="submit" value="Submit Donation" class="form-submit-btn">
                  </form>
                </div>
                
      <?php  
        include ('footer.php');
      ?>

    </body>
</html>