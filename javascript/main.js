

// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-200px";
  }

  console.log('Screen Scroll Action Done !')
  console.log(screen.width);
}

// RIGHT Navbar

const rightNav = document.getElementById('rightNav');

if (rightNav != null) {
  rightNav.addEventListener("click", e => {
    document.querySelector(".navbar-right").style.display = 'block';
    console.log('Right Navbar Open');
  });
}



rightNavClose = document.getElementById('rightNavClose');
if (rightNavClose != null) {
  rightNavClose.addEventListener("click", e => {
    document.querySelector(".navbar-right").style.display = 'none';
    console.log('Right Navbar Close');
  });
}


// MOBILE NAVBAR

mobNav = document.getElementById('mobileNav');
mobNav.addEventListener("click", e => {
  document.querySelector(".mobile-navlinks").style.display = 'block';
  document.querySelector(".mobile-navbar").style.display = 'none';
  console.log('Mobile Navbar Open');
});

mobNavClose = document.getElementById('mobNavClose');
mobNavClose.addEventListener("click", e => {
  document.querySelector(".mobile-navlinks").style.display = 'none';
  document.querySelector(".mobile-navbar").style.display = 'flex';
  console.log('Mobile Navbar Close');
});




// CAROUSEL

// Get Main of Carousel
const carouselTrack = document.querySelector('.carousel-track');

const slides = Array.from(carouselTrack.children)

// Get slide size
const slideSize = slides[0].getBoundingClientRect();
const slideWidth = screen.width;

const slidePosition = (slides, index) => {
  slides.style.left = slideWidth * index + 'px';
}

slides.forEach(slidePosition);

// CAROUSEL FUNCTION

// Slide Effect
const moveToSlide = (carouselTrack, activeSlide, targetSlide) => {

  carouselTrack.style.transform = 'translateX(-' + targetSlide.style.left + ')';


  activeSlide.classList.remove('carousel-active-slide');
  targetSlide.classList.add('carousel-active-slide');

}

// Left right btnd
const hideLeftRightBtn = (slides, leftBtn, rightBtn, targetIndex) => {
  if (targetIndex === 0) {
    leftBtn.style.display = 'none';
    rightBtn.style.display = 'block';

  } else if (targetIndex === slides.length - 1) {
    rightBtn.style.display = 'none';
    leftBtn.style.display = 'block';
  } else {
    rightBtn.style.display = 'block';
    leftBtn.style.display = 'block';
  }
}

// Update Indicators
const updateIndicators = (activeIndicator, indicatorDot) => {
  activeIndicator.classList.remove('indicator-active');
  indicatorDot.classList.add('indicator-active');
}


// Get Buttons
const leftBtn = document.querySelector('.left-arrow');
const rightBtn = document.querySelector('.right-arrow');

// Left Right Buttons

// Right Click
rightBtn.addEventListener('click', e => {

  // selecting current active slide
  const activeSlide = carouselTrack.querySelector('.carousel-active-slide');

  // selecting next slide
  const nextSlide = activeSlide.nextElementSibling;

  moveToSlide(carouselTrack, activeSlide, nextSlide);

  // indicators
  const activeIndicator = indicators.querySelector('.indicator-active');
  const nextIndicator = activeIndicator.nextElementSibling;

  updateIndicators(activeIndicator, nextIndicator);

  const nextIndex = slides.findIndex(slide => slide === nextSlide);
  hideLeftRightBtn(slides, leftBtn, rightBtn, nextIndex);

});

// Left Click
leftBtn.addEventListener('click', e => {

  // selecting current active slide
  const activeSlide = carouselTrack.querySelector('.carousel-active-slide');

  // selecting next slide
  const prevSlide = activeSlide.previousElementSibling;

  moveToSlide(carouselTrack, activeSlide, prevSlide);

  // indicators
  const activeIndicator = indicators.querySelector('.indicator-active');
  const nextIndicator = activeIndicator.previousElementSibling;

  updateIndicators(activeIndicator, nextIndicator);

  const nextIndex = slides.findIndex(slide => slide === prevSlide);
  hideLeftRightBtn(slides, leftBtn, rightBtn, nextIndex);

});

// slide indicator
const indicators = document.querySelector('.indicators');
const indicatorsBtn = Array.from(indicators.children);




indicators.addEventListener('click', e => {

  const indicatorDot = e.target.closest('button');

  const activeSlide = carouselTrack.querySelector('.carousel-active-slide');
  const activeIndicator = indicators.querySelector('.indicator-active');
  const targetIndex = indicatorsBtn.findIndex(button => button === indicatorDot);

  const targetSlide = slides[targetIndex];

  moveToSlide(carouselTrack, activeSlide, targetSlide);

  updateIndicators(activeIndicator, indicatorDot);

  hideLeftRightBtn(slides, leftBtn, rightBtn, targetIndex);


});


