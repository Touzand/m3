console.log("Bem-vindo ao console...");

import { getProducts } from "./getProducts";
import { eventListener } from "./eventListener";

const d = document;

d.addEventListener("DOMContentLoaded", () => {
  getProducts(6);
  eventListener();
});

document.querySelector(".select-wrapper").addEventListener("click", (e) => {
  document.querySelector(".select").classList.toggle("open");
});

for (const option of d.querySelectorAll(".custom-option")) {
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
  const select = d.querySelector(".select");
  if (!select.contains(e.target)) {
    select.classList.remove("open");
  }
});

var radios = d.querySelectorAll("input[type=radio]");
for (var i = 0; i < radios.length; ++i) {
  radios[i].addEventListener("click", function (e) {
    if (e.target.checked && e.target.value == window.lastrv) {
      e.target.checked = false;
      window.lastrv = 0;
    } else window.lastrv = e.target.value;
  });

  radios[i].addEventListener("keypress", function (e) {
    if (e.keyCode == 32) e.target.click();
  });
}
