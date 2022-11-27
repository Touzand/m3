import { priceFormat } from "./helpers";

let d = document,
  $template = d.getElementById("tmp-products").content,
  $productContainer = d.querySelector(".products-container"),
  $fragment = d.createDocumentFragment();

export const getProducts = async (max) => {
  $productContainer.innerHTML = "";

  try {
    const res = await fetch("http://localhost:5000/products");
    const data = await res.json();
    DisplayProducts(data, max);
  } catch (err) {
    console.log(err);
  }
};

const DisplayProducts = (products, max) => {
  products.forEach((product, id) => {
    if (id < max) {
      $template
        .querySelector(".product")
        .setAttribute("data-size", `${product.size.join(" ")}`);
      $template
        .querySelector(".product")
        .setAttribute("data-color", `${product.color}`);
      $template
        .querySelector(".product")
        .setAttribute("data-date", `${new Date(product.date)}`);
      $template
        .querySelector(".product")
        .setAttribute("data-price", `${Math.floor(product.price)}`);

      $template.querySelector(".img-prod img").src = product.image;
      $template.querySelector(".img-prod img").alt = product.name;
      $template.querySelector(".details-prod p").textContent = product.name;
      $template.querySelector(".details-prod h3").innerHTML = `${priceFormat(
        product.price
      )}`;
      $template.querySelector(".details-prod span").innerHTML = `até ${
        product.parcelamento[0]
      }x de ${priceFormat(product.parcelamento[1])}`;

      let $clone = document.importNode($template, true);
      $fragment.appendChild($clone);
    } else {
      return;
    }
  });
  $productContainer.appendChild($fragment);
};
