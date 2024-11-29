document.addEventListener("DOMContentLoaded", () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const orderItemsContainer = document.getElementById('order-items');
    const totalCostElement = document.getElementById('total-cost');

    if (cart.length === 0) {
        orderItemsContainer.innerHTML = '<p>No items in cart. <a href="menu.htm">Go back to the menu</a>.</p>';
        totalCostElement.textContent = '0'; // Set total cost to 0 if cart is empty
    } else {
        let total = 0;
        orderItemsContainer.innerHTML = ''; // Clear any existing items

        cart.forEach((item, index) => {
            if (item.size && item.option) { // Check if both size and option are valid
                const itemElement = document.createElement('div');
                itemElement.innerHTML = `
                    <p><strong>Item ${index + 1}:</strong> ${item.size} - ${item.option}</p>
                `;
                orderItemsContainer.appendChild(itemElement);

                // Extract the price from the option and add it to the total
                const price = parseInt(item.option.split(' - ')[1].replace('Rwf', '').replace(',', ''));
                total += price;
            } else {
                // If any item is missing data, log an error (can be handled more gracefully)
                console.error('Cart item has missing data:', item);
            }
        });

        // Update the total cost dynamically
        totalCostElement.textContent = total.toLocaleString(); // Format the total cost with commas
    }
});
