"use strict";

const rps = ["batu", "kertas", "gunting"];
const messageEl = document.getElementById("message-el");
const outputEl = document.getElementById("output-el");
const submitBtn = document.querySelector("#submit-choice");
const batuBtn = document.querySelector("#button-batu");
const kertasBtn = document.querySelector("#button-kertas");
const guntingBtn = document.querySelector("#button-gunting");
const allBtn = document.querySelectorAll(".btn");
const yakin = document.querySelector("#u-sure");
const waktuEl = document.querySelector("#waktu");
const playerChoice = [];
const computerChoice = [];
const pilihan = ["batu", "kertas", "gunting"];

const pushPlayerInput = function (push) {
  outputEl.textContent = ``;
  playerChoice.length = 0;
  playerChoice.push(push);
  yakin.textContent = `Apakah anda yakin memilih ${push.toUpperCase()}`;
  return Object.values(playerChoice);
};

const getRandomChoice = function (player) {
  player.length = 0;
  return player.push(rps[Math.floor(Math.random() * rps.length)]);
};

allBtn.forEach((btn, i) =>
  btn.addEventListener("click", function () {
    pushPlayerInput(pilihan[i]);
    submitBtn.style.display = "flex";
  })
);

submitBtn.addEventListener("click", function () {
  yakin.textContent = "";
  computerChoice.length = 0;
  getRandomChoice(computerChoice);
  const output =
    playerChoice == "batu" && computerChoice == "gunting"
      ? "Menang"
      : playerChoice == "kertas" && computerChoice == "batu"
      ? "Menang"
      : playerChoice == "gunting" && computerChoice == "kertas"
      ? "Menang"
      : playerChoice[0] === computerChoice[0]
      ? "Seri"
      : "Kalah";
  outputEl.textContent = `Kamu ${playerChoice[0].toUpperCase()} vs ${computerChoice[0].toUpperCase()} Komputer ||||||| ${output}`;
  submitBtn.style.display = "none";
});

setInterval(function () {
  const waktu = new Date();
  const options = {
    hour: "numeric",
    minute: "numeric",
    day: "numeric",
    date: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
    second: "numeric",
  };
  waktuEl.textContent = new Intl.DateTimeFormat(
    navigator.language,
    options
  ).format(waktu);
}, 1000);
