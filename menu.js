document.addEventListener("DOMContentLoaded", () => {
    // Reset the cart to an empty array on page load
    let cart = [];

    // Clear the cart in localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    const cartNotification = document.getElementById("cart-notification");

    // Update the cart notification to reflect the number of items in the cart
    const updateCartNotification = () => {
        cartNotification.style.display = cart.length > 0 ? "inline" : "none";
        cartNotification.textContent = cart.length;
    };

    // Add item to cart on form submit
    document.querySelectorAll(".menu-card form").forEach((form) => {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const selectedOption = form.querySelector("input[name]:checked").value;
            const cylinderSize = form.closest(".menu-card").querySelector("h2").textContent;

            // Add item to cart array
            cart.push({ size: cylinderSize, option: selectedOption });
            localStorage.setItem("cart", JSON.stringify(cart));

            alert(`Added to cart: ${cylinderSize} - ${selectedOption}`);
            updateCartNotification();
        });
    });

    // Update the cart notification on page load (cart is empty)
    updateCartNotification();
});
