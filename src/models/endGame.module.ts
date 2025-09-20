import createElement from "./createElement.model.js";
import playAgain from "./resetTheGame.model.js";

let btnStyle:string = 'cursor-pointer bg-purple-700 hover:bg-purple-800 px-5 py-2.5 mb-2 text-white';

const endGameComponent = createElement('div', {class:' flex flex-col items-center absolute z-3 inset-0 bg-[rgb(249,200,200,0.8)] hidden'});
const img = createElement('img', {src: '../assets/congratulation.png',class: 'my-9 w-70 h-1/2 '});
const playAgainBtn = createElement('input', {type: 'button', value: 'play again', class: btnStyle});

playAgainBtn.addEventListener('click', ()=>{
    endGameComponent.classList.add('hidden')
    playAgain();
});

endGameComponent.append(img, playAgainBtn);

export default endGameComponent;