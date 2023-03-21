const posts = [
    {
        title: "My First Blog Post",
        content:"Roxie C. Laybourne, whose scientific investigations into bird collisions with airplanes helped start forensic ornithology and enabled engineers to develop aircraft capable of withstanding such accidents, died on Aug. 7 at her farm in Manassas, Va. She was 92.\n\n\n\nIn 1960, when a plane crashed taking off from Logan Airport in Boston, killing all 62 people aboard, Ms. Laybourne, then a scientist at the Smithsonian's National Museum of Natural History, helped investigators conclude that the cause was a flock of starlings caught in one of its engines.\n\n\n\nHaving only charred remains to work with, she developed a novel way to remove oil and gasoline from bits of feathers while keeping them suitable for microscopic examination. Using a microscope, she could then pinpoint minute structural characteristics and identify the bird species or family based on the feathers.\n\n\n\nOver the next decades, Ms. Laybourne helped identify thousands of birds involved in collisions with commercial and military aircraft. Her work gave plane manufacturers information for designing engines that could continue to fly after ingesting the birds, and it helped ornithologists create bird management programs to prevent flocks from gathering near airports.",
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

// function renderPosts() {
//     const postContainer = document.querySelector('#post-container');
//     const postTemplate = document.querySelector('#post-template');

//     for (let i = 0; i < posts.length; i++) {
//         const postClone = postTemplate.content.cloneNode(true);
//         const postImage = postClone.querySelector('.post-image');
//         const postTitle = postClone.querySelector('.post-title');
//         const postDate = postClone.querySelector('.post-date');
//         const postContent = postClone.querySelector('.post-content');
//         const postLink = postClone.querySelector('.post-link');

//         postImage.src = posts[i].image;
//         postTitle.textContent = posts[i].title;
//         postDate.textContent = formatDate(posts[i].date);
//         postContent.textContent = posts[i].content;
//         postLink.href = posts[i].url;

//         postContainer.appendChild(postClone);
//     }
// }

// function renderPost(id) {
//     const postContainer = document.querySelector('#post-container');
//     const postTemplate = document.querySelector('#post-template');

//     const postClone = postTemplate.content.cloneNode(true);
//     const postImage = postClone.querySelector('.post-image');
//     const postTitle = postClone.querySelector('.post-title');
//     const postDate = postClone.querySelector('.post-date');
//     const postContent = postClone.querySelector('.post-content');
//     // const postLink = postClone.querySelector('.post-link');
    
//     postImage.src = posts[id].image;
//     postTitle.textContent = posts[id].title;
//     postDate.textContent = formatDate(posts[id].date);
//     postContent.textContent = posts[id].content;
//     // postLink.href = posts[id].url;
//     postContainer.appendChild(postClone);
// }

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
      postContent.textContent = posts[i].content.substring(0, 150) + "...";
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
    const post = postClone.querySelector('.post');
    const postImage = postClone.querySelector('.post-image');
    const postTitle = postClone.querySelector('.post-title');
    const postDate = postClone.querySelector('.post-date');
    const postContent = postClone.querySelector('.post-content');
    const postLink = postClone.querySelector('.post-link');
    
    postImage.src = posts[id].image;
    postTitle.textContent = posts[id].title;
    postDate.textContent = formatDate(posts[id].date);
    postContent.textContent = posts[id].content;

    postLink.textContent = "Back to Learn"; // Change the text of the link
    postLink.addEventListener('click', function() {
      location.reload(); // Reload the page
    });

    postLink.classList.add('blogposts-back-to-learn');
    // postLink.classList.add('blogposts-changelightgreen');
    postTitle.classList.add('blogposts-changegreen');
    postDate.classList.add('blogposts-changegreen');
    postContent.classList.add('blogposts-changegreen');
    postContent.classList.add('blogposts-changegreen');

    post.classList.add('blogposts-changepost');
    postContainer.appendChild(postClone);
}
