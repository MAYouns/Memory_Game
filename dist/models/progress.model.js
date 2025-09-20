import createElement from "./createElement.model.js";
let progDiv = createElement('div', { class: "w-full bg-gray-200 rounded-full" });
let div = createElement('div', { style: "width:0;", class: "bg-red-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" }, '0');
progDiv.appendChild(div);
export function changeValue(value) {
    div.style.width = value + "%";
    div.innerHTML = value + "%";
}
export { progDiv };
