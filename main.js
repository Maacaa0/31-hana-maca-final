const scrollBtn = document.getElementById("scrollBtn");
const dynamicMenu = document.getElementById("dynamic_menu");

// scroll to display scroll to top btn
const scrollContainer = () => {
    return document.documentElement || document.body;
  };
  
  document.addEventListener("scroll", () => {
    // window.innerWidth > 1000 ?  ♦♦♦♦♦ ZMĚNĚNO ♦♦♦♦♦♦       dont show dynamic menu on smaller screen
    if (scrollContainer().scrollTop > 900 && window.innerWidth > 1000) {
      dynamicMenu.classList.remove("hidden")
    } else {
      dynamicMenu.classList.add("hidden")
    }

    if (scrollContainer().scrollTop > 900) {
      scrollBtn.classList.remove("hidden");
    } else {
      scrollBtn.classList.add("hidden");
    }
  });

  // ♦♦♦♦♦♦♦♦♦ ♦♦♦♦♦♦♦♦♦ ♦♦♦♦♦♦♦♦♦ ♦♦♦♦♦♦♦♦♦

  // for showing mobile menu
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const menu = document.getElementById("menu");

  hamburgerBtn.addEventListener("click", () => {
    if (hamburgerBtn.classList.contains("active")) {
      hamburgerBtn.classList.remove("active");
      menu.classList.remove("shown");
    }
    else {
      hamburgerBtn.classList.add("active");
      menu.classList.add("shown");
    }
  });

  // ♦♦♦♦♦♦♦♦♦ ♦♦♦♦♦♦♦♦♦ ♦♦♦♦♦♦♦♦♦ ♦♦♦♦♦♦♦♦♦

