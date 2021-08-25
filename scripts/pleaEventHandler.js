
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
        //declaring the randomNumber inside of the loop -- with every iteration there will be a new random number to compare against the index value of each 'plea'. if it's a match then we go uppercase and if not we go lowercase.
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