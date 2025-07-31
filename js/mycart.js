
      // data
      const products = [
        {
          id: 1,
          name: "Meat Grinder",
          description:
            "Powerful electric meat mincer with stainless steel cutting blades.",
          rating: 4.5,
          price: 9999,
          image: "../images/item13.png",
        },
        {
          id: 2,
          name: "Steam Iron",
          description:
            "Fast-heating iron with powerful steam and non-stick soleplate.",
          rating: 4.5,
          price: 4999,
          image: "../images/iron.png",
        },
        {
          id: 3,
          name: "Air Fryer",
          description:
            "Oil-free cooking with digital temperature control and 4L capacity.",
          rating: 4.5,
          price: 12999,
          image: "../images/item11.png",
        },
        {
          id: 4,
          name: "Blender",
          description:
            "3-in-1 appliance with multiple speed settings and stainless steel blade",
          rating: 4.5,
          price: 3499,
          image: "../images/juicer.png",
        },
        {
          id: 5,
          name: "Steam Purifier",
          description:
            "Compact and stylish design, perfect for kitchen or living room",
          rating: 4.5,
          price: 12500,
          image: "../images/item9.png",
        },
        {
          id: 6,
          name: "Juicer",
          description:
            "3-in-1 appliance with multiple speed settings and stainless steel blades",
          rating: 4.5,
          price: 4299,
          image: "../images/item12.png",
        },
        {
          id: 7,
          name: "Toaster",
          description:
            "Quick toaster with adjustable browning levels and auto shut-off",
          rating: 4.5,
          price: 4999,
          image: "../images/toaster.png",
        },
        {
          id: 8,
          name: "Induction Cooktop",
          description:
            "Energy-efficient cooktop with digital touch panel and preset cooking",
          rating: 4.5,
          price: 6999,
          image: "../images/item16.png",
        },
      ];
      let myCartContainer = document.querySelector(".my-cart-container");
      let mainSection = document.querySelector(".main-section");
      let summaryBag = document.querySelector(".summary-bag");
      let getSavedDataId;
      // onload

      displayData();

      //  fetchdata
      function fetchData() {
        return JSON.parse(localStorage.getItem("savedDataId"))
          ? JSON.parse(localStorage.getItem("savedDataId"))
          : [];
      }
      // display add to cart items
      function displayData() {
        let getSavedDataId = fetchData();  // fetch data from local storage
        if (getSavedDataId == 0) {
          mainSection.innerHTML ='<h1 class="my-cart-error-msg">No Products in cart</h1>';
          mainSection.classList.add('error')
        } else {
          mainSection.classList.remove('error')
          myCartContainer.innerHTML = ""; // remove cart container
          let data = products.filter((item) => { // filter data for displying
            return getSavedDataId.includes(item.id);
          });

          data.forEach((item) => { // display data
            myCartContainer.innerHTML += `
      <div class="cart-item" id=${item.id}>
          <div class="cart-img">
            <img src=${item.image} alt="" />
          </div>
          <div class="cart-name">${item.name}</div>
          <div class="cart-price">${item.price}$</div>
          <div class="remove-cart" onclick="removeCart(${item.id})">Remove</div>
        </div>`;
          });
          displaySummary(data); //display summary 
        }
    
        
        
      }

      // remove cart function
      function removeCart(id) {
        let getSavedDataId = fetchData();
        let data = getSavedDataId.filter((item) => {
          return item !== id;
        });
        console.log(data);

        localStorage.setItem("savedDataId", JSON.stringify(data));

        displayData();
      }

      // summary function
      function displaySummary(data) {
     summaryBag.innerHTML = `
 <h2>Selected Offer Summary</h2>
   <div class="sub-total">Quantity :  &nbsp<span>${data.length}</span></div>
        <div class="sub-total">Sub Total :  &nbsp<span>${totalFun(data).toFixed(2)}$</span></div>
        <div class="tax">Tax (5%) : <span> &nbsp 5.0$</span></div>
        <div class="final-amount">Final Amount : <span> &nbsp${totalFun(data)-(totalFun(data)*5/100).toFixed(2)}$</span></div>
        <div class="checkout-btn" onclick=" checkout()">Checkout</div>
`;
      }

      //  total
      function totalFun(data) {
return data.reduce((prev,curr)=> prev + curr.price,0)
      }
    
      // Checkout
      function checkout(){
        window.location.href='./checkout.html'
      }
    
