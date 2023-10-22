//highScore.js

let scoresBtn = document.querySelector ("#view-high-scores");

function printHighscores() {
    let highscores = JSON.parse (
        window.localStorage.getItem("highscores")

    ) || [];
  highscores.sort(function (a, b) {
    return b.score - a.score;
  });
  highscores.forEach (function(score){
    let liTag = document.createElement("li");
    liTag.textContent = score.initials + "-" + score.score;
    let olEl.appendChild(liTag);
  });
}

function clearHighscores () {
    Window.localStorage.removeItem ("highscores");
    window.localStorage.reload ();
}
document.getElementById("clear").onclick = clearHighscores;
printHighscores();