// prompt user for input and store as var answer, case insensitive //
let roundCount = 0
let gameStarted = false
if (gameStarted = false) {
    let answer = prompt("Rock, paper or scissors ? Let\'s play !").toLowerCase()
} else { let answer = prompt('OK, next round, pick your move !').toLowerCase()
}

// function to automatically check if player input is one of three possible moves //
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

// prompts again until user input is one of three possible moves //
while (checkAnswer(answer) === false) {
    answer = prompt("Sorry what was that ?").toLowerCase()
    checkAnswer(answer)}

    console.log(`You picked ${answer}!`)


// generate random number between 0 and 2 //
let diceRoll = Math.floor(Math.random()*(2+1))
console.log(diceRoll)

let computerPlay = ''

// picks one of three possible moves for the computer to play, depending and the random number generated //
if (diceRoll === 0 ) {computerPlay = 'rock'} else if (diceRoll === 1 ) {computerPlay = 'paper'} else if (diceRoll === 2) {computerPlay = 'scissors'}

console.log(`and I picked ${computerPlay} !`)

//assign number between 0 and 2 to the player's move
let playerRoll = ''

if (answer === 'rock') {playerRoll = 0} else if (answer === 'paper') {playerRoll = 1} else if (answer === 'scissors') {playerRoll === 2}

// plays a round //
function round(playerMove, computerMove) {
    if ((playerMove + 1 % 3) === computerMove) {
        console.log(`Dang, ${computerPlay} beats ${answer}, you lose this round !`)
        roundCount += 1
        gameStarted = true
        return 'lose'
    } else if (playerMove === computerMove) {
        console.log(`Looks like it's a draw...`)
        gameStarted = true
        return 'draw' 
    } else {
        console.log(`See, ${answer} beats ${computerPlay}, you win !`)
        gameStarted = true
        roundCount += 1
        return 'win'
    }
}

round(playerRoll, diceRoll) 