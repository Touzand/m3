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

export const colorFilter = (input) => {
  let color = input.getAttribute("data-color");
  console.log(color);
  let pr = d.querySelectorAll(".product");

  for (let i = 0; i < pr.length; i++) {
    console.log(pr[i].getAttribute("data-color"));
    pr[i].getAttribute("data-color") === color
      ? pr[i].classList.remove("filter")
      : pr[i].classList.add("filter");
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
