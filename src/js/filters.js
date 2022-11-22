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

export const colorFilter = (color) => {
  let pr = d.querySelectorAll(".product");
  let arr = [];

  for (let i = 0; i < pr.length; i++) {
    arr.push(pr[i]);
  }

  console.log(arr);
  let newArr = arr.filter((prod) => prod.getAttribute("data-color") === color);

  $productContainer.innerHTML = "";
  for (let i = 0; i < newArr.length; i++) {
    $productContainer.appendChild(newArr[i]);
  }
};

//let pr = d.querySelectorAll(".product");
//let arr = [];

//for (let i = 0; i < pr.length; i++) {
//arr.push(pr[i]);
//}

//arr.sort((a) => {
//return a.getAttribute("data-color") === color;
//});

//for (let i = 0; i < arr.length; i++) {
//$productContainer.appendChild(arr[i]);
//};
