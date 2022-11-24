console.log("Dev m3");

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
    document
      .querySelectorAll(".form-buttons")[1]
      .classList.remove("open-buttons");

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
    document.querySelectorAll(".form-buttons")[1].classList.add("open-buttons");
  }

  if (e.target.matches(".carregar-mais")) {
    getProducts(14);
  }

  if (e.target.matches("#reset")) {
    getProducts(6);
  }
});

document.getElementById("filter-form").addEventListener("submit", (e) => {
  e.preventDefault();
  document.querySelector(".filtrar").classList.remove("wrap-open");

  let pr = d.querySelectorAll(".product");

  for (let i = 0; i < pr.length; i++) {
    pr[i].classList.remove("filter");
  }

  colorFilter();
});

document.getElementById("slt").addEventListener("change", (e) => {
  if (e.target.value === "big-price") {
    bigPriceFilter();
  }

  if (e.target.value === "low-price") {
    lowPriceFilter();
  }
});
