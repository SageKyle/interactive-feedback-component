
// UI VARIABLES
let star = document.querySelector('.stars-selected');
let numberOfStars = document.querySelector('.rating-container');
let thankYouPage = document.querySelector('.thank-you-container');
let feedback = document.querySelector('.number-of-stars')
let submit = document.querySelector('.submit')
let welcomeSection = document.querySelector('.container');


// FEEDBACK EVENT LISTENER
numberOfStars.addEventListener('click', function (e) {
    if (e.target.className === 'rating-label') {
        e.target.previousElementSibling.checked = true;
        star.textContent = e.target.textContent;
    }
})

// SUBMIT EVENT LISTENER
submit.addEventListener('click', function (e) {
    if (star.textContent.length === 0) {
        star.textContent = '0';
        thankYouPage.style.display = 'grid';
        welcomeSection.style.display = 'none';
    } else {
        thankYouPage.style.display = 'grid';
        welcomeSection.style.display = 'none';

    }
});
