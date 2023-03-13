//hämta totalSumma & namn
export function showHighscore(username, sumPoints) {
  //localstorage.getItem...
  localStorage.getItem("savedHighScore") || [];
  //ta emot username & score
  //ta ut usernamne o score i html
  const userScore = [{ username, sumPoints }];
  //localStorage.setItem
  localStorage.setItem("savedHighScore", userScore);
}
