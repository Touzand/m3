console.log("Dev m3");

import {
  bigPriceFilter,
  dataFilter,
  lowPriceFilter,
  colorFilter,
} from "./filters";
import { getProducts } from "./getProducts";
import { initCheckboxes } from "./chechbox";

const d = document;

d.addEventListener("DOMContentLoaded", () => {
  getProducts();
  initCheckboxes(document.querySelectorAll(".checkbox"));
});

document.addEventListener("click", (e) => {
  e.stopImmediatePropagation();

  if (e.target.matches(".filter-btn")) {
    document.querySelector(".filtrar").classList.add("wrap-open");
  }

  if (e.target.matches(".order-btn")) {
    document.querySelector(".ordenar").classList.add("wrap-open");
  }

  if (e.target.matches(".wrap-close")) {
    document.querySelector(".filtrar").classList.remove("wrap-open");
    document.querySelector(".ordenar").classList.remove("wrap-open");
document.querySelector('.form-buttons').classList.remove('open-buttons')
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
document.querySelector('.form-buttons').classList.add('open-buttons')
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
