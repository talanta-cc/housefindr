document.addEventListener('DOMContentLoaded', function () {
    loadReviews();
});

function loadReviews() {
    let reviews = localStorage.getItem('reviews') ? JSON.parse(localStorage.getItem('reviews')) : [];
    const reviewList = document.querySelector('.review-list');
    const reviewCount = document.getElementById('review-count');

    reviewCount.textContent = `${reviews.length} reviews`;

    reviews.forEach(review => {
        const reviewItem = document.createElement('div');
        reviewItem.classList.add('review-item');

        reviewItem.innerHTML = `
            <div class="review-author">
                <p><strong>${review.username}</strong></p>
                <p>${review.date}</p>
            </div>
            <div class="review-text">
                <div class="stars">${generateStars(review.rating)}</div>
                <p>${review.reviewText}</p>
                <div class="like">
                    <button onclick="toggleLike(this)">👍 Like</button>
                </div>
            </div>
        `;

        reviewList.appendChild(reviewItem);
    });
}

function generateStars(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        stars += i < rating ? '⭐️' : '⭐️';
    }
    return stars;
}

function toggleLike(button) {
    if (button.innerText === '👍 Like') {
        button.innerText = '👍 Liked';
        button.style.backgroundColor = '#ff9900';
    } else {
        button.innerText = '👍 Like';
        button.style.backgroundColor = '#333';
    }
}
