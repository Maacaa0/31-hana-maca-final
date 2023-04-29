const scrollBtn = document.getElementById("scrollBtn");
const dynamicMenu = document.getElementById("dynamic_menu");

// scroll to display scroll to top btn
const scrollContainer = () => {
    return document.documentElement || document.body;
  };
  
  document.addEventListener("scroll", () => {
    // setTimeout(() => {
    //   stickyMenu.classList.add("hidden");    keeps setting timeout 
    // }, "5000");
    // clearTimeout();
    
    if (scrollContainer().scrollTop > 900) {
      scrollBtn.classList.remove("hidden");
      dynamicMenu.classList.remove("hidden")
    } else {
      scrollBtn.classList.add("hidden");
      dynamicMenu.classList.add("hidden")
    }
  });