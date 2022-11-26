import { getProducts } from "./getProducts";

let d = document,
  $productContainer = d.querySelector(".products-container");

export const lowPriceFilter = () => {
  let pr = d.querySelectorAll(".product");
  let arr = [];

  for (let i = 0; i < pr.length; i++) {
    arr.push(pr[i]);
  }

  arr.sort((a, b) => {
    return a.getAttribute("data-price") - b.getAttribute("data-price");
  });

  for (let i = 0; i < arr.length; i++) {
    $productContainer.appendChild(arr[i]);
  }
};

export const bigPriceFilter = () => {
  let pr = d.querySelectorAll(".product");
  let arr = [];

  for (let i = 0; i < pr.length; i++) {
    arr.push(pr[i]);
  }

  arr.sort((a, b) => {
    return a.getAttribute("data-price") - b.getAttribute("data-price");
  });

  arr.reverse();

  for (let i = 0; i < arr.length; i++) {
    $productContainer.appendChild(arr[i]);
  }
};

export const dataFilter = () => {
  let pr = d.querySelectorAll(".product");
  let arr = [];

  for (let i = 0; i < pr.length; i++) {
    arr.push(pr[i]);
  }

  arr.sort((a, b) => {
    return a.getAttribute("data-date") < b.getAttribute("data-date");
  });

  for (let i = 0; i < arr.length; i++) {
    $productContainer.appendChild(arr[i]);
  }
};

export const colorFilter = () => {
  let pr = d.querySelectorAll(".product:not( .filter )"),
    myForm = document.getElementById("filter-form"),
    formData = new FormData(myForm),
    selectedColor = [],
    selectedSize = [],
    selectedPriceRange = [];

  for (const [key, value] of formData) {
    if (key === "cor") {
      selectedColor.push(value);
    } else if (key === "size") {
      selectedSize.push(value);
    } else if (key === "price-range") {
      selectedPriceRange = value.split(" ");
    }
  }

  console.log(selectedColor, selectedSize);

  for (let i = 0; i < selectedColor.length; i++) {
    for (let u = 0; u < pr.length; u++) {
      pr[u].getAttribute("data-color") === selectedColor[0] ||
      pr[u].getAttribute("data-color") === selectedColor[1] ||
      pr[u].getAttribute("data-color") === selectedColor[2] ||
      pr[u].getAttribute("data-color") === selectedColor[3] ||
      pr[u].getAttribute("data-color") === selectedColor[4] ||
      pr[u].getAttribute("data-color") === selectedColor[5] ||
      pr[u].getAttribute("data-color") === selectedColor[6]
        ? pr[u].classList.remove("filter")
        : pr[u].classList.add("filter");
    }
  }

  pr = d.querySelectorAll(".product:not(.filter )");

  for (let i = 0; i < selectedSize.length; i++) {
    for (let u = 0; u < pr.length; u++) {
      pr[u].getAttribute("data-size") === selectedSize[0] ||
      pr[u].getAttribute("data-size") === selectedSize[1] ||
      pr[u].getAttribute("data-size") === selectedSize[2] ||
      pr[u].getAttribute("data-size") === selectedSize[3] ||
      pr[u].getAttribute("data-size") === selectedSize[4] ||
      pr[u].getAttribute("data-size") === selectedSize[5] ||
      pr[u].getAttribute("data-size") === selectedSize[6]
        ? pr[u].classList.remove("filter")
        : pr[u].classList.add("filter");
    }
  }

  pr = d.querySelectorAll(".product:not( .filter )");

  for (let i = 0; i < selectedPriceRange.length; i++) {
    for (let u = 0; u < pr.length; u++) {
      parseInt(pr[u].getAttribute("data-price")) >
        parseInt(selectedPriceRange[0]) &&
      parseInt(pr[u].getAttribute("data-price")) <
        parseInt(selectedPriceRange[1])
        ? pr[u].classList.remove("filter")
        : pr[u].classList.add("filter");
    }
  }
};
