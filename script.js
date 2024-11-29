document.addEventListener("DOMContentLoaded", function () {
    const gasSlider = document.querySelector(".gas-slider");

    // Clone the items for continuous scrolling
    const clone = gasSlider.innerHTML;
    gasSlider.innerHTML += clone;

    // Infinite animation is handled in CSS, so no additional JavaScript is needed unless you want control.
});

document.querySelector('.search-btn').addEventListener('click', function () {
    const query = document.querySelector('.search input').value.toLowerCase();
    const gasItems = document.querySelectorAll('.gas-item');

    gasItems.forEach(item => {
        const gasName = item.querySelector('p').textContent.toLowerCase();
        if (gasName.includes(query)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});
