import { pleaBoxHTML } from './pleaBoxHTML.js'
import { pleaEventHandler, howManyTimes } from './pleaEventHandler.js';

export const pleaBox = () => {
    let box = pleaBoxHTML();
    let container = document.querySelector(".plea");
    container.innerHTML += box;
    
    let dropdown = document.querySelector(".plea_dropdown");
    dropdown.innerHTML += `<option> how many times would you like to file a complaint? </option>`
    for (let i = 0; i < 100; i++) {
        dropdown.innerHTML += `<option class="plea_option" id=${i + 1}> ${i + 1} </option>`
    }
    let button = document.querySelector(".save__button");
    button.addEventListener("click", pleaEventHandler);
    let select = document.querySelector(".plea_dropdown")
    select.addEventListener("change", howManyTimes)
}
