import { Player } from "./models/Player";

//hämta totalSumma & namn
export function showHighscore(username, sumPoints) {
  //localstorage.getItem...
  let highScores = JSON.parse(localStorage.getItem("savedHighScore") || "[]");
  //ta emot username & score
  let newPlayer: Player = new Player(username, sumPoints);

  highScores.push(newPlayer);
  //localStorage.setItem
  localStorage.setItem("savedHighScore", JSON.stringify(highScores));

  let newHighscores = JSON.parse(
    localStorage.getItem("savedHighScore") || "[]"
  );

  //ta ut usernamne o score i html
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
