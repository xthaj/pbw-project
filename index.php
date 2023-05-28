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
      <?php  
        include ('header.php');
      ?>
    
      <main>
        <div class="hero">
          <div class="hero-texts">
            <div class="hero-description">
              <p>A treasure trove of delights, just waiting to be explored.</p> 
            </div>
            <div class="hero-learn"> 
              <p>Ensure the best experience in your visit, book us beforehand</p>
              <button onclick="window.location.href='visit.html'">Visit Us</button>
            </div>
          </div>

            <div class="hero-image"> 
              <img src="image/hero-image.png" alt="">
          </div>
        </div>

        <section class="introduction">
          <h1>Who are we?</h1>
          <div class="intro-container">
            <div>
              <img src="image/logo.png" alt="logo">
              <p>
                Croak Culture is a museum, education, and research complex. We are a community of learning and 
                an opener of doors. Join us on a voyage of discovery. Explore our vast digital <a href="gallery.html"><strong>gallery</strong></a> 
                and learn online. <a href="learn.html"><strong>Check out</strong></a> and <a href="support.html"><strong>support</strong></a> 
                our ongoing projects. Book a <a href="visit.html"><strong>visit</strong></a> to have a full experience in our museums.
              </p>
            </div>
          </div>
        </section>

        <section class="museums">
          <h1>Our Museums</h1>
            <div class="museum-cards">
              <div class="museum-card">
                  <img class="museum-image" src="image/museum-1-art.jpg" alt="art museum">
                  <div class="museum-details">
                      <h2 class="museum-name">Art & Design<br>Museum</h2>
                      <p class="museum-location">950 Independence Ave., SW<br>Washington, DC</p>
                      <a href="https://www.google.com/maps/place/Smithsonian+National+Museum+of+African+Art/@38.8880418,-77.0258838,20z/data=!4m6!3m5!1s0x89b7b79c44cbab13:0x97c5d738cfe1e08c!8m2!3d38.887988!4d-77.025513!16zL20vMDczbDRr" target="_blank" rel="noopener noreferrer">See on map <i class="fa-sharp fa-solid fa-map-location-dot"></i></a>
                  </div>
              </div>
              <div class="museum-card">
                <img class="museum-image" src="image/museum-2-sci.jpg" alt="history museum">
                <div class="museum-details">
                    <h2 class="museum-name">History & Culture<br>Museum</h2>
                    <p class="museum-location">14390 Air and Space Museum Parkway<br>Chantilly, VA</p>
                    <a href="https://www.google.com/maps/place/Smithsonian+National+Museum+of+African+Art/@38.8880418,-77.0258838,20z/data=!4m6!3m5!1s0x89b7b79c44cbab13:0x97c5d738cfe1e08c!8m2!3d38.887988!4d-77.025513!16zL20vMDczbDRr" target="_blank" rel="noopener noreferrer">See on map <i class="fa-sharp fa-solid fa-map-location-dot"></i></a>
                </div>
            </div>
              <div class="museum-card">
                <img class="museum-image" src="image/museum-3-history.jpg" alt="science museum">
                <div class="museum-details">
                    <h2 class="museum-name">Science & Conservation Museum</h2>
                    <p class="museum-location">1300 Constitution Ave., NW<br>Washington, DC</p>
                    <a href="https://www.google.com/maps/place/Smithsonian+National+Museum+of+African+Art/@38.8880418,-77.0258838,20z/data=!4m6!3m5!1s0x89b7b79c44cbab13:0x97c5d738cfe1e08c!8m2!3d38.887988!4d-77.025513!16zL20vMDczbDRr" target="_blank" rel="noopener noreferrer">See on map <i class="fa-sharp fa-solid fa-map-location-dot"></i></a>
                </div>
            </div>
          </div>
        </section>
      </main>
     
      <?php  
        include ('footer.php');
      ?>

      </body>
</html>