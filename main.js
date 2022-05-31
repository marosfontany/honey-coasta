const navSlide = () => {
    const pop = document.querySelector(".menu");
    const nav = document.querySelector(".mainmenu");
    const mainmenu = document.querySelectorAll(".mainmenu li");
  
    pop.addEventListener("click",() => {
      nav.classList.toggle("nav-active");
      pop.classList.toggle("toggle");
    });
  
  
}

const navSlidee = () => {
  const pop = document.querySelector(".menu-button");
  const nav = document.querySelector(".mainmenu");
  const mainmenu = document.querySelectorAll(".mainmenu li");

  pop.addEventListener("click",() => {
    nav.classList.toggle("nav-active");
    pop.classList.toggle("toggle");
  });


}

const navSlideee = () => {
    const pop = document.querySelector(".close-button");
    const nav = document.querySelector(".mainmenu");
    const mainmenu = document.querySelectorAll(".mainmenu li");
  
    pop.addEventListener("click",() => {
      nav.classList.toggle("nav-active");
      pop.classList.toggle("toggle");
    });
  
  
}

navSlide();
navSlidee();
navSlideee();