 const products = [
  {
    id:1,
    name: "Meat Grinder",
    description: "Powerful electric meat mincer with stainless steel cutting blades.",
    rating: 4.5,
    price: 9999,
    image: "../images/item13.png"
  },
  {
      id:2,
    name: "Steam Iron",
    description: "Fast-heating iron with powerful steam and non-stick soleplate.",
    rating: 4.5,
    price: 4999,
    image: "../images/iron.png"
  },
  {
      id:3,
    name: "Air Fryer",
    description: "Oil-free cooking with digital temperature control and 4L capacity.",
    rating: 4.5,
    price: 12999,
    image: "../images/item11.png"
  },
  {
      id:4,
    name: "Blender",
    description: "3-in-1 appliance with multiple speed settings and stainless steel blade",
    rating: 4.5,
    price: 3499,
    image: "../images/juicer.png"
  },
  {
      id:5,
    name: "Steam Purifier",
    description: "Compact and stylish design, perfect for kitchen or living room",
    rating: 4.5,
    price: 12500,
    image: "../images/item9.png"
  },
  {
      id:6,
    name: "Juicer",
    description: "3-in-1 appliance with multiple speed settings and stainless steel blades",
    rating: 4.5,
    price: 4299,
    image: "../images/item12.png"
  },
  {
      id:7,
    name: "Toaster",
    description: "Quick toaster with adjustable browning levels and auto shut-off",
    rating: 4.5,
    price: 4999,
    image: "../images/toaster.png"
  },
  {
      id:8,
    name: "Induction Cooktop",
    description: "Energy-efficient cooktop with digital touch panel and preset cooking",
    rating: 4.5,
    price: 6999,
    image: "../images/item16.png"
  }
];


// generate product
let productContainer=document.querySelector('.product-container');
products.forEach((item)=>{
  productContainer.innerHTML+=`
   <div class="card" id=${item.id}>
            <img src="${item.image}" alt="item">
            <div class="card-des">
                <h3>${item.name} </h3>
                <p>${item.description}</p>
                <h3 class="star-container"> <span class="stars">★★★★</span>&nbsp; ${item.rating}</h3>
                <h4 class="price">Price: Rs.${item.price}/-</h4>
              <div class="btn-container">
     <button id="addToCart" onclick="getAddToCartId(${item.id})"}>Add To Cart</button>
     <a href="./productDetailPage.html?id=${item.id}"><button id="addToCart" >View more</button></a>
</div>

               .

            </div>
        </div>`
})

// saved data to local storage
let savedDataId=JSON.parse(localStorage.getItem('savedDataId'))?JSON.parse(localStorage.getItem('savedDataId')):[];

// get add to cart id

function getAddToCartId(id){
  alert('Product added to the cart')
savedDataId.push(id)
localStorage.setItem('savedDataId',JSON.stringify(savedDataId));

}


