import  { pleaBox } from './pleaBox.js'

let box = pleaBox();
let container = document.querySelector(".plea");
container.innerHTML += box;