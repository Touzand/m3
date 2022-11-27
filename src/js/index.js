console.log("Dev m3");

import { addToCart } from "./addToCart";
import {
  bigPriceFilter,
  dataFilter,
  lowPriceFilter,
  colorFilter,
} from "./filters";
import { getProducts } from "./getProducts";

const d = document;

d.addEventListener("DOMContentLoaded", () => {
  getProducts(6);
});

document.addEventListener("click", (e) => {
  if (e.target.matches(".filter-btn")) {
    document.querySelector(".filtrar").classList.add("wrap-open");
  }

  if (e.target.matches(".order-btn")) {
    document.querySelector(".ordenar").classList.add("wrap-open");
  }

  if (e.target.matches(".wrap-close")) {
    document.querySelector(".filtrar").classList.remove("wrap-open");
    document.querySelector(".ordenar").classList.remove("wrap-open");
    document.getElementById("cart-container").classList.remove("cart-container-open");
d.querySelector('.cart-background').classList.remove('cart-background-true')
    document.querySelector(".form-buttons").classList.remove("open-buttons");

    document.querySelectorAll("details")[0].open = false;
    document.querySelectorAll("details")[1].open = false;
    document.querySelectorAll("details")[2].open = false;
  }

  if (e.target.matches(".low-price")) {
    document.querySelector(".ordenar").classList.remove("wrap-open");
    lowPriceFilter();
  }

  if (e.target.matches(".big-price")) {
    document.querySelector(".ordenar").classList.remove("wrap-open");
    bigPriceFilter();
  }

  if (e.target.matches(".recente")) {
    document.querySelector(".ordenar").classList.remove("wrap-open");
    dataFilter();
  }

  if (e.target.matches(".filter-option-header")) {
    e.target.parentNode.classList.toggle("filter-open");
  }

if (e.target.matches("summary")) {
    document.querySelector(".form-buttons").classList.add("open-buttons");
  }

  if (e.target.matches(".carregar-mais")) {
    e.target.style.display = "none";
    getProducts(14);
  }

  if (e.target.matches("#reset")) {
    getProducts(6);
  }

  if (e.target.matches(".custom-option")) {
    if (e.target.getAttribute("data-value") === "big-price") {
      bigPriceFilter();
    }

    if (e.target.getAttribute("data-value") === "low-price") {
      lowPriceFilter();
    }
  }

  if (e.target.matches(".show-colors")) {
    e.target.parentNode.removeChild(e.target);

    document.querySelector(".filter-cores").classList.add("filter-cores-open");
  }

  if (e.target.matches(".count-container button")) {
    let valor = parseInt(
        e.target.parentNode.querySelector(".count-container div").textContent
      ),
      contador = e.target.parentNode.querySelector(".count-container div");

    if (valor === 0) {
      e.target.parentNode.parentNode.style.display = "none";
    } else if (e.target.classList[0] === "acrecentar") {
      ++valor;
    } else {
      --valor;
    }

    contador.textContent = `${valor}`;

  }

  if (e.target.matches(".product-button")) {
    let valor = parseInt(d.querySelector(".carrinho div").textContent),
      contador = d.querySelector(".carrinho div");

    valor++;
    contador.textContent = `${valor}`;

    addToCart(e.target.parentNode);
  }

  if (e.target.matches(".cart")) {
d.getElementById("cart-container").classList.add("cart-container-open");
d.querySelector('.cart-background').classList.add('cart-background-true')
  }

  if (
    e.target.matches(".color-option input") &&
    e.target.parentNode.querySelector("input:checked")
  ) {
    console.log("checado");
  }

  if (e.target.matches(".submit-button")) {
    e.preventDefault();
    document.querySelector(".filtrar").classList.remove("wrap-open");
  }

  if (e.target.matches("details")) {
    document.querySelector("").classList.remove("wrap-open");
  }
});

document.getElementById("filter-form-mobile").addEventListener("change", (e) => {
  console.log(e.target);
  let pr = d.querySelectorAll(".product");

  for (let i = 0; i < pr.length; i++) {
    pr[i].classList.remove("filter");
  }

  colorFilter('filter-form-mobile');
});

document.getElementById("filter-form-mobile").addEventListener("change", (e) => {
  console.log(e.target);
  let pr = d.querySelectorAll(".product");

  for (let i = 0; i < pr.length; i++) {
    pr[i].classList.remove("filter");
  }

  colorFilter('filter-form-mobile');
});

document
  .querySelector(".select-wrapper")
  .addEventListener("click", function () {
    this.querySelector(".select").classList.toggle("open");
  });

for (const option of document.querySelectorAll(".custom-option")) {
  option.addEventListener("click", function () {
    if (!this.classList.contains("selected")) {
      this.parentNode
        .querySelector(".custom-option.selected")
        .classList.remove("selected");
      this.classList.add("selected");
      this.closest(".select").querySelector(
        ".select__trigger span"
      ).textContent = this.textContent;
    }
  });
}

window.addEventListener("click", function (e) {
  const select = document.querySelector(".select");
  if (!select.contains(e.target)) {
    select.classList.remove("open");
  }
});

//window.addEventListener("DOMContentLoaded", function() {
//var radios = document.querySelectorAll("input[type=radio]");
//for(var i=0; i<radios.length; ++i) {
//radios[i].addEventListener("click", function(e) {
//if(e.target.checked && e.target.value == window.lastrv){
//e.target.checked = false;
//window.lastrv = 0;
//}
//else
//window.lastrv = e.target.value;
//});

//radios[i].addEventListener("keypress", function(e) {
//if(e.keyCode==32) e.target.click();
//});
//}
//});
