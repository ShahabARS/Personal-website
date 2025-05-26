AOS.init();
document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll(".menu__item");
  const sectionsWithId = Array.from(
    document.querySelectorAll("main > section[id]")
  );
  const navBtn = document.querySelector(".nav-btn");
  const menu = document.querySelector(".menu");
  const menuBgCover = document.querySelector(".cover");
  const resumeMenuItems = document.querySelectorAll(".resume-menu__item");
  const resumeTable = document.querySelectorAll(".resume-table");
  const portfolioListItems = document.querySelectorAll(".portfolio-list__item");
  const portfolioContent = document.querySelectorAll(".portfolio-content");
  const darkModeBtn = document.querySelector(".dark-mode-btn");
  const darkModeIcon = document.querySelector(".dark-mode-btn__icon");

  darkModeBtn.addEventListener("click", () => {
    if (!document.documentElement.classList.contains("dark-theme")) {
      document.documentElement.classList.add("dark-theme");
      darkModeIcon.innerHTML = `<svg class="dark-mode-btn__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56"><path d="M30.04 4.61c0-1.102-.938-2.04-2.04-2.04s-2.039.938-2.039 2.04v4.92c0 1.102.938 2.04 2.04 2.04c1.1 0 2.038-.938 2.038-2.04Zm9.538 8.929c-.773.797-.773 2.11 0 2.883c.797.797 2.086.82 2.906 0l3.493-3.492a2.065 2.065 0 0 0 0-2.907c-.774-.773-2.086-.773-2.883 0Zm-26.062 2.883c.773.797 2.086.797 2.882 0c.774-.75.774-2.11.024-2.883l-3.492-3.516c-.75-.75-2.086-.773-2.883 0c-.774.774-.774 2.11-.024 2.883ZM28 16.047c-6.539 0-11.953 5.414-11.953 11.953S21.46 39.977 28 39.977c6.516 0 11.93-5.438 11.93-11.977S34.516 16.047 28 16.047m23.32 13.992c1.102 0 2.04-.937 2.04-2.039s-.938-2.04-2.04-2.04h-4.898c-1.102 0-2.04.938-2.04 2.04s.938 2.039 2.04 2.039ZM4.68 25.961c-1.102 0-2.04.937-2.04 2.039s.938 2.039 2.04 2.039h4.898c1.102 0 2.04-.937 2.04-2.039s-.938-2.04-2.04-2.04ZM42.46 39.6a2.08 2.08 0 0 0-2.883 0c-.773.774-.773 2.087 0 2.883L43.094 46c.797.773 2.11.75 2.883-.023c.797-.774.797-2.086 0-2.883Zm-32.437 3.47c-.797.773-.797 2.109-.024 2.882c.774.774 2.11.797 2.906.024l3.492-3.493c.774-.773.774-2.086.024-2.882c-.774-.774-2.11-.774-2.906 0Zm20.015 3.398c0-1.102-.937-2.04-2.039-2.04s-2.039.938-2.039 2.04v4.922c0 1.101.938 2.039 2.04 2.039c1.1 0 2.038-.938 2.038-2.04Z" stroke-width="1.5" stroke="currentColor" /></svg>`;
    } else {
      document.documentElement.classList.remove("dark-theme");
      darkModeIcon.innerHTML = `<svg class="dark-mode-btn__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9.272 2.406a1 1 0 0 0-1.23-1.355C6.59 1.535 5.432 2.488 4.37 3.55a11.4 11.4 0 0 0 0 16.182c4.518 4.519 11.51 4.261 15.976-.205c1.062-1.062 2.014-2.22 2.498-3.673A1 1 0 0 0 21.55 14.6c-3.59 1.322-7.675.734-10.433-2.025C8.35 9.808 7.788 5.744 9.272 2.406" stroke-width="0.5" stroke="currentColor" /></svg>`;
    }
  });

  portfolioListItems.forEach((item) => {
    item.addEventListener("click", () => {
      portfolioListItems.forEach((item) =>
        item.classList.remove("portfolio-list__item--active")
      );
      item.classList.add("portfolio-list__item--active");
      let contentShow = item.getAttribute("data-content-id");
      portfolioContent.forEach((content) => {
        content.classList.remove("portfolio-content--show");
        if (content.getAttribute("id") === contentShow) {
          content.classList.add("portfolio-content--show");
        }
      });
    });
  });

  resumeMenuItems.forEach((item) => {
    item.addEventListener("click", () => {
      resumeMenuItems.forEach((item) =>
        item.classList.remove("resume-menu__item--active")
      );
      item.classList.add("resume-menu__item--active");
      let tableShow = item.getAttribute("data-content-id");
      resumeTable.forEach((table) => {
        table.classList.remove("resume-table--show");
        if (table.getAttribute("id") === tableShow) {
          table.classList.add("resume-table--show");
        }
      });

      const target = document.querySelector(".resume-table__side");
      target.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    });
  });

  navBtn.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("nav-btn--opened");
    e.currentTarget.setAttribute(
      "aria-expanded",
      e.currentTarget.classList.contains("opened")
    );
    menu.classList.toggle("menu--active");
    menuBgCover.classList.toggle("cover--show");
  });

  menuItems[0].addEventListener("click", (e) => {
    e.preventDefault();
    document.documentElement.scrollTo(0, 0);
    menuItems[0].classList.add("menu__item--active");
  });

  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      menuItems.forEach(() => item.classList.remove("menu__item--active"));
      item.classList.add("menu__item--active");
      let target = document.querySelector(item.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  const menuMap = {};
  menuItems.forEach((item) => {
    const link = item.querySelector("a");
    if (
      link &&
      link.getAttribute("href") &&
      link.getAttribute("href").startsWith("#")
    ) {
      const id = link.getAttribute("href").replace("#", "");
      menuMap[id] = item;
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      let visibleSection = null;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visibleSection = entry.target;
        }
      });
      if (visibleSection) {
        menuItems.forEach((item) =>
          item.classList.remove("menu__item--active")
        );
        const id = visibleSection.getAttribute("id");
        if (menuMap[id]) {
          menuMap[id].classList.add("menu__item--active");
        }
      }
    },
    {
      threshold: 0.25,
    }
  );

  sectionsWithId.forEach((section) => observer.observe(section));

  // ? /////// ? //
  // ? Swiper ? //
  // ? ///// ? //
  const swiperOptions = {
    keyboard: {
      enabled: true,
    },
    freeMode: {
      enabled: true,
      minimumVelocity: 0.1,
      momentum: true,
      momentumBounce: true,
      momentumBounceRatio: 1,
      momentumRatio: 1,
      momentumVelocityRatio: 1,
      sticky: false,
    },
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
        spaceBetween: 7.5,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
  };
  for (let i = 0; i <= 6; i++) {
    new Swiper(`.swiper${i}`, swiperOptions);
  }
});
