/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
    console.log("Hello Rigo from the console! ");
  });
};

function generateExcuse() {
  let who = ["My car", "A bee", "My cousin", "My nose"];
  let verb = ["ate", "drove", "shook", "pushed"];
  let thing = ["a nut", "my pencil", "an ice-cream", "a butterfly"];
  let when = [
    "yesterday",
    "when I was born",
    "last Summer",
    "on Christmas Eve"
  ];

  let whoInd = Math.floor(Math.random() * who.length);
  let verbInd = Math.floor(Math.random() * verb.length);
  let thinInd = Math.floor(Math.random() * thing.length);
  let whenInd = Math.floor(Math.random() * when.length);

  let excuse =
    who[whoInd] +
    " " +
    verb[verbInd] +
    " " +
    thing[thinInd] +
    " " +
    when[whenInd];

  return excuse;
}
