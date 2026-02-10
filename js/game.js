const log = document.getElementById("log");
const startBtn = document.getElementById("startBtn");

let player;
let enemy;

function writeLog(message) {
  log.textContent += message + "\n";
}

function startGame() {
  log.textContent = "";

  player = {
    name: "Hero",
    health: 100,
    attack: 10
  };

  enemy = {
    name: "Goblin",
    health: 50,
    attack: 6
  };

  writeLog("⚔️ Welcome to the RPG Game!");
  writeLog("You wake up in a dark forest...");
  writeLog(`A wild ${enemy.name} appears!`);
  writeLog(`Your HP: ${player.health}`);
  writeLog(`${enemy.name} HP: ${enemy.health}`);
}

startBtn.addEventListener("click", startGame);
