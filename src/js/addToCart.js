let d = document;
const $template = d.getElementById("tmp-cart").content,
  $fragment = d.createDocumentFragment(),
  $cartContainer = d.getElementById("cart-container");


export const addToCart = (product) => {
  $template.querySelector(".img-prod img").src = product.querySelector('img').src;
  $template.querySelector(".img-prod img").alt = product.querySelector('img').alt;
  $template.querySelector(".cart-details-prod p").textContent = product.querySelector('p').textContent;
$template.querySelector(".cart-details-prod h3").innerHTML = product.querySelector('h3').textContent;
$template.querySelector(".cart-details-prod span").innerHTML =  product.querySelector('span').textContent;

  let $clone = document.importNode($template, true);
$fragment.appendChild($clone);
console.log($cartContainer)
$cartContainer.appendChild($fragment)
};
