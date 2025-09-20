import createElement from "./createElement.model.js";

let welcomeStyle = 'absolute z-1 inset-0 bg-[url(../assets/b.jpg)] bg-cover text-white';
let style:string = 'flex flex-col space-y-5 w-1/2 absolute top-1/2 left-1/2 -translate-1/2 text-center' ;
let btnStyle:string = 'cursor-pointer bg-purple-700 hover:bg-purple-800 px-5 py-2.5 mb-2'
let inputStyle:string = 'bg-transparent rounded p-2 placeholder-gray-400 outline-none text-center';

let value: string;

const welcomeComponent = createElement('div', {class:welcomeStyle})
const div = createElement('div', {class:style});
const input = createElement('input', {type:'text', name: 'name', placeholder:"write your name...", class:inputStyle}) as HTMLInputElement;
const startGameBttn = createElement('input', {type: 'button', value: 'start Game', class: btnStyle});
div.append(input, startGameBttn);

startGameBttn.addEventListener('click', ()=>{
    value = input.value;
    if(value.trim() === '') input.classList += ' border border-3 border-red-900'
    else {
        div.classList.add('text-2xl')
        div.innerHTML = `Welcome ${value}`;
        setTimeout(() => {welcomeComponent.classList.add('hidden')}, 1500);
    }
})

welcomeComponent.append(div);

export default welcomeComponent;