  function submitOrder(e) {
      e.preventDefault();
localStorage.removeItem('savedDataId')
      alert("Order placed successfully!");
      window.location.href = "../index.html";
    }