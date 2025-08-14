
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
        return JSON.parse(localStorage.getItem("savedData"))||[];
      }
      // display add to cart items
      function displayData() {
        let getSavedData = fetchData();  // fetch data from local storage
        if (getSavedData == 0) {
          mainSection.innerHTML ='<h1 class="my-cart-error-msg">No Products in cart</h1>';
          mainSection.classList.add('error')
        } else {
          myCartContainer.innerHTML=''
          getSavedData.forEach((item) => { // display data
            myCartContainer.innerHTML += `
      <div class="cart-item" id=${item.id}>
          <div class="cart-img">
            <img src=${item.image} alt="" />
          </div>
          <div class="cart-name">${item.name}</div>
   <div class="cart-controller"><button onclick="decrement(${item.id})">-</button><span>${item.quantity}</span> <button onclick="increment(${item.id})">+</button></div>
          <div class="cart-price">${item.price}$</div>
          <div class="remove-cart" onclick="removeCart(${item.id})">Remove</div>
        </div>`;
          });
          displaySummary(getSavedData); //display summary 
        }
    
        
        
      }

      // remove cart function
      function removeCart(id) {
        let getSavedData = fetchData();
        let updatedData = getSavedData.filter((item) => {
          return item.id !== id;
        });
        localStorage.setItem("savedData", JSON.stringify(updatedData));

        displayData();
      }

      // summary function
      function displaySummary(getSavedData) {
     
     summaryBag.innerHTML = `
 <h2>Selected Offer Summary</h2>
   <div class="sub-total">Quantity :  &nbsp<span>${countQuantity(getSavedData)}</span></div>
        <div class="sub-total">Sub Total :  &nbsp<span>${totalFun(getSavedData).toFixed(2)}$</span></div>
        <div class="tax">Tax (5%) : <span> &nbsp 5.0$</span></div>
        <div class="final-amount">Final Amount : <span> &nbsp${Number(totalFun(getSavedData)) + Number((totalFun(getSavedData)*5/100).toFixed(2))}$</span></div>
        <div class="checkout-btn" onclick=" checkout()">Checkout</div>
`;
      }

      //  total
      function totalFun(data) { 
      return data.reduce((prev,curr)=> prev + (curr.price * curr.quantity),0)
      }
 
      // Checkout
      function checkout(){
        window.location.href='./checkout.html'
      }

      // count quantity
      function countQuantity(data){
          return data.reduce((prev,curr)=> prev+curr.quantity,0);
      
      }
    

      // Decrement Quantity
      function decrement(id){
          let data=fetchData();
          let obj=data.find(item => item.id === id)
          if(obj.quantity>1){
            obj.quantity--;
          }
          localStorage.setItem('savedData',JSON.stringify(data))
          displayData()
      }
       // Increment Quantity
      function increment(id){
          let data=fetchData();
          let obj=data.find(item => item.id === id)
          obj.quantity++;
          localStorage.setItem('savedData',JSON.stringify(data))
          displayData()
      }
