// Navbar
const links = document.querySelectorAll(".vertical-navbar__links--link");
const spans = document.querySelectorAll(".navlink__span");

links.forEach((link) => {
  link.addEventListener("mouseenter", function () {
    spans.forEach((span) => {
      span.classList.add("active-span");
    });
  });

  link.addEventListener("mouseleave", function () {
    spans.forEach((span) => {
      span.classList.remove("active-span");
    });
  });
});

// TESTIMONAILS
const cardContainer = document.querySelector(".cards__container");

const cards = Array.from(cardContainer.children);
console.log(cards);

// buttons
const left = document.querySelector(".testimonial__arrow--left");
const right = document.querySelector(".testimonial__arrow--right");

const cardWidth = cards[0].getBoundingClientRect().width;
console.log(cardWidth);

const cardWidths = (card, index) => {
  card.style.left = cardWidth * index + "px";
  console.log((card.style.left = cardWidth * index + "px"));
};
cards.forEach(cardWidths);

left.addEventListener("click", function () {
  const currentCard = cardContainer.querySelector(".current-card");
  const nextCard = currentCard.nextElementSibling;
  const howMuchToMove = nextCard.style.left;
  currentCard.classList.add("active-card");

  cards.forEach((card, index) => {
    card.style.transform = `translateX(-${howMuchToMove})`;
  });

  currentCard.classList.remove("current-card");
  currentCard.classList.remove("active-card");
  nextCard.classList.add("current-card");
  nextCard.classList.add("active-card");
});

right.addEventListener("click", function () {
  const currentCard = cardContainer.querySelector(".current-card");
  const nextCard = currentCard.previousElementSibling;
  const howMuchToMove = nextCard.style.left;
  cards.forEach((card) => {
    card.style.transform = `translateX(-${howMuchToMove})`;
  });
  currentCard.classList.remove("current-card");
  currentCard.classList.remove("active-card");
  nextCard.classList.add("current-card");
  nextCard.classList.add("active-card");
});
