const filters = document.querySelectorAll('.filter');
filters.forEach(filter => {
  filter.addEventListener('click', () => {
    alert('Filter function has not been deployed yet');
  });
});

const bookmarkButtons = document.querySelectorAll('.bookmark-button');
bookmarkButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Item has been added to bookmarks (not really)');
  });
});


const collections = [
    {
        id: 1,
        name: "\"Milky Way, Starry Night # 2\" by Margaret Nazon",
        description: "\"Lights Out\" focuses on how the night sky—and its disappearance due to light pollution—affects all life on Earth, from natural ecosystems to human cultures.",
        location: "Art & Design Museum",
        date: new Date("2023-03-19"),
        image: "image/gallery-1-milkyway.jpg",
        url: ""
    },
    {
        id: 2,
        name: '“Black Gold I” by Yinka Shonibare', 
        description: '25 circular canvases of varying dimensions arranged on a large-scale ink splatter pattern (applied by template). Each canvas consists of foliate patterns painted in black and gold paint on either edges or surface of stretched Dutch wax printed fabrics.', 
        location: 'Art & Design Museum', 
        date: new Date("2023-03-19"),
        image: "image/gallery-2-blackgold.jpg",
        url: ""
    },
    {
        id: 3,
        name: '“Cape Cod Morning” by Edward Hopper', 
        description: 'In Cape Cod Morning, a woman looks out a bay window, riveted by something beyond the pictorial space. She is framed by tall, dark shutters and the shaded façade of the oriel window. The brilliant sunlight on the side of the house contrasts with the blue sky, trees, and golden grass that fill the right half of the canvas. The painting tells no story; instead, the woman\'s tense pose creates a sense of anxious anticipation, and the bifurcated image implies a dichotomy between her interior space and the world beyond.',
        location: 'Art & Design Museum', 
        date: new Date("2023-03-19"),
        image: "image/gallery-3-capecod.jpg",
    },
    {
        id: 4,
        name: '“Electronic Superhighway: Continental U.S., Alaska, Hawaii” by Nam June Paik', 
        description: 'When Nam June Paik came to the United States in 1964, the interstate highway system was only nine years old, and superhighways offered everyone the freedom to "see the U.S.A. in your Chevrolet." Walking along the entire length of this installation suggests the enormous scale of the nation that confronted the young Korean artist when he arrived. Neon outlines the monitors, recalling the multicolored maps and glowing enticements of motels and restaurants that beckoned Americans to the open road. The different colors remind us that individual states still have distinct identities and cultures, even in todays information age. Paik augmented the flashing images "seen as though from a passing car" with audio clips from The Wizard of Oz, Oklahoma, and other screen gems, suggesting that our picture of America has always been influenced by film and television. Today, the Internet and twenty-four-hour broadcasting tend to homogenize the customs and accents of what was once a more diverse nation. Paik was the first to use the phrase "electronic superhighway," and this installation proposes that electronic media provide us with what we used to leave home to discover. But Electronic Superhighway is real. It is an enormous physical object that occupies a middle ground between the virtual reality of the media and the sprawling country beyond our doors.',
        location: 'Art & Design Museum', 
        date: new Date("2023-03-19"),
        image: "image/gallery-4-highway.jpg",
    },
    {
        id: 5,
        name: 'Conestoga Wagon', 
        description: 'Pennsylvania Germans near the Conestoga River first made Conestoga wagons around 1750 to haul freight. By the 1810s, improved roads to Pittsburgh and Wheeling, Virginia (now West Virginia) stimulated trade between Philadelphia, Baltimore, and settlers near the Ohio River. Wagoners with horse-drawn Conestoga wagons carried supplies and finished goods westward on three- to four-week journeys and returned with flour, whiskey, tobacco, and other products. The Conestoga wagon’s curved shape shifted cargo toward the center and prevented items from sliding on mountain slopes. Railroads replaced Conestoga wagons by the 1850s, but the prairie schooner, a lightweight, flat variant, carried pioneer settlers from Missouri to the West Coast.',
        location: 'Art & Design Museum', 
        date: new Date("2023-03-19"),
        image: "image/gallery-5-wagon.jpg",
    },
    {
        id: 6,
        name: 'Ulysses S. Grant\'s chair from Appomattox', 
        description: 'Sitting in the chair on the right, Grant discussed the fate of Lee\'s troops. Then, leaning over the oval table, he drafted and signed the final terms of surrender. While there were still Confederate troops in the field under other commanders, Lee\'s surrender effectively marked the end of the Civil War.',
        location: 'History & Culture Museum', 
        date: new Date("2023-03-19"),
        image: "image/gallery-6-chair.jpg",
    },
    {
        id: 7,
        name: 'Hope Fire Company Fire Hat', 
        description: 'Beginning in the late 18th century, some volunteer fire fighters began to wear hats painted with their company\'s name to identify themselves at chaotic fire scenes. During the 19th century, these fire hats became more ornate, as portraits of historical figures, patriotic scenes, allegorical images, or company icons were painted alongside the company\'s name, motto, or founding date. Made of pressed felt, these “stove-pipe” hats were primarily used in Philadelphia, but other nearby cities such as Baltimore and Washington adopted them as well. Fire hats were personal items with the owner\'s initials often painted on the top of the hat. While these hats were worn at fires, they are more colloquially known as “parade hats.” Fire companies commonly marched in the many parades of the period and these ornate hats contributed to the visual culture of their day. These distinguishing features in a company\'s regalia often proclaimed the members\' cultural and political identity as well as their position on contested topics such as work, religion and immigration.',
        location: 'History & Culture Museum', 
        date: new Date("2023-03-19"),
        image: "image/gallery-7-hat.jpg",
    },
    {
        id: 8,
        name: 'Kermit the Frog Puppet', 
        description: 'Kermit is a bright green frog who was the star and host of The Muppet Show and appears on Sesame Street. He is one of Jim Henson\'s earliest creations, dating back to 1955 with his appearances on Sam and Friends on the Washington, D.C., NBC affiliate station. He was previously performed by Jim Henson and Steve Whitmire and is currently performed by Matt Vogel. Kermit is a calm, level-headed character who is constantly trying to keep everything together as he is surrounded by craziness. Kermit is known for singing “Bein\' Green” (also known as “It\'s Not Easy Bein\' Green”) which talks about the difficulties he has had because of his color but ends with him accepting and embracing his greenness.',
        location: 'History & Culture Museum', 
        date: new Date("2023-03-19"),
        image: "image/gallery-8-kermit.jpg",
    },
    {
        id: 9,
        name: 'Ferrel Tide Predictor', 
        description: 'In 1872, the British physicist William Thomson (later Lord Kelvin) devised a machine to simulate mechanically the combination of periodic motions that produce tides. Inspired by this example, William Ferrel of the U.S. Coast and Geodetic Survey designed a tide predictor and had it built by the Washington, D.C., firm of Fauth and Company. This elegant machine was more compact than that of Thomson, and gave maxima and minima rather than a continuous curve as output. It was designed in 1880, went into service in 1883 and remained in use until 1910. The success of Ferrel\'s tide predictor suggested the feasibility of replacing calculations performed by people with computation by machines.',
        location: 'Science & Conservation Museum', 
        date: new Date("2023-03-19"),
        image: "image/gallery-9-ferrel-tide.jpg",
    },
    {
        id: 10,
        name: 'Bergeroniellus sp', 
        description: 'Paleozoic - Cambrian',
        location: 'Science & Conservation Museum', 
        date: new Date("2023-03-19"),
        image: "image/gallery-10-fossil.jpg",
    }
];

function renderGallery() {
    const collectionContainer = document.querySelector('#collection-container');
    const collectionTemplate = document.querySelector('#collection-template');
  
      for (let i = 0; i < collections.length; i++) {
        const collectionClone = collectionTemplate.content.cloneNode(true);
        const collectionImage = collectionClone.querySelector('.collection-image');
        const collectionName = collectionClone.querySelector('.collection-name');
        const collectionLink = collectionClone.querySelector('.collection-link');
  
        collectionImage.src = collections[i].image;
        collectionName.textContent = collections[i].name;
        collectionLink.href = "#"; 
        collectionLink.addEventListener('click', function() {
          renderGalleryCollection(i);
        });
  
        collectionContainer.appendChild(collectionClone);
      }
  }
  
  function renderGalleryCollection(id) {
    const collectionContainer = document.querySelector('#collection-container');
    const collectionTemplate = document.querySelector('#collection-template');
  
    // Clear the post container before rendering the new post
    collectionContainer.innerHTML = "";

    // const pageTitle = postClone.querySelector('.title');
    const collectionClone = collectionTemplate.content.cloneNode(true);
    const collection = collectionClone.querySelector('.collection');
      const collectionImage = collectionClone.querySelector('.collection-image');
      const collectionName = collectionClone.querySelector('.collection-name');
      const collectionDescription = collectionClone.querySelector('.collection-description');
      const collectionLocation = collectionClone.querySelector('.collection-location');
      const collectionDate = collectionClone.querySelector('.collection-date');
      collectionDescription.innerHTML = collections[id].description;

      const collectionLink = collectionClone.querySelector('.collection-link');


    // postClone.removeChild(pageTitle);
    collectionImage.src = collections[id].image;
    collectionName.textContent = collections[id].name;
    collectionDescription.innerHTML = '<h2 class="subtitle">Description</h2>' + collections[id].description;
    collectionLocation.innerHTML = '<h2 class="subtitle">Location</h2>' + collections[id].location;
    collectionDate.innerHTML = '<h2 class="subtitle">Date Acquired</h2>' + formatDate(collections[id].date);
    collectionLink.href = "#";
    collectionLink.textContent = "Back to Gallery";

    collection.classList.remove('collection');
    collection.classList.add('collection-single');
    
    collectionImage.classList.remove('collection-image');
    collectionImage.classList.add('collection-singleimage');

    collectionContainer.classList.add('singlecollection-container');
    
    collectionLink.addEventListener('click', function() {
      location.reload(); // Reload the page
    });
    collectionContainer.appendChild(collectionClone);
}
