let answer = prompt("Rock, paper or scissors ? Let\'s play !").toLowerCase()

function checkAnswer(playerMove) {

    if (playerMove === 'rock')
    {
        return 'correct'
    } else if (playerMove === 'paper') {
        return 'correct'
    } else if (playerMove === 'scissors') {
        return 'correct'
    } else {
        return 'incorrect'
    }

}

checkAnswer(answer)


if (checkAnswer(answer) === 'correct') {
    console.log(`You picked ${answer}!`)
} else {
    while (checkAnswer(answer) === 'incorrect') {
    answer = prompt("Sorry what was that ?")
    checkAnswer(answer)}
}