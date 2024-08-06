new WOW().init();
// -------------------
// animation to change the words in home
// -------------------
var typed = new Typed("#element", {
  strings: [" I'm Ahmed Sayed Abdelhay^1000 ", " Front End Developer^1000 ", "Framework React.js/Next.js^1000 "],
  typeSpeed: 30,
  backSpeed: 30,
  loop: true,
});
//  --------------------
// make btn in bottom when clink scroll to top navbar
const up = document.getElementById("up");

window.addEventListener("scroll", () => {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    up.classList.remove("hidden");
  } else {
    up.classList.add("hidden");
  }
});
// Scroll to top when button is clicked
up.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// -----------------------
// code when to scroll add class active
// --------------------------
window.addEventListener("scroll", function () {
  var sections = document.querySelectorAll(".nvscroll");
  var navbarLinks = document.querySelectorAll("#navbar .navbar-nav .nav-link ");

  sections.forEach(function (section, index) {
    var sectionTop = section.offsetTop;
    var sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      navbarLinks.forEach(function (navbarLink) {
        navbarLink.classList.remove("active");
      });
      navbarLinks[index].classList.add("active");
    }
  });
});
// ------------------
// when click in li ul be display none
//---------------
document.addEventListener("DOMContentLoaded", function () {
  var navbarLinks = document.querySelectorAll("#navbar .navbar-nav .nav-link ");
  const ul = document.querySelector("#navbarSupportedContent");
  const close = document.querySelector(".close");

  ul.querySelectorAll("#navbar .navbar-nav .nav-link").forEach((link) => {
    link.addEventListener("click", function () {
      ul.classList.remove("show");
      console.log("dddddddd");
    });
  });
});

// ////////////////////
// navbar hidden when scroll and show when go to 2 section
// ////////////////////
window.addEventListener("scroll", function () {
  var home = document.getElementById("home");
  var navbar = document.getElementById("navbar");
  console.log(window.scrollY + "scrollY");
  console.log(home.offsetTop + "offsetTop");
  console.log(window.innerHeight + "innerHeight");
  if (window.scrollY < 10) {
    navbar.classList.remove("hid");
    navbar.classList.remove("scrolledBlack");
    //   } else if (window.scrollY < 700 && window.scrollY > 10) {
  } else if (
    window.scrollY < home.offsetTop + window.innerHeight &&
    window.scrollY > 10
  ) {
    navbar.classList.add("hid");
  } else if (window.scrollY > home.offsetTop + window.innerHeight) {
    navbar.classList.remove("hid");
    navbar.classList.add("scrolledBlack");
  } else {
    navbar.classList.remove("scrolledBlack");
  }
});
