// prduct data
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
// Product Detail
let productDetailContainer=document.querySelector('.product-detail');
let getId= new URLSearchParams(window.location.search)

if(getId.get('id')){
let filterdData=products.filter(item=>item.id==getId.get('id'))
filterdData.forEach(item=>{
productDetailContainer.innerHTML=`
<div class="product-info-card">
    <div class="img-container"> <!-- Fixed spelling here -->
      <img src=${item.image} alt="">
    </div>
    <div class="detail">
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <h4 class="price">${item.price}$/-</h4>
      <h3 class="star-container"> <span class="stars">★★★★</span>&nbsp; ${item.rating}</h3>
      <button class="go-to-cart" onclick=" return window.location.href='./products.html'">Go To Cart</button>
    </div>
  </div>
`
    
})
    
}else{
    productDetailContainer.innerHTML='<h1>Product Not Found </h1>'
}


// if (document.getElementById('product-detail')) {
//     const params = new URLSearchParams(window.location.search);
//     console.log(params);
    
//     const id = parseInt(params.get('id'));
//     const product = products.find(p => p.id === id);
//     if (product) {
//         document.getElementById('product-detail').innerHTML = `
//             <img src="${product.image}" alt="${product.name}" style="width:100%;max-width:320px;">
//             <h2>${product.name}</h2>
//             <p>${product.description}</p>
//             <p><strong>Price: $${product.price.toFixed(2)}</strong></p>
//             <button class="btn" onclick="addToCart(${product.id})">Add to Cart</button>
//         `;
//     } else {
//         document.getElementById('product-detail').innerHTML = '<p>Product not found.</p>';
//     }
// }
