export const pleaEventHandler = (event) => {
    console.log("u clicked me")
    let input = document.querySelector(".plea_box")
    let inputVal = input.value
    let displayArea = document.querySelector(".plea_display")
    console.log(inputVal)
    displayArea.innerHTML = inputVal;
}