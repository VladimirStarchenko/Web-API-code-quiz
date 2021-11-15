const highScoreList = document.querySelector("#highscores");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoreList.innerHTML = highScores
  .map((score) => {
    return `<li class="high-score>${initial.initial} - ${score.timeRemaining}</li>`;
  })
  .join("");
