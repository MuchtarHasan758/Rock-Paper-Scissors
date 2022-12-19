const rps = ["batu", "kertas", "gunting"]
const pilihanPemain = prompt("Batu, Kertas, or Gunting (Harus benar-benar ketiknya)")
const playerSelection = pilihanPemain.toLowerCase();
const computerSelection = getComputerChoice()
const messageEl = document.getElementById("output-el")
const outputEl = document.getElementById("message-el")

function getComputerChoice() {
    return rps[Math.floor(Math.random() * rps.length)]
}

function playRound(playerSelection, computerSelection) {
    let sum = "(Kamu) " + playerSelection + " - " + computerSelection + " (Komputer)"
    console.log(sum);
    if (playerSelection === computerSelection) {
        outputEl.textContent = sum
        messageEl.textContent = "Seri"
    } else if (sum === "batu-gunting" || sum === "gunting-kertas" || sum === "kertas-batu") {
        outputEl.textContent = sum
        messageEl.textContent = "Menang"
    } else {
        outputEl.textContent = sum
        messageEl.textContent = "Coba lagi"
    }
}

console.log(playRound(playerSelection, computerSelection))