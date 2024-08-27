document.addEventListener('DOMContentLoaded', function() {
    // Follow/Unfollow Button
    const followBtn = document.getElementById('follow-btn');
    followBtn.addEventListener('click', function() {
        if (followBtn.textContent === 'Follow') {
            followBtn.textContent = 'Unfollow';
            followBtn.style.backgroundColor = '#ccc';
        } else {
            followBtn.textContent = 'Follow';
            followBtn.style.backgroundColor = '#ff7f0e';
        }
    });

    // Message Button Alert
    const messageBtn = document.getElementById('message-btn');
    messageBtn.addEventListener('click', function() {
        alert('Message functionality is not yet implemented!');
    });

    // Animate Progress Bars
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(bar => {
        const progressValue = bar.getAttribute('data-progress');
        setTimeout(() => {
            bar.style.width = progressValue + '%';
        }, 500); // Delays the animation to ensure it's noticeable
    });
});
