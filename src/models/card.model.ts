import createElement from "./createElement.model.js";
import {showCard} from "./showCard.model.js";
import shuffleArr  from "./shuffleCards.model.js";

let imgId: number[] = shuffleArr();

let cardsComponent = createElement('div', {class:"card-container container flex flex-wrap place-content-center"})

for (let i: number = 0; i < 20; i++) {
  cardsComponent.appendChild(createCard(i, imgId));
}

function createCard(i: number, imgIds: number[]): HTMLElement {
  let cardContainer = createElement('div', {id:`${imgIds[i]}`, class: "card relative w-21 h-21 m-3 cursor-pointer transform-3d transition"});
  let imgfront = createElement('img', {src:"../assets/mark.png", class:"w-21 h-21 absolute backface-hidden"});
  let imgBack = createElement('img', {src: `../assets/${imgIds[i]}.png`, class: "back w-20 h-20 absolute backface-hidden bg-white border border-[#bebbbb] rotate-y-180"})
  imgfront.addEventListener("click", () => {showCard(imgfront);});
  cardContainer.appendChild(imgfront);
  cardContainer.appendChild(imgBack);
  return cardContainer;
}

export default cardsComponent;
