const tile = document.querySelectorAll('.tile');
const restartBtn = document.getElementById('restart');
const playerScore = document.getElementById('player-score');
const ties = document.getElementById('tied-score');
const cpuScore = document.getElementById('CPU-score');
const turn = document.getElementById('turn');
const a1 = document.getElementById('a1');
const a2 = document.getElementById('a2');
const a3 = document.getElementById('a3');
const b1 = document.getElementById('b1');
const b2 = document.getElementById('b2');
const b3 = document.getElementById('b3');
const c1 = document.getElementById('c1');
const c2 = document.getElementById('c2');
const c3 = document.getElementById('c3');
const oWonArea = document.getElementById('owon');
const xWonArea = document.getElementById('xwon');
const tied = document.getElementById('tied');
let player = 'x'
let playerWins = 0;
let cpuWins = 0;
let tiedMatches = 0;
/* let rowA = 0;
let rowB = 0;
let rowC = 0;
let column1 = 0;
let column2 = 0;
let column3=0; */

function game() {
    
    
    document.addEventListener('click', function(e) {
        console.log(e)
        markTile(player, e);
        winner = checksWinner(player);
        player = definesPlayer(player, e);
        countScore (winner);
        quit(e);
        restart(e);        
    })
}

function definesPlayer(player, e) {
    if (e.path[0].classList.contains('tile')) {
        console.log(e.path[0])
        if (player == 'x' && e.path[0].innerHTML == '<img src="./images/xiamge.png" alt="" width="20px">') {
            player = 'o';
            turn.innerHTML = 'O';
        } else if (player == 'o' && e.path[0].innerHTML == '<img src="./images/oimage.png" alt="" width="20px">'){
            player = 'x';
            turn.innerHTML = 'X';
        }
    }    

    return player
}

function markTile(player, e) {
    if (e.path[0].classList.contains('tile') && e.path[0].innerHTML == '') {
        if (player == 'x') {
            e.path[0].innerHTML = '<img src="./images/xiamge.png" alt="" width="20px">';
        } else {
            e.path[0].innerHTML = '<img src="./images/oimage.png" alt="" width="20px">';
        }
    }
    
}

function checksWinner (player) {

    let winner = '';
    if (a1.innerHTML == a2.innerHTML && a2.innerHTML == a3.innerHTML && a1.innerHTML != "") {
        winner = player;        
    } else if (b1.innerHTML == b2.innerHTML && b2.innerHTML == b3.innerHTML && b1.innerHTML != "") {
        winner = player;
    } else if (c1.innerHTML == c2.innerHTML && c2.innerHTML == c3.innerHTML && c1.innerHTML != "") {
        winner = player;
    } else if (a1.innerHTML == b1.innerHTML && b1.innerHTML == c1.innerHTML  && a1.innerHTML != "") {
        winner = player;
    } else if (a2.innerHTML == b2.innerHTML && b2.innerHTML == c2.innerHTML  && a2.innerHTML != "") {
        winner = player;
    } else if (a3.innerHTML == b3.innerHTML && b3.innerHTML == c3.innerHTML  && a3.innerHTML != "") {
        winner = player;
    }  else if (a1.innerHTML == b2.innerHTML && b2.innerHTML == c3.innerHTML  && a1.innerHTML != "") {
        winner = player;
    } else if (a3.innerHTML == b2.innerHTML && b2.innerHTML == c1.innerHTML  && a3.innerHTML != "") {
        winner = player;
    } else if ((a1.innerHTML && a2.innerHTML && a3.innerHTML && b1.innerHTML && b2.innerHTML && b3.innerHTML && c1.innerHTML && c2.innerHTML && c3.innerHTML) != ''){
        winner = 'tied';
    }

    if (winner == 'x') {
        xWonArea.classList.toggle('hide');
        return winner
    } else if (winner == 'o') {
        oWonArea.classList.toggle('hide');
        return winner
    } else if (winner == 'tied') {
        tied.classList.toggle('hide');
        return winner
    }

    
}

function countScore (winner) {

    if (winner == 'x') {
        playerWins += 1;
        playerScore.innerHTML = playerWins;
    } else if (winner == 'o') {
        cpuWins += 1;
        cpuScore.innerHTML = cpuWins;
    } else if (winner == 'tied') {
        tiedMatches+= 1;
        ties.innerHTML = tiedMatches;
    }


    
}

function restart (e) {
    console.log(e.path[0].classList)
    if (e.path[0].classList.contains('restart') || e.path[0].classList.contains('next')) {
        console.log('aqui')
        tile.forEach (function(element) {
            element.innerHTML = '';
            playerWins = 0;
            cpuWins = 0;
            tiedMatches = 0;
            xWonArea.classList.add('hide');
            oWonArea.classList.add('hide');
            tied.classList.add('hide');
        })
    }
}

function quit (e) {
    if (e.path[0].classList.contains('quit')) {
        tile.forEach (function(element) {
            element.innerHTML = '';
            playerWins = 0;
            cpuWins = 0;
            tiedMatches = 0;
            xWonArea.classList.add('hide');
            oWonArea.classList.add('hide');
            tied.classList.add('hide');
            playerScore.innerHTML = playerWins;
            cpuScore.innerHTML = cpuWins;
            ties.innerHTML = tiedMatches;
        })
    }
}
game()