// Wait for the DOM to finish loading before running the game
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }
    runGame("addition");
});

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType) {
    // Creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}


/**
 *Gets the operands (the numbers) and operator (plus, minus etc)
 dirrctly from the dom, and returns the correct answer.
 */

 function checkAnswer() {
 let operand1 = parseInt(document.getElementbyId('operand1'). innerText);
 let operand2 = parseInt(document.getElementbyId('operand2'). innerText);
 let operator = document.getElementbyId("operator"). innerText;

 if (operator === "+") {
    return [operand1 + operand2, "addition"];
    } else {
    alert(`unimplemented operator ${operator}`);
    throw `unimplemented operator${operator}.Aborting!`;
    }
 
}

function calculateCorrectAnswer() {
    // To be implemented
}

function incrementScore() {
    // To be implemented
}

function incrementWrongAnswer() {
    // To be implemented
}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
}

function displaySubtractionQuestion() {
    // To be implemented
}

function displayMultiplicationQuestion() {
    // To be implemented
}



