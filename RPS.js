let answer = prompt("Rock, paper or scissors ? Let\'s play !").toLowerCase()

function checkAnswer(playerMove) {

    if (playerMove === 'rock')
    {
        
        return true
    } else if (playerMove === 'paper') {
        
        return true
    } else if (playerMove === 'scissors') {
        
        return true
    } else {
        return false
    }

}

checkAnswer(answer)

while (checkAnswer(answer) === false) {
    answer = prompt("Sorry what was that ?").toLowerCase()
    checkAnswer(answer)}

    console.log(`You picked ${answer}!`)

let diceRoll = Math.random()*10

let computerPlay = ''

if (diceRoll <= 3.33) {computerPlay = 'rock'} else if (diceRoll <= 6.66) {computerPlay = 'paper'} else {computerPlay = 'scissors'}

console.log(`and I picked ${computerPlay} !`)

