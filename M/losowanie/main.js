let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber)
let guess;

function checkGuess() {
    guess = document.getElementById("guess").value;
    if (isNaN(guess)) {
        document.getElementById("result").textContent = "To nie jest liczba. Spróbuj jeszcze raz.";
    } else {
        let result = checkGuessLogic(randomNumber, parseInt(guess));
        document.getElementById("result").textContent = result;
        if (result.includes("Trafiłeś")) {
            document.getElementById("guess").disabled = true;
            document.querySelector("button").disabled = true;
        }
    }
}

function checkGuessLogic(randomNumber, guess) {
    if (guess < randomNumber) {
        return "Za mała! Spróbuj jeszcze raz.";
    } else if (guess > randomNumber) {
        return "Za duża! Spróbuj jeszcze raz.";
    } else {
        return "Trafiłeś! Gratulacje!";
    }
}