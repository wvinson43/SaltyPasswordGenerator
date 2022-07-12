
let firstPasswordEl = document.getElementById("firstPassword-el")
let secondPasswordEl = document.getElementById("secondPassword-el")
let thirdPasswordEl = document.getElementById("thirdPassword-el")
let fourthPasswordEl = document.getElementById("fourthPassword-el")
let passwordEls = document.getElementsByClassName("password")
let numberInput = document.getElementById("number-input")
document.getElementById("button-el").addEventListener("click", generateRequestedPasswords, true)


function createPassword(){
    let keyChar = "abcdefghijklmnopqrstuvwyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~`!@#$%^7*()_+[]{}<>,.?/"
    let password=""
    let passwordLength=12
    for (let i=0;  i < numberInput.value; i++){
        let randomNumber = Math.floor(Math.random() * keyChar.length)
        password += keyChar.substring(randomNumber, randomNumber + 1)
    }
    return password
}

function generateRequestedPasswords(){
    for(let i = 0; i < passwordEls.length; i++){
        passwordEls[i].textContent = createPassword()
    }
}
