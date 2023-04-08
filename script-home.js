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
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))

// dropdown code

document.addEventListener("click", e => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]")
  if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return

  let currentDropdown
  if (isDropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown]")
    currentDropdown.classList.toggle("active")
  }

  document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
    if (dropdown === currentDropdown) return
    dropdown.classList.remove("active")
  })
})

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

