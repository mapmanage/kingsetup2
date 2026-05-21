let products = [

{
title:"iPhone 15 Pro",
price:"$999",
market:"Amazon",
image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
link:"https://amazon.com"
},

{
title:"Gaming Laptop",
price:"$1200",
market:"Alibaba",
image:"https://images.unsplash.com/photo-1517336714739-489689fd1ca8",
link:"https://alibaba.com"
},

{
title:"Luxury Watch",
price:"$180",
market:"AliExpress",
image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30",
link:"https://aliexpress.com"
},

{
title:"Drone Camera",
price:"$450",
market:"Amazon",
image:"https://images.unsplash.com/photo-1473968512647-3e447244af8f",
link:"https://amazon.com"
},

{
title:"Running Shoes",
price:"$90",
market:"Nike",
image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff",
link:"https://nike.com"
},

{
title:"Wireless Headphones",
price:"$75",
market:"eBay",
image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
link:"https://ebay.com"
},

{
title:"Gaming Console",
price:"$499",
market:"Walmart",
image:"https://images.unsplash.com/photo-1606144042614-b2417e99c4e3",
link:"https://walmart.com"
},

{
title:"MacBook Pro",
price:"$1599",
market:"Apple",
image:"https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
link:"https://apple.com"
}

];

let currentProduct = products[0];

function renderProducts(items){

let container =
document.getElementById("productContainer");

container.innerHTML = "";

items.forEach(product => {

container.innerHTML += `

<div
class="card"
onclick="showProduct('${product.title}')"
>

<img src="${product.image}">

<div class="content">

<div class="market">
${product.market}
</div>

<h3>
${product.title}
</h3>

<div class="price">
${product.price}
</div>

</div>

</div>

`;

});

}

renderProducts(products);

function searchProducts(){

let value =
document.getElementById("searchInput")
.value.toLowerCase();

let filtered =
products.filter(product =>
product.title.toLowerCase().includes(value)
);

renderProducts(filtered);

if(filtered.length > 0){

updateShowcase(filtered[0]);

}

}

function showProduct(title){

let product =
products.find(
item => item.title === title
);

updateShowcase(product);

}

function updateShowcase(product){

currentProduct = product;

document.getElementById(
"showcaseImage"
).src = product.image;

document.getElementById(
"showcaseTitle"
).innerText = product.title;

document.getElementById(
"showcasePrice"
).innerText = product.price;

}

function changeMarket(market){

let filtered =
products.filter(
item => item.market === market
);

if(filtered.length > 0){

updateShowcase(filtered[0]);

}

}

document.getElementById(
"buyBtn"
).onclick = function(){

window.open(
currentProduct.link,
"_blank"
);

};

let darkMode = true;

document.getElementById(
"themeToggle"
).onclick = function(){

if(darkMode){

document.body.style.background =
"#f5f5f5";

document.body.style.color =
"black";

darkMode = false;

}else{

document.body.style.background =
"#000";

document.body.style.color =
"white";

darkMode = true;

}

};
let savedTheme =
localStorage.getItem("theme");

if(savedTheme){

applyTheme(savedTheme);

}

function applyTheme(theme){

let mainColor = "gold";

if(theme === "blue"){

mainColor = "#3b82f6";

}

if(theme === "red"){

mainColor = "#ef4444";

}

if(theme === "green"){

mainColor = "#22c55e";

}

document.querySelector(".logo")
.style.color = mainColor;

document.querySelector(".hero h1")
.style.color = mainColor;

document.getElementById(
"showcasePrice"
).style.color = mainColor;

document.querySelectorAll(".price")
.forEach(price => {

price.style.color = mainColor;

});

document.querySelector(".buy-btn")
.style.background = mainColor;

document.querySelector("#themeToggle")
.style.background = mainColor;

}

let savedMarkets =
JSON.parse(
localStorage.getItem("markets")
);

if(savedMarkets){

products = products.filter(product => {

return savedMarkets[product.market]
!== false;

});

renderProducts(products);

}

let savedProducts =
JSON.parse(
localStorage.getItem("products")
);

if(savedProducts){

products = products.filter(product => {

return savedProducts[product.title]
!== false;

});

renderProducts(products);

}