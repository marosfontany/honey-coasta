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

//code made by help from https://www.w3schools.com/howto/howto_js_read_more.asp (vievew on: 01/06/2022) //
function myFunction(dotsn,moren,btnTextn) {

  var dots = document.getElementById(dotsn);
  var moreText = document.getElementById(moren);
  var btnText = document.getElementById(btnTextn);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } 
  
  else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}


