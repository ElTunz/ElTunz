// Mostrar el botón "Subir arriba" al hacer scroll
const btnTop = document.getElementById("btnTop");
window.onscroll = () => {
    btnTop.style.display = window.scrollY > 300 ? "block" : "none"; // Muestra el botón después de hacer scroll
};

btnTop.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" }); // Función para desplazarse hacia arriba al hacer click

let cart = [];
let cartCount = 0;

// Abre el modal con los detalles del plato
function openModal(title, description, price, image) {
    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-description").innerText = description;
    document.getElementById("modal-price").innerText = `Precio: ${price} Soles`;
    
    document.getElementById("modal").style.display = "flex"; // Muestra el modal
}

// Cierra el modal
function closeModal() {
    document.getElementById("modal").style.display = "none"; // Oculta el modal
}

// Añade el plato al carrito
function addToCart() {
    const title = document.getElementById("modal-title").innerText;
    const quantity = document.getElementById("quantity").value || 1; // Asegura que si no se ingresa cantidad, por defecto sea 1
    const price = document.getElementById("modal-price").innerText;
   

    cart.push({ title, quantity, price });
    cartCount += parseInt(quantity); // Suma la cantidad al total del carrito
    document.getElementById("cart-count").innerText = cartCount; // Muestra el total de productos en el carrito
    closeModal(); // Cierra el modal después de añadir al carrito
    updateCartItems(); // Actualiza los elementos en el carrito
}

// Muestra u oculta el carrito lateral
function toggleCart() {
    const cartSidebar = document.getElementById("cart-sidebar");
    cartSidebar.classList.toggle("active"); // Alterna la clase 'active' que maneja la visibilidad
}

// Actualiza la lista de productos en el carrito
function updateCartItems() {
    const cartItemsList = document.getElementById("cart-items");
    cartItemsList.innerHTML = ""; // Vacía el contenido de la lista del carrito

    // Añade los productos del carrito a la lista
    cart.forEach(item => {
        cartItemsList.innerHTML += `<li>${item.quantity}x ${item.title} - ${item.price}</li>`;
    });
}

// Finaliza la compra y limpia el carrito
function checkout() {
    alert("¡Gracias por tu compra!"); // Mensaje de agradecimiento
    cart = []; // Limpia el carrito
    cartCount = 0; // Reinicia el contador de productos
    document.getElementById("cart-count").innerText = cartCount; // Actualiza el contador
    updateCartItems(); // Actualiza los elementos del carrito (vacío)
}

// Función para abrir el carrito
function openCart() {
    document.getElementById("cartSidebar").style.right = "0"; // Despliega el carrito desde la derecha
}

// Función para cerrar el carrito
function closeCart() {
    document.getElementById("cartSidebar").style.right = "-350px"; // Oculta el carrito deslizándolo a la derecha
}
