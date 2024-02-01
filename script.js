const products=document.querySelector(".product-holder");



  function createCard([image,cardTitle]){
    let code=
    <div class="card">
        <image src="${img}" alt="${category}">
          <h2 class="card-text">${categoryText}</h2>  
    </div>
;
products.innerHTML += code;  
}

let item1= ["images/milk.jpg",
"dairy",
"Milk"];

let item2= ["images/butter.jpg",
"dairy",
"Butter"];

let item3= ["images/yogurt.jpg",
"dairy",
"Yogurt"];

let item4= ["images/paneer.jpg",
"dairy",
"Paneer"];

let item5= ["images/ghee.jpg",
"dairy",
"Ghee"];

createCard(item1);
createCard(item2);
createCard(item3);
createCard(item4);
createCard(item5);
