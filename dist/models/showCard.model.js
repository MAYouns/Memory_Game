import { changeValue } from "./progress.model.js";
import endGameComponent from "./endGame.module.js";
let previousEle;
let isFliped = false;
let imgWon = 0;
const fail = new Audio("../assets/error.mp3");
const success = new Audio("../assets/good.wav");
export function showCard(currentElement) {
    let card = currentElement.parentElement;
    card.classList.add("rotate-y-180");
    if (!isFliped) {
        previousEle = card;
        isFliped = true;
    }
    else {
        if (previousEle.id == card.id) {
            imgWon++;
            changeValue(imgWon * 10);
            imgWon == 10 ? endGameComponent.classList.remove("hidden") : success.play();
        }
        else {
            setTimeout(() => {
                previousEle.classList.remove("rotate-y-180");
                card.classList.remove("rotate-y-180");
            }, 400);
            fail.play();
        }
        isFliped = false;
    }
}
export function resetCards() {
    isFliped = false;
    imgWon = 0;
    let cards = document.querySelectorAll(".card");
    for (let i = 0; i < cards.length; i++)
        cards[i]?.classList.remove("rotate-y-180");
}
