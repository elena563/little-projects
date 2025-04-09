let pword = document.getElementById("password");
let time = document.getElementById("time");
let strenght = document.getElementById("strenght")
let bar = document.getElementById("howStrong");
let eye = document.querySelector("ion-icon");
eye.onclick = seePassword;
bar.style.width = "0px";
password.oninput = function () {
    getTime();
    getStrenght();
};
alphaUpp = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
'Y', 'Z'];
symbols = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '{', '[', '}', ']', ':', ';', '<', '>', ',', '.',
'?', '/'];
numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
function getTime() {
    let userPword = pword.value;
    hasUpper = false;
    hasNum = false;
    hasSymbol = false;
    //check caratteri
    for (let i = 0; i < alphaUpp.length; i++) {
        let carattere = alphaUpp[i];
        if (userPword.includes(carattere)) {
            hasUpper = true;
        }
    }
    for (let i = 0; i < numbers.length; i++) {
        let carattere = numbers[i];
        if (userPword.includes(carattere)) {
            hasNum = true;
        }
    }
    for (let i = 0; i < symbols.length; i++) {
        let carattere = symbols[i];
        if (userPword.includes(carattere)) {
            hasSymbol = true;
        }
    }
    if (userPword.length < 7) {
        //password ha meno di 7 caratteri
        time.textContent = "0 seconds";
    } else if (userPword.length === 7) {
        //password ha 7 caratteri
        if (hasUpper && hasNum) {
            if (hasSymbol) {
                time.textContent = "6 minutes";  
            } else{
            time.textContent = "1 minutes";
            }
        } else {
            time.textContent = "0 seconds";
        }      
    } else if (userPword.length === 8) {
        //password ha 8 caratteri
        if (hasUpper) {
            if (hasNum) {
                if (hasSymbol) {
                    time.textContent = "8 hours";
                } else {
                    time.textContent = "1 hour";
                }
            } else {
                time.textContent = "22 minutes";
            }
        } else {
            time.textContent = "0 seconds";
        }
    } else if (userPword.length === 9) {
        //password ha 9 caratteri
        if (hasUpper) {
            if (hasNum) {
                if (hasSymbol) {
                    time.textContent = "3 weeks";
                } else {
                    time.textContent = "3 days";
                }
            } else {
                time.textContent = "19 hours";
            }
        } else {
            time.textContent = "2 minutes";
        }
    } else if (userPword.length === 10) {
        //password ha 10 caratteri
        if (hasUpper) {
            if (hasNum) {
                if (hasSymbol) {
                    time.textContent = "5 years";
                } else {
                    time.textContent = "7 months";
                }
            } else {
                time.textContent = "1 month";
            }
        } else {
            time.textContent = "1 hour";
        }
    } else if (userPword.length === 11) {
        //password ha 11 caratteri
        if (hasUpper) {
            if (hasNum) {
                if (hasSymbol) {
                    time.textContent = "400 years";
                } else {
                    time.textContent = "41 years";
                }
            } else {
                time.textContent = "5 years";
            }
        } else {
            time.textContent = "1 day";
        }
    } else if (userPword.length === 12) {
        //password ha 12 caratteri
        if (hasUpper) {
            if (hasNum) {
                if (hasSymbol) {
                    time.textContent = "34000 years";
                } else {
                    time.textContent = "2000 years";
                }
            } else {
                time.textContent = "300 years";
            }
        } else {
            time.textContent = "3 weeks";
        }
    } else {
        time.textContent = "> 34000 years";
    }
}

function getStrenght() {
     if (time.textContent.includes("seconds")) {
        strenght.textContent = "Weak";
        strenght.style.color = "red";
        bar.style.width = "40px";
        bar.style.backgroundColor = "red";
        bar.style.boxShadow = "0 -5px 5px #B30000 inset"
    } else if (time.textContent.includes("minutes")||time.textContent.includes("minute")) {
        strenght.textContent = "Poor";
        strenght.style.color = "#FF9494";
        bar.style.width = "80px";
        bar.style.backgroundColor = "#FF9494";
        bar.style.boxShadow = "0 -5px 5px #FF6161 inset"
    } else if (time.textContent.includes("hours")||time.textContent.includes("hour")) {
        strenght.textContent = "Moderate";
        strenght.style.color = "#F8C44A";
        bar.style.width = "120px";
        bar.style.backgroundColor = "#F8C44A";
        bar.style.boxShadow = "0 -5px 5px #BB8507 inset"
    } else if (time.textContent.includes("day")||time.textContent.includes("days")||time.textContent.includes("weeks")||time.textContent.includes("month")||
    time.textContent.includes("months")) {
        strenght.textContent = "Strong";
        strenght.style.color = "#FFFF85";
        bar.style.width = "160px";
        bar.style.backgroundColor = "#FFFF85";
        bar.style.boxShadow = "0 -5px 5px #D1D100 inset"
    } else {
        strenght.textContent = "Very Strong";
        strenght.style.color = "#7AFF7A";
        bar.style.width = "200px";
        bar.style.backgroundColor = "#7AFF7A";
        bar.style.boxShadow = "0 -5px 5px #00C700 inset"
    }
}

//mostra/nasconde la password
function seePassword() {
    pword.type = (pword.type === "password") ? pword.type = "text" : pword.type = "password";
}