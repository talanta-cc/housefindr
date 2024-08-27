window.addEventListener('load', function() {
    const housesContainer = document.getElementById('houses-container');
    const houses = JSON.parse(localStorage.getItem('houses')) || [];

    houses.forEach(function(house, index) {
        // Create house card
        const houseCard = document.createElement('div');
        houseCard.classList.add('house-card');

        // Add image
        const img = document.createElement('img');
        img.src = house.image;
        houseCard.appendChild(img);

        // Add house details
        const houseDetails = `
            <h3>${house.name}</h3>
            <p><strong>Location:</strong> ${house.location}</p>
            <p><strong>Type:</strong> ${house.type}</p>
            <p><strong>Price:</strong> $${house.price}</p>
            <p>${house.description}</p>
            <div class="features"><strong>Features:</strong> ${house.features}</div>
            <div class="remove-btn" data-index="${index}">Remove House</div>
        `;
        houseCard.innerHTML += houseDetails;

        // Add remove functionality
        houseCard.querySelector('.remove-btn').addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            removeHouse(index);
        });

        // Add to houses container
        housesContainer.appendChild(houseCard);
    });
});

function removeHouse(index) {
    let houses = JSON.parse(localStorage.getItem('houses')) || [];
    houses.splice(index, 1);
    localStorage.setItem('houses', JSON.stringify(houses));
    location.reload(); // Reload the page to update the list
}
