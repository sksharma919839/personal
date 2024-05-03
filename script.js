let menuList = document.getElementById("list");
menuList.style.maxHeight = "0px";
function menuToggle() {
  if (menuList.style.maxHeight == "0px") {
    menuList.style.maxHeight = "300px";
  } else {
    menuList.style.maxHeight = "0px";
  }
}

var typed = new Typed("#element", {
  strings: ["Web Developer", "Web Designer","Full Stack Web Developer"],
  typeSpeed: 50,
});
var typed2 = new Typed("#element-2", {
  strings: ["Fullstack Web Developer"],
  typeSpeed: 50,
});
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-content");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}
const scriptURL =
  "https://script.google.com/macros/s/AKfycbwvznSswhjsVEB2CubaZoB3IeTwXCG2-TIJpaFvfjNI_Jl-E-ys_1XEN7y0B_0y-LMq8w/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message Sent Successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 2000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
