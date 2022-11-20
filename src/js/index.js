console.log("Dev m3");

const d = document;
const $template = d.getElementById("tmp").content,
  $productContainer = d.querySelector(".products-container"),
  $fragment = d.createDocumentFragment();

const getProducts = async () => {
  try {
    const res = await fetch("http://localhost:5000/products");
    const data = await res.json();
    DisplayProducts(data);
  } catch (err) {
    console.log(err);
  }
};

const DisplayProducts = (products) => {

products.forEach(product => {

$template.querySelector('.img-prod img').src = product.image
$template.querySelector('.img-prod img').alt = product.name
$template.querySelector('.details-prod p').textContent = product.name
$template.querySelector('.details-prod h3').innerHTML = `R$${ product.price }.00`
$template.querySelector('.details-prod span').innerHTML = `até ${product.parcelamento[0]}x de R$${product.parcelamento[1]}.00`


let $clone = document.importNode($template,true)
$fragment.appendChild($clone)
});
$productContainer.appendChild($fragment)
};

getProducts();

document.addEventListener('click', e=>{
e.preventDefault()

if(e.target.matches('.filter-btn')){
document.querySelector('.filtrar').classList.add('wrap-open')
}

if(e.target.matches('.order-btn')){
document.querySelector('.ordenar').classList.add('wrap-open')
}

if(e.target.matches('.wrap-close')){
document.querySelector('.filtrar').classList.remove('wrap-open')
document.querySelector('.ordenar').classList.remove('wrap-open')

}
})
