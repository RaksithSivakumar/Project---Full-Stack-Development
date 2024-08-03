const cardValues = ['A','B','C','D','E','F','G','H']

let cards = [...cardValues, ...cardValues].sort(() => Math.random() - 0.5);

let firstCard = null;
let secondCard  = null;
let lockBoard = false;
let matchedPairs = 0;

function createCards() {
    const gameBoard = document.querySelector('game-board');
    cards.forEach(value => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dateset.value = value;
        card.addEventListener('click', flipCard);
        gameBoard.appendChild(card);
    });

}

function flipcard() {
    if (lockBoard) return;
    if (this === fristCard) return;

    this.classList.add('flipped');
    this.textContent = this.dataset.value;

    if(!firstCard) {
        frist = this;
        return;
    }

    secondCard = this;
    lockBoard = true;

    checkForMatch();
}

function checkForMatch() {
    if(firstCard.dataset.value === secondCard.dataset.value) {
        disableCards();
        matchedPairs++;
        if (matchedPairs === cardValues.length) {
            setTimeout(resetGame, 1000);
        }
    } else {
        unflipCard();
    }
}

function disableCards() {
    firstCard.removeEventListener('click', flipcard);
    secondCard.removeEventListener('click', flipcard);
    resetBoard();
}

function unflipCards() {
    setTimeout(() => {
        firstCard.classList.remove('flipcard');
        secondCard.classList.remove('flipcard');
        firstCard.textContent = '';
        secondCard.textContent = '';
        resetBoard();

    }, 1000);
}

function resetBoard() {
    [fristCard, secondCard, lockBoard] = [null, null, false];
}

function resetGame() {
    document.querySelectorAll('.card').forEach(card => {
        card.remove();
    });
    cards = [...cardValues, ...cardVlaues].sort(() => Math.random() - 0.5);
    matchedPairs = 0;
    createCards();
}

createCards();