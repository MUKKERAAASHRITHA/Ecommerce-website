let cart = [];
let total = 0;

// Function to toggle the visibility of the cart modal
function toggleCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = cartModal.style.display === 'none' || cartModal.style.display === '' ? 'flex' : 'none';
    updateCartDisplay();
}

// Function to add items to the cart
function addToCart(id, name, price) {
    // Check if the product already exists in the cart
    const existingItemIndex = cart.findIndex(item => item.id === id);
    if (existingItemIndex === -1) {
        cart.push({ id, name, price, quantity: 1 });
    } else {
        cart[existingItemIndex].quantity += 1;
    }
    total += price;
    document.getElementById('cart-count').textContent = cart.length;
}

// Function to update the cart display
function updateCartDisplay() {
    const cartItemsDiv = document.getElementById('cart-items');
    const totalPriceDiv = document.getElementById('total-price');

    // Clear previous cart items
    cartItemsDiv.innerHTML = '';

    // Add current cart items
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
        cartItemsDiv.appendChild(itemElement);
    });

    // Update total price
    totalPriceDiv.textContent = total.toFixed(2);
}

// Function to simulate checkout process
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
    } else {
        alert(`Your total is $${total.toFixed(2)}. Proceeding to checkout...`);
        cart = [];  // Empty cart after checkout
        total = 0;
        document.getElementById('cart-count').textContent = 0;
        toggleCart();  // Close the cart modal
    }
}
