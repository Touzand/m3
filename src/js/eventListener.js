import { addToCart } from "./addToCart";
import {
  bigPriceFilter,
  dataFilter,
  lowPriceFilter,
  masterFilter,
} from "./filters";

let d = document;

export const eventListener = () => {
  d.addEventListener("click", (e) => {
    if (e.target.matches(".filter-btn")) {
      d.querySelector(".filtrar").classList.add("wrap-open");
    }

    if (e.target.matches(".order-btn")) {
      d.querySelector(".ordenar").classList.add("wrap-open");
    }

    if (e.target.matches(".wrap-close")) {
      d.querySelector(".filtrar").classList.remove("wrap-open");
      d.querySelector(".ordenar").classList.remove("wrap-open");
      d.getElementById("cart-container").classList.remove(
        "cart-container-open"
      );
      d.querySelector(".cart-background").classList.remove(
        "cart-background-true"
      );
      d.querySelector(".form-buttons").classList.remove("open-buttons");

      d.querySelectorAll("details")[0].open = false;
      d.querySelectorAll("details")[1].open = false;
      d.querySelectorAll("details")[2].open = false;
    }

    if (e.target.matches(".low-price")) {
      d.querySelector(".ordenar").classList.remove("wrap-open");
      lowPriceFilter();
    }

    if (e.target.matches(".big-price")) {
      d.querySelector(".ordenar").classList.remove("wrap-open");
      bigPriceFilter();
    }

    if (e.target.matches(".recente")) {
      d.querySelector(".ordenar").classList.remove("wrap-open");
      dataFilter();
    }

    if (e.target.matches(".filter-option-header")) {
      e.target.parentNode.classList.toggle("filter-open");
    }

    if (e.target.matches("summary")) {
      d.querySelector(".form-buttons").classList.add("open-buttons");
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

      d.querySelector(".filter-cores").classList.add("filter-cores-open");
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
      d.querySelector(".cart-background").classList.add("cart-background-true");
    }

    if (e.target.matches(".submit-button")) {
      e.preventDefault();
      d.querySelector(".filtrar").classList.remove("wrap-open");
    }
  });

  d.getElementById("filter-form-mobile").addEventListener("change", (e) => {
    let pr = d.querySelectorAll(".product");

    for (let i = 0; i < pr.length; i++) {
      pr[i].classList.remove("filter");
    }

    masterFilter("filter-form-mobile");
  });

  d.getElementById("filter-form-desktop").addEventListener("change", (e) => {
    let pr = d.querySelectorAll(".product");

    for (let i = 0; i < pr.length; i++) {
      pr[i].classList.remove("filter");
    }

    masterFilter("filter-form-desktop");
  });
};
