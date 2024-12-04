
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("hamburger");
  const nav = document.getElementById("nav");

  menuToggle.addEventListener("click", function () {
    nav.classList.toggle("megjelen");
  });
});





document.getElementById("filter_alkalmaz").addEventListener("click", function () {
  const category = document.getElementById("gyarto").value;
  const maxPrice = document.getElementById("ar").value;
  const products = document.querySelectorAll(".termek");

  products.forEach((product) => {
    const productCategory = product.getAttribute("data-gyar");
    const productPrice = parseFloat(product.getAttribute("data-ar"));

    // Alapértelmezett megjelenítés
    let show = true;

    // Kategória szűrés
    if (category !== "mind" && productCategory !== category) {
      show = false;
    }

    // Ár szűrés
    if (maxPrice && productPrice > maxPrice) {
      show = false;
    }

    // Eredmény
    product.style.display = show ? "block" : "none";
  });
});

let osszes = 0;

document.addEventListener("click", function (event) { //esemény indít amely, az egész lapot figyeli
  if (event.target.classList.contains("osszead")) { //az esemény targetén lévő classt vegye figyelmbe
    let ar = parseFloat(event.target.value);
    osszes += ar;
    document.getElementById("osszeg").value = osszes;
  } else if (event.target.classList.contains("kivon")) {
    event.preventDefault();//lap tetejére ugrást meggátolja
    let ar = parseFloat(event.target.value);
    if (osszes >= ar) {
      osszes -= ar;
    }
    document.getElementById("osszeg").value = osszes;
  }
});


