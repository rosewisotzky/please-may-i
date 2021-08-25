
let pleaAmount = 0;
export const howManyTimes = (event) => {
    pleaAmount = event.target.value
}

export const pleaEventHandler = (event) => {
    let displayArea = document.querySelector(".plea_display")
    let input = document.querySelector(".plea_box")
    let inputVal = input.value
    displayArea.innerHTML = "";

    for (let i = 0; i < pleaAmount; i++) {
        let randomNum = Math.floor((Math.random() * pleaAmount) + 1);
        console.log("random number", randomNum);
        console.log("index no. in loop", i);
        if (i === randomNum) {

            displayArea.innerHTML += `<br> ${inputVal.toUpperCase()} `;
        }
        else {
            displayArea.innerHTML += `<br> ${inputVal}`;
        }
    }
}