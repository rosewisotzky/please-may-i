
let pleaAmount = 0;
export const howManyTimes = (event) => {
    pleaAmount = event.target.value
}

export const pleaEventHandler = (event) => {
    console.log("u clicked me")
    let displayArea = document.querySelector(".plea_display")
    let input = document.querySelector(".plea_box")
    let inputVal = input.value
    displayArea.innerHTML = "";

    for (let i = 0; i < pleaAmount; i++) {
        displayArea.innerHTML += `<br> ${inputVal} `;
    }
}