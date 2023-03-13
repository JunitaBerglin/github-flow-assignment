import { Player } from "./models/Player";

//hämta totalSumma & namn
export function showHighscore(username, sumPoints) {
  //localstorage.getItem...
  let highScores = JSON.parse(localStorage.getItem("savedHighScore") || "[]");
  //ta emot username & score
  //ta ut usernamne o score i html
  let newPlayer: Player = new Player(username, sumPoints);
  highScores.push(newPlayer);
  //localStorage.setItem
  localStorage.setItem("savedHighScore", JSON.stringify(highScores));
}
