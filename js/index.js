const statistics = [
  { percentage: 84, label: "Reported increased energy throughout their day" },
  { percentage: 78, label: "Reported feeling more focused" },
  { percentage: 89, label: "Reported a sense of calmness & steady mood" },
  {
    percentage: 90,
    label:
      "Reported feeling an overall increased wellness in their gut skin, hair, and physical health",
  },
];

const statisticsContainer = document.getElementById("statistics-container");
const ul = document.createElement("ul");

statistics?.forEach((stat) => {
  const li = document.createElement("li");
  const h2 = document.createElement("h2");
  h2.className = "statistics-percentage";
  h2.textContent = `${stat.percentage}%`;

  const p = document.createElement("p");
  p.className = "statistics-label";
  p.textContent = stat.label;

  li.appendChild(h2);
  li.appendChild(p);
  ul.appendChild(li);
});

statisticsContainer.appendChild(ul);

const reviews = Array(8).fill({
  stars: "★★★★★",
  text: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."`,
  name: "Name Surname",
  position: "Position, Company name"
});

const cardsInner = document.getElementById("cardsInner");
const cardsPerPage = 3;
let currentIndex = 0;

function renderCards() {
  cardsInner.innerHTML = "";

  reviews.forEach((review) => {
    const card = document.createElement("div");
    card.className = "review-card";
    card.innerHTML = `
      <div class="stars">${review.stars}</div>
      <div class="review-text">${review.text}</div>
      <div class="reviewer">
        <div class="avatar"></div>
        <div class="reviewer-info">
          <strong>${review.name}</strong>
          <span>${review.position}</span>
        </div>
      </div>
    `;
    cardsInner.appendChild(card);
  });

  updateSliderPosition();
}

function updateSliderPosition() {
  const offset = currentIndex * (320); // card width + gap
  cardsInner.style.transform = `translateX(-${offset}px)`;
}

document.getElementById("rightBtn").addEventListener("click", () => {
  const maxIndex = reviews.length - cardsPerPage;
  if (currentIndex < maxIndex) {
    currentIndex++;
    updateSliderPosition();
  }
});

document.getElementById("leftBtn").addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSliderPosition();
  }
});

renderCards();