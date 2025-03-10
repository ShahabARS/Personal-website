AOS.init();
const navToggleIcon = document.querySelector(".nav__toggle-icon");
const menu = document.querySelector(".menu");
const cover = document.querySelector(".cover");
const resumeMenuItems = document.querySelectorAll(".resume-menu__item");
const portfolioListItems = document.querySelectorAll(".portfolio-list__item");
const changeThemeBtn = document.querySelector(".dark-mode__btn");

navToggleIcon.addEventListener("click", function () {
  this.classList.toggle("nav__toggle-icon--active");
  menu.classList.toggle("menu--active");
  cover.classList.toggle("cover--show");
});
resumeMenuItems.forEach((resumeMenuItem) => {
  resumeMenuItem.addEventListener("click", function () {
    document
      .querySelector(".resume-menu__item--active")
      .classList.remove("resume-menu__item--active");
    document
      .querySelector(".resume-table--show")
      .classList.remove("resume-table--show");
    this.classList.add("resume-menu__item--active");
    let contentId = this.getAttribute("data-content-id");
    document.querySelector(contentId).classList.add("resume-table--show");
  });
});

portfolioListItems.forEach((portfolioListItem) => {
  portfolioListItem.addEventListener("click", function () {
    // Remove 'portfolio-list__item--active' class from all items
    document
      .querySelectorAll(".portfolio-list__item--active")
      .forEach((item) => {
        item.classList.remove("portfolio-list__item--active");
      });
    // Remove 'portfolio-content--show' class from all content
    document.querySelectorAll(".portfolio-content--show").forEach((content) => {
      content.classList.remove("portfolio-content--show");
    });
    // Add 'portfolio-list__item--active' class to clicked item
    this.classList.add("portfolio-list__item--active");
    // Get data-content-id attribute value
    let contentId = this.getAttribute("data-content-id");
    // Add 'portfolio-content--show' class to corresponding content
    document.querySelector(contentId).classList.add("portfolio-content--show");
  });
});

changeThemeBtn.addEventListener("click", function () {
  const isDarkTheme = document.documentElement.classList.toggle("dark-theme");
  console.log(isDarkTheme);
  if (!isDarkTheme) {
    this.innerHTML = `<svg class="dark-mode__btn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" /> </svg>`;
  } else {
    this.innerHTML = `<svg class="dark-mode__btn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
                                clip-rule="evenodd" />
                        </svg>`;
  }
});

const swiperOptions = {
  // If we need pagination
  loop: true,
  keyboard: {
    enabled: true,
  },
  autoplay: {
    delay: 2500,
  },
  freeMode: {
    enabled: true,
    minimumVelocity: 0.02,
    momentum: true,
    momentumBounce: true,
    momentumBounceRatio: 1,
    momentumRatio: 1,
    momentumVelocityRatio: 1,
    sticky: false,
  },
  // effect: "coverflow",
  // grabCursor: true,
  // centeredSlides: true,
  // slidesPerView: "auto",
  // coverflowEffect: {
  //     rotate: 50,
  //     stretch: 0,
  //     depth: 100,
  //     modifier: 1,
  //     slideShadows: true,
  // },
  breakpoints: {
    280: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPreView: 3,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
};
const swiper0 = new Swiper(".swiper0", swiperOptions);
const swiper1 = new Swiper(".swiper1", swiperOptions);
const swiper2 = new Swiper(".swiper2", swiperOptions);
const swiper3 = new Swiper(".swiper3", swiperOptions);
const swiper4 = new Swiper(".swiper4", swiperOptions);
const swiper5 = new Swiper(".swiper5", swiperOptions);
const swiper6 = new Swiper(".swiper6", swiperOptions);
