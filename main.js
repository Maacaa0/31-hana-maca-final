const scrollBtn = document.getElementById("scrollBtn");
const menuDescp = document.getElementById("menuDescp");

let displayWidth = window.innerWidth;

document.addEventListener("DOMContentLoaded", setMultiplier);

function setMultiplier() {
  document.documentElement.style.setProperty("--multiplier", displayWidth / 1000);
}

// scroll to display "scroll to top btn" & sticky menu 
const scrollContainer = () => {
    return document.documentElement || document.body;
  };
  
document.addEventListener("scroll", () => {
  if (window.innerWidth > 1000) {
      if (window.scrollY < 100) {
      menu.classList.remove("sticky-menu");
      menuDescp.style.display = "none";
  } else {
      menu.classList.add("sticky-menu");
      menuDescp.style.display = "flex";
      } 
  }
  //   if (scrollContainer().scrollTop > 900) {
  //   scrollBtn.classList.remove("hidden");
  // } else {
  //   scrollBtn.classList.add("hidden");
  // }
  });

// underlining menu items on scroll

const menu_li_list = document.querySelectorAll(".menu_li");

const scrollPositions = {
  about: document.querySelector("#about").offsetTop,
  history: document.querySelector("#history").offsetTop,
  career: document.querySelector("#career").offsetTop,
  gallery: document.querySelector("#gallery").offsetTop,
  contact: document.querySelector("#footer").offsetTop,
};

menu_li_list.forEach((li) => {
  li.addEventListener("click", () => {
    li.style.transition = "none";
    menu_li_list.forEach((li) => {
      li.classList.remove("menu-transition");
    });
  });
});

function showUnderlineOnScroll() {
  const scrollTop = scrollContainer().scrollTop;
  const windowHeight = window.innerHeight;

  menu_li_list.forEach((li) => {
    li.classList.remove("underline");
    li.classList.add("menu-transition");
  });

  if (scrollTop < scrollPositions.about - windowHeight / 2) {
    // You're at the top of the page
  } else if (scrollTop < scrollPositions.history - windowHeight / 2) {
    menu_li_list[0].classList.add("underline"); // About
  } else if (scrollTop < scrollPositions.career - windowHeight / 2) {
    menu_li_list[1].classList.add("underline"); // History
  } else if (scrollTop < scrollPositions.gallery - windowHeight / 2) {
    menu_li_list[2].classList.add("underline"); // Career
  } else if (scrollTop < scrollPositions.contact - windowHeight / 2) {
    menu_li_list[3].classList.add("underline"); // Gallery
  } else {
    menu_li_list[4].classList.add("underline"); // Contact
  }
}

showUnderlineOnScroll();

document.addEventListener("scroll", showUnderlineOnScroll);


// for showing mobile menu
const hamburgerBtn = document.getElementById("hamburgerBtn");
const menu = document.getElementById("menu");

hamburgerBtn.addEventListener("click", () => {
    hamburgerBtn.classList.toggle("active");
    menu.classList.toggle("shown");
});

// close menu onclick outside
document.addEventListener('click', event => {
  const isClickInside = menu.contains(event.target);
  const btnClick = hamburgerBtn.contains(event.target);
  if (btnClick && hamburgerBtn.classList.contains("active")) {
      hamburgerBtn.classList.add("active");
      menu.classList.add("shown");

  } else if (!isClickInside || event.target === hamburgerBtn) {
    hamburgerBtn.classList.remove("active");
    menu.classList.remove("shown");
  }
});

// swipe to close menu 
let touchStart, touchEnd;

menu.addEventListener(
  'touchstart',
  e => (touchStart = e.targetTouches[0].clientX)
);

menu.addEventListener(
  'touchmove',
  e => (touchEnd = e.targetTouches[0].clientX)
);

menu.addEventListener('touchend', e => {
  if (touchEnd - touchStart > 45) {
    hamburgerBtn.classList.remove("active");
    menu.classList.remove('shown');
  }
})
