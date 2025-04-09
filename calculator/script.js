const screen = document.querySelector("p");
/*tasti digitazione*/
function digit(button) {
    let buttonText = button.textContent;
    screen.textContent += buttonText;
}
/*AC*/
function clearScreen() {
    screen.textContent = "";
}
/*risultato*/
function enter() {
    let expression = screen.textContent;
    expression = expression.replace(/x/g, '*').replace(/÷/g, '/');
    let result = eval(expression);
    screen.textContent = result;
}
/*delete*/
let last = screen.textContent[screen.textContent.lenght -1]
function deleteLast() {
    screen.textContent -= last;
}