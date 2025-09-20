import { changeValue } from "./progress.model.js";
import { resetCards } from "./showCard.model.js";
import shuffleArr from "./shuffleCards.model.js";
export default function playAgain() {
    changeValue(0);
    resetCards();
    const arr = shuffleArr();
    let cards = document.querySelectorAll(".card");
    let imgBack = document.querySelectorAll('.back');
    for (let i = 0; i < cards.length; i++) {
        cards[i]?.setAttribute("id", `${arr[i]}`);
        imgBack[i]?.setAttribute("src", `../assets/${arr[i]}.png`);
    }
}
