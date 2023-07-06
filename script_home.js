// ╔══════════════════════════════════════════════════════════╗
// ║ STICKY NAV                                               ║
// ╚══════════════════════════════════════════════════════════╝

const nav = document.querySelector('nav');
const navOffsetTop = nav.offsetTop;

function fixNavbar() {
  if (window.scrollY >= navOffsetTop) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
}

window.addEventListener('scroll', fixNavbar);

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}));

// dropdown code

document.addEventListener("click", e => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]");
  if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return;

  let currentDropdown;
  if (isDropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown]");
    currentDropdown.classList.toggle("active");
  }

  document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
    if (dropdown === currentDropdown) return;
    dropdown.classList.remove("active");
  });
});

// submit forms

const submitButtons = document.querySelectorAll('.form-submit-btn');

submitButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    button.style.opacity = '0.6';
  });
});

//date formatting

function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  const formattedDate = date.toLocaleDateString(undefined, options);
  const day = formattedDate.slice(formattedDate.indexOf(' ') + 1, -6);
  const suffix = getDaySuffix(day);
  return formattedDate.replace(day, day + suffix);
}

function getDaySuffix(day) {
  switch (day) {
    case '1': case '21': case '31': return 'st';
    case '2': case '22': return 'nd';
    case '3': case '23': return 'rd';
    default: return 'th';
  }
}

// Function to display visitor information in the table
function displayVisitors() {
  var table = document.getElementById('visitorTable').getElementsByTagName('tbody')[0];

  // Clear existing rows from the table
  table.innerHTML = '';

  for (var i = 0; i < visitors.length; i++) {
    var row = table.insertRow(i);

    var contactCell = row.insertCell(0);
    contactCell.innerHTML = visitors[i].name + '<br>' + visitors[i].phone + '<br>' + visitors[i].email;

    var destCell = row.insertCell(1);
    destCell.innerHTML = visitors[i].destination;

    var dateCell = row.insertCell(2);
    dateCell.innerHTML = visitors[i].visitDate;

    var timeCell = row.insertCell(3);
    timeCell.innerHTML = visitors[i].visitTime;

    var sizeCell = row.insertCell(4);
    sizeCell.innerHTML = visitors[i].groupSize;

    var reasonCell = row.insertCell(5);
    reasonCell.innerHTML = visitors[i].reasonForVisit;

    var requestCell = row.insertCell(6);
    requestCell.innerHTML = visitors[i].additionalRequests;
  }
}

function validateVisitForm() {
 const name = document.getElementById('name').value.trim();
 const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const destination = document.getElementById('destination').value;
  const visitDate = document.getElementById('date').value;
  // const visitTime = document.getElementById('appt').value;
   const groupSize = document.getElementById('group-size').value;
  const reasonForVisit = document.querySelector('input[name="reason"]:checked');
  
  // Check if required fields are filled out
  if (!name || !email || !phone || !destination || !reasonForVisit) {
    alert('Please fill out all required fields.');
    return false;
  }
  
  const mailRegex = /\S+@\S+\.\S+/;
  if (!mailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return false;
  }
  
  const phoneRegex = /^\+?\d{10,15}$/; 
  if (!phoneRegex.test(phone)) {
    alert('Please enter a valid phone number.');
    return false;
  }

  const today = new Date();
  const selectedDate = new Date(visitDate);
  const oneMonthFromNow = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
  if (selectedDate < today || selectedDate > oneMonthFromNow) {
    alert('Please select a date within the next month.');
    return false;
  }

  if (groupSize < 1 || groupSize > 20) {
    alert('Group size must be between 1 and 20.');
    return false;
  }

  return true;
}

function validateSupportForm() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const donationAmount = document.querySelector('input[name="donation_amount"]:checked');
  const donationMethod = document.getElementById('donation-method').value;

  if (!name || !email || !phone || !donationAmount || !donationMethod) {
    alert('Please fill out all required fields.');
    return false;
  }

  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return false;
  }

  const phoneRegex = /^\+?\d{10,15}$/;
  if (!phoneRegex.test(phone)) {
    alert('Please enter a valid phone number.');
    return false;
  }

  return true;
}


const posts = [
  {
      title: "My First Blog Post",
      content:"Roxie C. Laybourne, whose scientific investigations into bird collisions with airplanes helped start forensic ornithology and enabled engineers to develop aircraft capable of withstanding such accidents, died on Aug. 7 at her farm in Manassas, Va. She was 92. <br> In 1960, when a plane crashed taking off from Logan Airport in Boston, killing all 62 people aboard, Ms. Laybourne, then a scientist at the Smithsonian's National Museum of Natural History, helped investigators conclude that the cause was a flock of starlings caught in one of its engines.<br>Having only charred remains to work with, she developed a novel way to remove oil and gasoline from bits of feathers while keeping them suitable for microscopic examination. Using a microscope, she could then pinpoint minute structural characteristics and identify the bird species or family based on the feathers.\n\n\n\nOver the next decades, Ms. Laybourne helped identify thousands of birds involved in collisions with commercial and military aircraft. Her work gave plane manufacturers information for designing engines that could continue to fly after ingesting the birds, and it helped ornithologists create bird management programs to prevent flocks from gathering near airports.",
      date: new Date("2023-03-19"),
      image: "image/learn-1.png",
      url: "learn-samplepost.html"
  },
  {
      title: "My Second Blog Post",
      content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      date: new Date("2023-04-19"),
      image: "image/learn-2.jpg",
      url: "post2.html"
  },
  {
      title: "My Third Blog Post",
      content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      date: new Date("2023-03-19"),
      image: "image/learn-3.jpg",
      url: "post3.html"
  },
  {
      title: "My Fourth Blog Post",
      content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      date: new Date("2023-03-21"),
      image: "image/learn-4.jpg",
      url: "post4.html"
  },
  {
      title: "My Fifth Blog Post",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      date: new Date("2023-03-22"),
      image: "image/learn-5.jpg",
      url: "post5.html"
  },
  {
      title: "My Sixth Blog Post",
      content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      date: new Date("2023-03-23"),
      image: "image/learn-6.jpg",
      url: "post6.html"
  },
  {
      title: "My Seventh Blog Post",
      content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      date: new Date("2023-03-24"),
      image: "image/learn-7.jpg",
      url: "post7.html"
  },
  {
      title: "My Eighth Blog Post",
      content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      date: new Date("2023-03-25"),
      image: "image/learn-8.jpg",
      url: "post8.html"
  },
  {
      title: "My Ninth Blog Post",
      content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      date: new Date("2023-03-26"),
      image: "image/learn-9.jpg",
      url: "post9.html"
  },
  {
      title: "My Tenth Blog Post",
      content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      date: new Date("2023-03-27"),
      image: "image/learn-10.jpg",
      url: "post10.html"
  }
];

function renderPosts(pageNumber) {
  const postsPerPage = 5;
  const startIndex = (pageNumber - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;

  const postContainer = document.querySelector('#post-container');
  const postTemplate = document.querySelector('#post-template');
  
  postContainer.innerHTML = ''; // Clear the post container before rendering new posts

  for (let i = startIndex; i < endIndex && i < posts.length; i++) {
    const postClone = postTemplate.content.cloneNode(true);
    const postImage = postClone.querySelector('.post-image');
    const postTitle = postClone.querySelector('.post-title');
    const postDate = postClone.querySelector('.post-date');
    const postContent = postClone.querySelector('.post-content');
    postContent.innerHTML = "<pre>" + posts[i].content + "</pre>";

    const postLink = postClone.querySelector('.post-link');

    postImage.src = posts[i].image;
    postTitle.textContent = posts[i].title;
    postDate.textContent = formatDate(posts[i].date);
    postContent.innerHTML = posts[i].content.substring(0, 150) + "...";
    postLink.href = "#";
    postLink.addEventListener('click', function() {
      renderPost(i);
    });

    postContainer.appendChild(postClone);
  }

  renderPagination(pageNumber);
}

function renderPagination(pageNumber) {
  const totalPages = Math.ceil(posts.length / 5); // Calculate total pages based on posts array length and posts per page
  const paginationContainer = document.querySelector('#pagination-container');

  paginationContainer.innerHTML = ''; // Clear the pagination container before rendering new pagination

  for (let i = 1; i <= totalPages; i++) {
    const pageLink = document.createElement('a');
    pageLink.href = '#';
    pageLink.textContent = i;
    pageLink.classList.add('exclude');
    if (i === pageNumber) {
      pageLink.classList.add('active');
    }
    pageLink.addEventListener('click', function() {
      renderPosts(i);
    });

    paginationContainer.appendChild(pageLink);
  }
}


function renderPost(id) {
  const postContainer = document.querySelector('#post-container');
  const postTemplate = document.querySelector('#post-template');
  const paginationContainer = document.querySelector('#pagination-container');
  paginationContainer.remove();
  // Clear the post container before rendering the new post
  postContainer.innerHTML = "";

  const postClone = postTemplate.content.cloneNode(true);
  const post = postClone.querySelector('.post');
  const postImage = postClone.querySelector('.post-image');
  const postTitle = postClone.querySelector('.post-title');
  const postDate = postClone.querySelector('.post-date');
  const postContent = postClone.querySelector('.post-content');
  const postLink = postClone.querySelector('.post-link');
  postImage.src = posts[id].image;
  postTitle.textContent = posts[id].title;
  postDate.textContent = formatDate(posts[id].date);
  postContent.innerHTML = posts[id].content;

  postLink.textContent = "Back to Learn";
  postLink.addEventListener('click', function() {
    location.reload(); // Reload the page
  });

  postLink.classList.add('blogposts-back-to-learn');
  // postLink.classList.add('blogposts-changelightgreen');
  postTitle.classList.add('change-green');
  postDate.classList.add('change-green');
  postContent.classList.add('change-green');
  
  postContent.style.textAlign = 'justify';
  // postContent.style.width = "50%";

  post.classList.add('blogposts-changepost');
  postContainer.appendChild(postClone);
}


// ╔══════════════════════════════════════════════════════════╗
// ║ GALLERY SECTION                                          ║
// ╚══════════════════════════════════════════════════════════╝

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


var locationFilters = document.querySelectorAll('.location-filter');
var seeAllLink = document.querySelector('.gallery-all');

// Function to fetch collections based on location
function fetchCollections(location) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'main/filter_collections.php?location=' + encodeURIComponent(location), true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      document.getElementById('collection-container').innerHTML = xhr.responseText;
    }
  };

  xhr.send();
}

// Event listeners for location filters
locationFilters.forEach(function (filter) {
  filter.addEventListener('click', function (event) {
    event.preventDefault();

    var location = this.dataset.filter;
    fetchCollections(location);
  });
});

// Event listener for "See All" link
seeAllLink.addEventListener('click', function (event) {
  event.preventDefault();
  fetchCollections('');
});


const supports = [
  {
    id: 1,
    name: 'James',
    email: 'james@email.com',
    phone: '02183023912',
    donationAmount: 50000,
    donationMethod: 'Transfer Bank',
    proof: 'image/proof.png',
    preference: ['Exhibits Preservation', 'Projects Funding']
  },
  {
    id: 2,
    name: 'Emily',
    email: 'emily@gmail.com',
    phone: '08567238492',
    donationAmount: 100000,
    donationMethod: 'QRIS',
    proof: 'image/proof.png',
    preference: ['Exhibits Acquirements']
  },
  {
    id: 3,
    name: 'David',
    email: 'david@yahoo.com',
    phone: '08123456789',
    donationAmount: 25000,
    donationMethod: 'Supermarket',
    proof: 'image/proof.png',
    preference: ['Exhibits Preservation', 'Projects Funding', 'Exhibits Acquirements']
  },
  {
    id: 4,
    name: 'Sophia',
    email: 'sophia@hotmail.com',
    phone: '08129876543',
    donationAmount: 75000,
    donationMethod: 'Transfer Bank',
    proof: 'image/proof.png',
    preference: []
  },
  {
    id: 5,
    name: 'Benjamin',
    email: 'benjamin@gmail.com',
    phone: '08123456789',
    donationAmount: 50000,
    donationMethod: 'QRIS',
    proof: 'image/proof.png',
    preference: ['Exhibits Preservation']
  },
  {
    id: 6,
    name: 'Ava',
    email: 'ava@yahoo.com',
    phone: '08567890123',
    donationAmount: 100000,
    donationMethod: 'Transfer Bank',
    proof: 'image/proof.png',
    preference: ['Projects Funding', 'Exhibits Acquirements']
  },
  {
    id: 7,
    name: 'Ethan',
    email: 'ethan@hotmail.com',
    phone: '08129876543',
    donationAmount: 25000,
    donationMethod: 'Supermarket',
    proof: 'image/proof.png',
    preference: ['Exhibits Preservation']
  },
  {
    id: 8,
    name: 'Isabella',
    email: 'isabella@gmail.com',
    phone: '08123456789',
    donationAmount: 50000,
    donationMethod: 'QRIS',
    proof: 'image/proof.png',
    preference: ['Exhibits Acquirements']
  },
  {
    id: 9,
    name: 'Mason',
    email: 'mason@yahoo.com',
    phone: '08567890123',
    donationAmount: 75000,
    donationMethod: 'Transfer Bank',
    proof: 'image/proof.png',
    preference: ['Projects Funding']
  },
  {
    id: 10,
    name: 'Charlotte',
    email: 'charlotte@hotmail.com',
    phone: '08129876543',
    donationAmount: 100000,
    donationMethod: 'QRIS',
    proof: 'image/proof.png',
    preference: ['Exhibits Preservation', 'Projects Funding', 'Exhibits Acquirements']
  }
];


function displaySupports() {
  var table = document.getElementById('supportTable').getElementsByTagName('tbody')[0];
  // console.log("hey");
  table.innerHTML = '';

  for (var i = 0; i < supports.length; i++) {
    var row = table.insertRow(i);

    var contactCell = row.insertCell(0);
    contactCell.innerHTML = supports[i].name + '<br>' + supports[i].phone + '<br>' + supports[i].email;

    var amountCell = row.insertCell(1);
    amountCell.innerHTML = supports[i].donationAmount;

    var methodCell = row.insertCell(2);
    methodCell.innerHTML = supports[i].donationMethod;

    var proofCell = row.insertCell(3);
    proofCell.innerHTML = '<a target="_blank" href="' + supports[i].proof + '">View proof</a>';

    var preferenceCell = row.insertCell(4);
    preferenceCell.innerHTML = supports[i].preference.join(', ');
  }
}

function loginPage() {
  const container = document.querySelector("#loginPageContainer");
  
  const signInButton = document.querySelector("#signInButton");
  const signUpButton = document.querySelector("#signUpButton");

  const signInButton2 = document.querySelector("#signInButton2");
  const signUpButton2 = document.querySelector("#signUpButton2");

  signInButton.addEventListener("click", () => {
    container.classList.add("sign-in-mode");
  });

  signUpButton.addEventListener("click", () => {
    container.classList.remove("sign-in-mode");
  });

  signInButton2.addEventListener("click", () => {
    container.classList.add("sign-in-mode2");
  });
  
  signUpButton2.addEventListener("click", () => {
    container.classList.remove("sign-in-mode2");
  });
}

function validateSignUpForm() {
  const name = document.querySelector('input[name="txt"]').value.trim();
  const email = document.querySelector('input[name="email"]').value.trim();
  const password = document.querySelector('input[name="pswd"]').value.trim();

  if (!name || !email || !password) {
    alert('Please fill out all required fields.');
    return false;
  }

  const mailRegex = /\S+@\S+\.\S+/;
  if (!mailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return false;
  }

  if (password.length < 6) {
    alert('Password must be at least 6 characters long.');
    return false;
  }

  return true;
}

function validateSignInForm() {
  const email = document.querySelector('input[name="email"]').value.trim();
  const password = document.querySelector('input[name="pswd"]').value.trim();

  const mailRegex = /\S+@\S+\.\S+/;
  if (!mailRegex.test(email)) {
    alert('Email incorrect');
    return false;
  }

  if (password.length < 6) {
    alert('Password must be at least 6 characters long.');
    return false;
  }

  return true;
}