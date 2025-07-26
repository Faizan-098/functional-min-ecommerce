// prduct data
const products = [
  {
    id: 1,
    name: "Meat Grinder",
    description: "Powerful electric meat mincer with stainless steel cutting blades.",
    detailDescription: `Heavy-duty 300W motor grinds meat quickly and efficiently.
Durable stainless steel blades ensure long-term performance.
Comes with 3 cutting plates for different textures.
Easy to clean with detachable parts.
Ideal for home cooks and small restaurants.`,
    rating: 4.5,
    price: 9999,
    image: "../images/item13.png"
  },
  {
    id: 2,
    name: "Steam Iron",
    description: "Fast-heating iron with powerful steam and non-stick soleplate.",
    detailDescription: `1200W power ensures quick heating and consistent steam.
Non-stick soleplate glides smoothly on all fabrics.
Steam burst and spray function for tough wrinkles.
Temperature control knob for various fabrics.
Compact design with ergonomic grip.`,
    rating: 4.5,
    price: 4999,
    image: "../images/iron.png"
  },
  {
    id: 3,
    name: "Air Fryer",
    description: "Oil-free cooking with digital temperature control and 4L capacity.",
    detailDescription: `Fry, bake, grill, and roast with little to no oil.
Digital touch screen with temperature & timer settings.
Large 4-liter capacity fits full meals easily.
Removable basket with non-stick coating.
Energy-efficient and easy to operate.`,
    rating: 4.5,
    price: 12999,
    image: "../images/item11.png"
  },
  {
    id: 4,
    name: "Blender",
    description: "3-in-1 appliance with multiple speed settings and stainless steel blade",
    detailDescription: `Powerful 500W motor for blending, mixing, and grinding.
Includes jar, grinder, and chopper attachments.
Stainless steel blade ideal for ice crushing.
Variable speed control with pulse function.
Detachable parts for easy cleaning.`,
    rating: 4.5,
    price: 3499,
    image: "../images/juicer.png"
  },
  {
    id: 5,
    name: "Steam Purifier",
    description: "Compact and stylish design, perfect for kitchen or living room",
    detailDescription: `Effectively removes germs and odors from the air.
Elegant design fits any modern interior.
Water tank lasts for up to 8 hours.
Auto shut-off for safety when water runs out.
Low noise operation for peaceful use.`,
    rating: 4.5,
    price: 12500,
    image: "../images/item9.png"
  },
  {
    id: 6,
    name: "Juicer",
    description: "3-in-1 appliance with multiple speed settings and stainless steel blades",
    detailDescription: `Extracts juice from fruits and vegetables effortlessly.
Equipped with fine mesh filter for smooth juice.
Two-speed motor handles soft and hard produce.
Non-drip spout keeps your counter clean.
Dishwasher-safe parts for convenience.`,
    rating: 4.5,
    price: 4299,
    image: "../images/item12.png"
  },
  {
    id: 7,
    name: "Toaster",
    description: "Quick toaster with adjustable browning levels and auto shut-off",
    detailDescription: `Dual slots accommodate a variety of bread sizes.
Adjustable browning control for perfect toast.
Auto shut-off and cancel button for safety.
Removable crumb tray for easy cleaning.
Cool-touch body prevents accidental burns.`,
    rating: 4.5,
    price: 4999,
    image: "../images/toaster.png"
  },
  {
    id: 8,
    name: "Induction Cooktop",
    description: "Energy-efficient cooktop with digital touch panel and preset cooking",
    detailDescription: `Advanced induction technology heats faster than gas.
Digital touch control with LED display.
Preset menus for boiling, frying, and more.
Auto shut-off with overheating protection.
Portable and easy to clean glass surface.`,
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
      <p>${item.detailDescription}</p>
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



