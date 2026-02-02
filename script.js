const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

/* ---------- MOVE "NO" BUTTON (PC + MOBILE) ---------- */
function moveNoButton(e) {
  // ✅ Prevent text selection / long-press menu on mobile
  if (e) e.preventDefault();

  const containerRect = questionContainer.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const maxX = containerRect.width - btnRect.width;
  const maxY = containerRect.height - btnRect.height;

  const newX = Math.random() * maxX;
  const newY = Math.random() * maxY;

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
}

/* ---------- EVENTS ---------- */
/* PC: move on hover */
noBtn.addEventListener("pointerenter", moveNoButton);

/* Mobile: move instantly on tap */
noBtn.addEventListener("pointerdown", moveNoButton);

/* ---------- YES BUTTON ---------- */
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";

  setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "inherit";
    gifResult.play();
  }, 3000);
});
