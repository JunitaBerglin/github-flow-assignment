import { Player } from "./models/Player";

export function showHighscore(username, sumPoints) {
  let highScores = JSON.parse(localStorage.getItem("savedHighScore") || "[]");

  let newPlayer: Player = new Player(username, sumPoints);

  highScores.push(newPlayer);

  localStorage.setItem("savedHighScore", JSON.stringify(highScores));

  let newHighscores = JSON.parse(
    localStorage.getItem("savedHighScore") || "[]"
  );

  //byt ut denna div mot div i html kod
  let divElement: HTMLDivElement = document.createElement("div");

  let header = document.createElement("h2");
  header.innerText = "Highscore";
  divElement.appendChild(header);

  for (let i = 0; i < newHighscores.length; i++) {
    let wrapper = document.createElement("div");
    wrapper.style.display = "flex";
    divElement.appendChild(wrapper);

    let username = document.createElement("h4");
    username.innerHTML = newHighscores[i].username;
    wrapper.appendChild(username);

    let score = document.createElement("p");
    score.innerHTML = newHighscores[i].score;
    wrapper.appendChild(score);
  }
}
