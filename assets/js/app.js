const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// Nav hamburgerburger selections

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
    if (ul.classList.contains("show")){
      ul.classList.toggle("hide");
    }
    else {
      ul.classList.toggle("show");
    }
});

// Close hamburger menu when a link is clicked

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

let textPosition = 0;
// Type effect
displayName = () => {
  const personName = 'Nicholas Tseng';
  const speed = 75;
  const personNameElement = document.querySelector('#name');

  personNameElement.innerHTML = personName.substring(0, textPosition);

  if (textPosition++ !== personName.length){
    setTimeout(displayName, speed);
  }
}

window.addEventListener('load', displayName);
