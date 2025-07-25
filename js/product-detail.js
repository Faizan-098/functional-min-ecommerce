// Product Detail
if (document.getElementById('product-detail')) {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    const product = products.find(p => p.id === id);
    if (product) {
        document.getElementById('product-detail').innerHTML = `
            <img src="${product.image}" alt="${product.name}" style="width:100%;max-width:320px;">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p><strong>Price: $${product.price.toFixed(2)}</strong></p>
            <button class="btn" onclick="addToCart(${product.id})">Add to Cart</button>
        `;
    } else {
        document.getElementById('product-detail').innerHTML = '<p>Product not found.</p>';
    }
}
