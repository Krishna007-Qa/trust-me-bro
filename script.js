const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// Move "No" button (MOBILE OPTIMIZED)
function moveNoButton() {
  const containerWidth = questionContainer.offsetWidth;
  const containerHeight = questionContainer.offsetHeight;

  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  const maxX = containerWidth - btnWidth;
  const maxY = containerHeight - btnHeight;

  const newX = Math.random() * maxX;
  const newY = Math.random() * maxY;

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
}

// MOBILE TOUCH (instant)
noBtn.addEventListener("touchstart", moveNoButton);

// YES button
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";

  setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "inherit";
    gifResult.play();
  }, 3000);
});