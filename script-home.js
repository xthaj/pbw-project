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



// const mediaContainer = document.querySelector('.media');
// const nextButton = document.querySelector('.next-button');
// const prevButton = document.querySelector('.prev-button');

// const mediaCount = mediaContainer.children.length;
// console.log('media count: ', mediaCount);
// const columnWidth = mediaContainer.children[0].getBoundingClientRect().width;
// console.log('width: ', columnWidth);
// let currentIndex = 0;

// // console.log('Current Index:', currentIndex);

// function showCurrentIndex() {
//   console.log('Current Index:', currentIndex);
// }

// function showSlide() {
//   mediaContainer.style.transform = `translateX(-${currentIndex * columnWidth}px)`;
// }

// function prevSlide() {
//   currentIndex--;
//   if (currentIndex < 0) {
//     currentIndex = mediaCount - 1;
//   }
//   showSlide();
//   showCurrentIndex();
// }

// function nextSlide() {
//   currentIndex += 1;
//   if (currentIndex >= mediaCount) {
//     currentIndex = 0;
//   }
//   showSlide();
//   showCurrentIndex();
// }

// prevButton.addEventListener('click', prevSlide);
// nextButton.addEventListener('click', nextSlide);