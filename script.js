alert("HEY buddy I'm Gokul");
alert("Are you ready to play the game");

const gameBoard = document.getElementById("game-board");
const restartButton = document.getElementById("restart");

let cards = [
  { id: 1, img: "./public/ajith.webp" },
  { id: 2, img: "./public/vijay.webp" },
  { id: 3, img: "./public/surya.jpg" },
  { id: 4, img: "./public/vikram.jpg" },
  { id: 2, img: "./public/gokul.jpeg" },
  { id: 1, img: "./public/ajith.webp" },
  { id: 2, img: "./public/vijay.webp" },
  { id: 3, img: "./public/surya.jpg" },
  { id: 4, img: "./public/vikram.jpg" },
  { id: 2, img: "./public/gokul.jpeg" },
];

let flippedCards = [];
let matchedCards = [];

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function initGame() {
  const shuffledCards = shuffle(cards);
  gameBoard.innerHTML = "";

  shuffledCards.forEach((card, index) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card", "relative");
    cardElement.setAttribute("data-id", card.id);

    const cardBack = document.createElement("div");
    cardBack.classList.add(
      "card-back",
      "absolute",
      "inset-0",
      "bg-gray-300",
      "rounded"
    );
    cardElement.appendChild(cardBack);

    const cardImg = document.createElement("img");
    cardImg.src = card.img;
    cardImg.classList.add("w-full", "h-full", "rounded");
    cardElement.appendChild(cardImg);

    cardElement.addEventListener("click", flipCard);
    gameBoard.appendChild(cardElement);
  });
}

function flipCard() {
  const card = this;
  if (flippedCards.length < 2 && !card.classList.contains("flip")) {
    card.classList.add("flip");
    flippedCards.push(card);

    if (flippedCards.length === 2) {
      checkMatch();
    }
  }
}

function checkMatch() {
  const [card1, card2] = flippedCards;
  const id1 = card1.getAttribute("data-id");
  const id2 = card2.getAttribute("data-id");

  if (id1 === id2) {
    matchedCards.push(card1, card2);
    flippedCards = [];
    if (matchedCards.length === cards.length) {
      setTimeout(() => alert("Congratulations.! You are Win!"), 300);
    }
  } else {
    setTimeout(() => {
      card1.classList.remove("flip");
      card2.classList.remove("flip");
      flippedCards = [];
    }, 1000);
  }
}

restartButton.addEventListener("click", () => {
  matchedCards = [];
  flippedCards = [];
  initGame();
});

initGame();
