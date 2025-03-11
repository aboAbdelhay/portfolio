// to go to top when make reload or refresh
window.addEventListener("load", function () {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 0);
});

//to make wow work
new WOW().init();
// -------------------
// animation to change the words in home
// -------------------
let typed = new Typed("#element", {
  strings: [
    " I'm Ahmed Sayed Abdelhay^1000 ",
    " Full-Stack Web Developer^1000 ",
    " Mern Stack Expert^1000 ",
    "Framework React.js/Next.js^1000 ",
  ],
  typeSpeed: 30,
  backSpeed: 30,
  loop: true,
});
//  --------------------
// make btn in bottom when clink scroll to top navbar
document.addEventListener("DOMContentLoaded", function () {
  const up = document.getElementById("up");
  const homeSection = document.querySelector("#home"); // Assuming the home section has an id="home"

  window.addEventListener("scroll", () => {
    // Get the bottom position of the home section
    const homeSectionBottom = homeSection.offsetTop + homeSection.offsetHeight;

    // Show the "up" button after scrolling past the home section
    if (window.scrollY > homeSectionBottom) {
      up.classList.remove("hidden");
    } else {
      up.classList.add("hidden");
    }
  });

  // Scroll to the top when the button is clicked
  up.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });
});

// -----------------------
// code when to scroll add class active
// --------------------------
window.addEventListener("scroll", function () {
  let sections = document.querySelectorAll("section");
  let navbarLinks = document.querySelectorAll("#navbar .navbar-nav .nav-link");

  let currentIndex = -1;

  sections.forEach(function (section, index) {
    let sectionTop = section.offsetTop;
    let sectionBottom = sectionTop + section.clientHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
      currentIndex = index;
    }
  });

  navbarLinks.forEach(function (link, index) {
    if (index === currentIndex) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

// ------------------
// when click in li ul be display none
//---------------
document.addEventListener("DOMContentLoaded", function () {
  const navbarLinks = document.querySelectorAll(
    "#navbar .navbar-nav .nav-link"
  );
  const ul = document.querySelector("#navbarSupportedContent");
  // Adding click event listeners to each navbar link
  navbarLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // Toggle or remove the 'show' class to close the dropdown/menu
      ul.classList.remove("show");
    });
  });
});

// ////////////////////
// navbar hidden when scroll and show when go to 2 section
// ////////////////////
window.addEventListener("scroll", function () {
  const home = document.getElementById("home");
  const navbar = document.getElementById("navbar");
  const scrollY = window.scrollY;
  const homeBottom = home.offsetTop + window.innerHeight;

  if (scrollY < 10) {
    navbar.classList.remove("hid", "scrolledBlack");
  } else if (scrollY >= 10 && scrollY < homeBottom) {
    navbar.classList.add("hid");
    navbar.classList.remove("scrolledBlack");
  } else if (scrollY >= homeBottom) {
    navbar.classList.remove("hid");
    navbar.classList.add("scrolledBlack");
  } else {
    navbar.classList.remove("scrolledBlack");
  }
});
