// sticky nav
const nav = document.querySelector('nav');
const navOffsetTop = nav.offsetTop;

function fixNavbar() {
  if (window.pageYOffset >= navOffsetTop) {
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

var visitors = [
  //these data are ai-generated.
  {
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    phone: '123-456-7890',
    destination: 'Art & Design Museum',
    visitDate: '2023-04-10',
    visitTime: '14:00',
    groupSize: 4,
    reasonForVisit: 'leisure',
    additionalRequests: 'none'
  },
  {
    name: 'Jane Smith',
    email: 'janesmith@gmail.com',
    phone: '555-555-5555',
    destination: 'History & Culture Museum',
    visitDate: '2023-04-12',
    visitTime: '10:00',
    groupSize: 2,
    reasonForVisit: 'education',
    additionalRequests: 'wheelchair accessible'
  },
  {
    name: 'Mark Johnson',
    email: 'markjohnson@gmail.com',
    phone: '444-444-4444',
    destination: 'Science & Conservation Museum',
    visitDate: '2023-04-15',
    visitTime: '11:00',
    groupSize: 3,
    reasonForVisit: 'education',
    additionalRequests: 'guided tour'
  },
  {
    name: 'Lisa Lee',
    email: 'lisalee@gmail.com',
    phone: '777-777-7777',
    destination: 'Art & Design Museum',
    visitDate: '2023-04-17',
    visitTime: '15:00',
    groupSize: 2,
    reasonForVisit: 'leisure',
    additionalRequests: 'audio guide'
  },
  {
    name: 'David Wang',
    email: 'davidwang@gmail.com',
    phone: '888-888-8888',
    destination: 'History & Culture Museum',
    visitDate: '2023-04-19',
    visitTime: '12:00',
    groupSize: 5,
    reasonForVisit: 'leisure',
    additionalRequests: 'none'
  },
  {
    name: 'Sarah Kim',
    email: 'sarahkim@gmail.com',
    phone: '555-123-4567',
    destination: 'Science & Conservation Museum',
    visitDate: '2023-04-22',
    visitTime: '16:00',
    groupSize: 1,
    reasonForVisit: 'education',
    additionalRequests: 'guided tour'
  },
  {
    name: 'Michael Chen',
    email: 'michaelchen@gmail.com',
    phone: '666-666-6666',
    destination: 'Art & Design Museum',
    visitDate: '2023-04-24',
    visitTime: '13:00',
    groupSize: 2,
    reasonForVisit: 'leisure',
    additionalRequests: 'audio guide'
  },
  {
    name: 'Karen Davis',
    email: 'karendavis@gmail.com',
    phone: '777-777-7777',
    destination: 'History & Culture Museum',
    visitDate: '2023-04-26',
    visitTime: '10:00',
    groupSize: 4,
    reasonForVisit: 'leisure',
    additionalRequests: 'none'
  },
  {
    name: 'Tom Wilson',
    email: 'tomwilson@gmail.com',
    phone: '888-888-8888',
    destination: 'Art & Design Museum',
    visitDate: '2023-04-29',
    visitTime: '14:00',
    groupSize: 1,
    reasonForVisit: 'leisure',
    additionalRequests: 'none'
  },
  {
    name: 'Emily Johnson',
    email: 'emilyjohnson@gmail.com',
    phone: '333-333-3333',
    destination: 'History & Culture Museum',
    visitDate: '2023-05-01',
    visitTime: '11:00',
    groupSize: 3,
    reasonForVisit: 'education',
    additionalRequests: 'guided tour'
  }
];

// Function to display visitor information in the table
function displayVisitors() {
  var table = document.getElementById('visitorTable').getElementsByTagName('tbody')[0];

  // Clear existing rows from the table
  table.innerHTML = '';

  // Loop through visitors array and add rows to the table
  for (var i = 0; i < visitors.length; i++) {
    var row = table.insertRow(i);

    // Create cell for contact person
    var contactCell = row.insertCell(0);
    contactCell.innerHTML = visitors[i].name + '<br>' + visitors[i].phone + '<br>' + visitors[i].email;

    // Create cells for other visitor information
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

function renderPosts() {
  const postContainer = document.querySelector('#post-container');
  const postTemplate = document.querySelector('#post-template');

  for (let i = 0; i < posts.length; i++) {
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
}

function renderPost(id) {
  const postContainer = document.querySelector('#post-container');
  const postTemplate = document.querySelector('#post-template');
  
  // Clear the post container before rendering the new post
  postContainer.innerHTML = "";

  const postClone = postTemplate.content.cloneNode(true);
  // const pageTitle = postClone.querySelector('.title');
  const post = postClone.querySelector('.post');
  const postImage = postClone.querySelector('.post-image');
  const postTitle = postClone.querySelector('.post-title');
  const postDate = postClone.querySelector('.post-date');
  const postContent = postClone.querySelector('.post-content');
  const postLink = postClone.querySelector('.post-link');
  // postClone.removeChild(pageTitle);
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




