const score = {
    wins: 0 ,
    loses: 0 ,
    ties: 0
};

updateScore();

function playGame(playerMove) {
    const compMove = pickComputermove();       
        let result = '';
        
        if (playerMove === 'scissors') {
            if ( compMove === 'rock')
            { result = 'You Lose'; }
            else if ( compMove === 'paper') { result = 'You Won';}
            else if ( compMove === 'scissors') { result = 'Tie';}
            
        } else if (playerMove === 'paper') {
            
            if ( compMove === 'rock')
            { result = 'You Won'; }
            else if ( compMove === 'paper') { result = 'Tie';}
            else if ( compMove === 'scissors') { result = 'You Lose';}
            
        } else if (playerMove === 'rock') {
                            
            if ( compMove === 'rock')
            { result = 'Tie'; }
            else if ( compMove === 'paper') { result = 'You Lose';}
            else if ( compMove === 'scissors') { result = 'You Won';}
            
        }

        if (result === 'You Won') {
            score.wins += 1 ;
        } else if (result === 'You Lose') {
            score.loses += 1 ;
        } else if ( result === 'Tie') {
            score.ties += 1 ;
        }

        updateScore();

        document.querySelector('.js-result').innerHTML = result;

        document.querySelector('.js-moves').innerHTML = `You : <img class="move" src="${playerMove}.jpg"> --- <img class="move" src="${compMove}.jpg"> : Computer`;

        // alert( `You picked ${playerMove} and Computer picked ${compMove}. \n${result} \nWins : ${score.wins} , Loses : ${score.loses} , Ties : ${score.ties}`)



function pickComputermove() {
    const randomNumber = Math.random();
    let compMove = '';
    if ( randomNumber >= 0 && randomNumber < 1/3)
    { compMove = 'rock'}
    else if ( randomNumber >= 1/3 && randomNumber < 2/3)
    { compMove = 'paper'}
    else { compMove = 'scissors'}
    return compMove;
}

}
function updateScore () {
    document.querySelector('.js-score').innerHTML = `Wins : ${score.wins} , Loses : ${score.loses} , Ties : ${score.ties}`;
}