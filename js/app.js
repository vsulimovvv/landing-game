const select = document.querySelector('.tools__select');

select.addEventListener('click', (e) => {
  select.classList.toggle('active');
});

const header = document.querySelector('.header');
const menuBtn = document.querySelector('.hamburger');

menuBtn.addEventListener('click', (e) => {
  header.classList.toggle('active');
});

const accodrdion = () => {
  const featuresItems = document.querySelectorAll('.features__item');
  featuresItems.forEach((item) => {
    item.addEventListener('click', (e) => {
      removeActive();
      item.classList.add('active');
    });
  });
  function removeActive() {
    featuresItems.forEach((item) => {
      item.classList.remove('active');
    });
  }
};

accodrdion();

const slider = () => {
  const slides = document.querySelectorAll('.description__slider-item');
  let currentSlide = 0;
  // let z = 1;
  // let interval;

  function goSlide() {
    slides[currentSlide].classList.add('active');
    // slides[currentSlide].style.zIndex = 4000 + z;
    // slides[currentSlide].style.left = 0;
    // slides[currentSlide].style.transform = 'scale(1)';

    currentSlide++;
    // z++;
    console.log(currentSlide);

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
  }

  // setInterval(goSlide, 2000);
};

slider();
