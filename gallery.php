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

    <body id="gallery">
          
      <main>
        <h1 class="title">Gallery</h1>

        <div class="gallery-navigator">
          <div class="gallery-table">
            <div class="col-gallery" id="choose-art">
              <a href="" class="filter">Art & Design Museum</a>
            </div>

            <div class="col-gallery" id="choose-history">
              <a href="#" class="filter">History & Culture Museum</a>
            </div>

            <div class="col-gallery" id="choose-science">
              <a href="#" class="filter">Science & Conservation Museum</a>
            </div>
          </div>

          <a class="gallery-all" href="">See All</a>
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

      <!-- <script src="script-gallery.js"></script> -->
      <script src="script-home.js "></script>
      <script> galleryPage();  renderGallery(); </script>
        
    </body>
</html>