import createElement from './models/createElement.model.js';
import welcomeComponent from './models/welcome.model.js';
import { progDiv } from "./models/progress.model.js";
import cardsComponent from "./models/card.model.js";
import endGameComponent from './models/endGame.module.js';
const headingStyle = 'text-white text-center mt-3 text-2xl';
const heading = createElement('h1', { class: headingStyle }, 'Memory Game');
document.body.prepend(heading);
document.getElementById("app")?.append(welcomeComponent, progDiv, cardsComponent, endGameComponent);
