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

  console.log(
    arr[0].getAttribute("data-date") < arr[1].getAttribute("data-date")
  );

  arr.sort((a, b) => {
    return a.getAttribute("data-date") < b.getAttribute("data-date");
  });

  for (let i = 0; i < arr.length; i++) {
    $productContainer.appendChild(arr[i]);
  }
};

export const colorFilter = () => {
console.log( Array.from(document.querySelectorAll('.filter')).filter(item => !item.classList.includes('filter')) )

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

    for (let u = 0; u < pr.length; u++) {
      pr[u].getAttribute("data-color") === selectedColor[0]
        ? pr[u].classList.remove("filter")
        : pr[u].classList.add("filter");
    }

pr = d.querySelectorAll(".product:not(.filter )");
console.log(pr);

  for (let i = 0; i < selectedSize.length; i++) {
    for (let u = 0; u < pr.length; u++) {
      pr[u].getAttribute("data-size").includes(selectedSize[i])
        ? pr[u].classList.remove("filter")
        : pr[u].classList.add("filter");
    }
  }

pr = d.querySelectorAll(".product:not( .filter )");
console.log(pr);

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

//export const sizeFilter = () => {
  //let pr = d.querySelectorAll(".product:not( [filter] )");

  //let selectedSize = [];
  //var myForm = document.getElementById("filter-form"),
    //formData = new FormData(myForm);

  //for (const [key, value] of formData) {
  //}

  //console.log(selectedSize);

  //for (let i = 0; i < selectedSize.length; i++) {
    //for (let u = 0; u < pr.length; u++) {
      //pr[u].getAttribute("data-size").includes(selectedSize[i])
        //? pr[u].classList.remove("filter")
        //: pr[u].classList.add("filter");
    //}
  //}
//};

//export const priceRangeFilter = () => {
  //let pr = d.querySelectorAll(".product");

  //for (let i = 0; i < pr.length; i++) {
    //pr[i].classList.remove("filter");
  //}

  //let selectedPriceRange = [];
  //var myForm = document.getElementById("filter-form"),
    //formData = new FormData(myForm);

  //for (const [key, value] of formData) {
  //}
  //for (let i = 0; i < selectedPriceRange.length; i++) {
    //for (let u = 0; u < pr.length; u++) {
      //parseInt(pr[u].getAttribute("data-price")) >
        //parseInt(selectedPriceRange[0]) &&
      //parseInt(pr[u].getAttribute("data-price")) <
        //parseInt(selectedPriceRange[1])
        //? pr[u].classList.remove("filter")
        //: pr[u].classList.add("filter");
    //}
  //}
//};
