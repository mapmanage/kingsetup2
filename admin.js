let markets = {

Amazon:true,
Alibaba:true,
AliExpress:true,
eBay:true

};

let products = {

"iPhone 15 Pro":true,
"Gaming Laptop":true,
"Luxury Watch":true

};

function toggleMarket(button){

let name =
button.parentElement
.querySelector("span")
.innerText;

markets[name] = !markets[name];

localStorage.setItem(
"markets",
JSON.stringify(markets)
);

if(markets[name]){

button.innerText = "ON";
button.style.background = "gold";

}else{

button.innerText = "OFF";
button.style.background = "red";

}

}

function toggleProduct(button){

let name =
button.parentElement
.querySelector("span")
.innerText;

products[name] = !products[name];

localStorage.setItem(
"products",
JSON.stringify(products)
);

if(products[name]){

button.innerText = "ON";
button.style.background = "gold";

}else{

button.innerText = "OFF";
button.style.background = "red";

}

}

function setTheme(color){

localStorage.setItem(
"theme",
color
);

alert(
"Theme Changed To " + color
);

}

window.onload = function(){

let savedMarkets =
JSON.parse(
localStorage.getItem("markets")
);

if(savedMarkets){

markets = savedMarkets;

document
.querySelectorAll(".control")
.forEach(control => {

let span =
control.querySelector("span");

let button =
control.querySelector("button");

if(markets[span.innerText]
=== false){

button.innerText = "OFF";
button.style.background = "red";

}

});

}

};