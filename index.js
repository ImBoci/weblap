/* Loading Page */

var myVar;
var myVar2;
var page = document.getElementById("loading");

function myFunction() {
  myVar = setTimeout(hidePage, 2030);
  myVar2 = setTimeout(delPage, 2300);
}

function hidePage() {
  page.style.opacity = 0;
}

function delPage() {
  page.style.display = "none";
}

/* Visszajelzés beküldés */

const ratingEls = document.querySelectorAll(".rating");
const btnEl = document.getElementById("btn");
const containerEl = document.getElementById("container");

let selectedRating = "";

ratingEls.forEach((ratingEl) => {
  ratingEl.addEventListener("click", (event) => {
    removeActive();
    selectedRating =
      event.target.innerText || event.target.parentNode.innerText;
    event.target.classList.add("active");
    event.target.parentNode.classList.add("active");
  });
});

btnEl.addEventListener("click", () => {
  if (selectedRating !== "") {
    containerEl.innerHTML = `
    <strong>Köszönöm!</strong>
    <br>
    <br>
    <strong>A visszajelzésed: ${selectedRating}</strong>
    <br>
    <p>Igyekszem a visszajelzések alapján fejlődni!</p>
    `;
  }
});

function removeActive() {
  ratingEls.forEach((ratingEl) => {
    ratingEl.classList.remove("active");
  });
}
