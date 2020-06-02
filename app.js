const choices = document.querySelectorAll('.container-modal .modal-choice i');
const modal = document.querySelector('.container-modal');
const modalChoice = document.querySelector('.modal-choice');
const modalPlayer = document.querySelector('.modal-player h2');

const containerCards = document.querySelectorAll('.container-allcard .container-card .card');

// let choice;
const circleSign = '<i class="fas fa-circle"></i>';
const crossSign = '<i class="fas fa-times"></i>';

// decide what sign will start the game
let beginPlayerRandom = 0;

// 0 = X
// 1 = O 



// choices[0].addEventListener('click', () => {
//     beginPlayerRandom = 4;
// });




// CARD SIGN
containerCards.forEach(containerCard => {
    containerCard.addEventListener('click', () => {
        // cant change the content if a card is clicked once
        if (containerCard.classList.contains('circle') || containerCard.classList.contains('cross')) {
            return false;
        } else {
            if (beginPlayerRandom === 0) {
                containerCard.innerHTML = circleSign;
                containerCard.classList.add('circle');
                // switch the player
                beginPlayerRandom++;
            } else {
                containerCard.innerHTML = crossSign;
                containerCard.classList.add('cross');
                // switch the player
                beginPlayerRandom--;
            }
        }
    });
});