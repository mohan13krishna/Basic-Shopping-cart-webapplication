let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Initialize slideshow
showSlide(currentSlide);
setInterval(nextSlide, 3000); // Change slide every 3 seconds

let cart = [];

function addToCart(product) {
    cart.push(product);
    alert(product + " added to cart!");
    updateCart();
}

function updateCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = "";
    cart.forEach(item => {
        const div = document.createElement('div');
        div.textContent = item;
        cartItemsDiv.appendChild(div);
    });
}
