
let pleaAmount = 0;
export const howManyTimes = (event) => {
    let plea = event.target.value //here we are targeting where the change happens and console logging the value of our plea. what i don't get here is if the select is the event where the trigger occurs, why does it log the value of the option???? does this include children elements?
    console.log("target value", plea)
    if (plea === "surprise") {
        //if we choose the option that has a value of surprise, we change our plea variable to be a random amount
        let randomAmount = Math.floor((Math.random() * 100) + 1);
        pleaAmount = randomAmount;
    }
    else {
        //otherwise we set our plea amount variable to be the value of the option selected
        pleaAmount = plea
    }
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