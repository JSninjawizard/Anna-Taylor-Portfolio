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





// PROJECTS Intersection Observer
const projectCards = document.querySelectorAll(".projects__wrapper--card")


const options = {
  threshold: 0.3,
}
console.log(options);

const projectsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    entry.target.classList.toggle("reveal", entry.isIntersecting)

    if (entry.isIntersecting) {
      projectsObserver.unobserve(entry.target)
    }
  })
}, options)

projectCards.forEach(card => {
  projectsObserver.observe(card)
})


// SKILLS Intersection Observer
// const skillsDesign = document.querySelector(".skills__container--design")
const skillsDesign = document.querySelectorAll(".design")
const skillsApp = document.querySelectorAll(".app")

const options1 = {
  threshold: 0.7,
}

const skillsObserver = new IntersectionObserver(function (entries, self) {
  let targets = entries.map(entry => {
    console.log(entry);

    if (entry.isIntersecting) {
      self.unobserve(entry.target)
      return entry.target
    }
  })


  effects(targets);
}, options1);


function effects(targets) {
  gsap.from(targets, {
    textContent: 0,
    duration: 3,
    ease: Expo.easeOut,
    snap: { textContent: 1 },
    stagger: 1,
  }
  );
}


skillsDesign.forEach(el => {
  skillsObserver.observe(el)
})

skillsApp.forEach(el => {
  skillsObserver.observe(el)
})



// Rellax lib
let rellax = new Rellax('.rellax');


// GSAP
// const design = document.querySelectorAll(".design")

// gsap.from(design, {
//   textContent: 0,
//   duration: 3,
//   ease: Expo.easeOut,
//   snap: { textContent: 1 },
//   stagger: 1,
// }
// );

// const app = document.querySelectorAll(".app")
// gsap.from(app, {
//   textContent: 0,
//   duration: 3,
//   ease: Expo.easeOut,
//   snap: { textContent: 1 },
//   stagger: 1,
// }
// );







