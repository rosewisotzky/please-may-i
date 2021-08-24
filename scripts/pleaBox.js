import { pleaBoxHTML } from './pleaBoxHTML.js'
export const pleaBox = () => {
    let box = pleaBoxHTML();
    let container = document.querySelector(".plea");
    container.innerHTML += box;
    let dropdown = document.querySelector(".plea_dropdown");
    for (let i = 0; i < 100; i++) {
        dropdown.innerHTML += `<option id=${i + 1}> ${i + 1} </option>`
    }
}
