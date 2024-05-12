let gameArea = document.querySelectorAll(".game-area");
let turn = document.querySelector(".title");

gameArea.forEach((e) => {
    e.onclick = () => {
        chkWin(gameArea);
        if (e.innerHTML === "") {
            e.innerHTML = "X";
            turn.textContent = "Computer Turn...";
            disable(gameArea);
            
            if (!chkWin()) {
                setTimeout(() => {
                    comPlay();
                    unDisable(gameArea);
                }, 1000);
            }
        }
    };
});


function disable(array) {
    array.forEach((e) => {
        e.style.pointerEvents = "none";
    });
}

function unDisable(array) {
    array.forEach((e) => {
        e.style.pointerEvents = "unset";
    });
}

function comPlay() {
    let places = [];

    for (let i = 0; i < gameArea.length; i++) {
        if (gameArea[i].innerHTML == "") {
            places.push(i);
        }
    }

    if (places.length) {
        let index = Math.floor(Math.random() * places.length);
        gameArea[places[index]].innerHTML = "O";
        places = [];
        turn.textContent = "Your Turn";
    } else {
        turn.textContent = "DRAW";

        setTimeout(() => {
            turn.textContent = "DRAW.";
            setTimeout(() => {
                turn.textContent = "DRAW..";
                setTimeout(() => {
                    turn.textContent = "DRAW...";
                    setTimeout(() => {
                        location.reload();
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }
    chkWin();
}

function chkArea(a,b,c,sq) {
    if (sq[a] && sq[a] === sq[b] && sq[a] === sq[c]) {
        // Winning condition found
        turn.textContent = `${sq[a]} WINS`;
        gameArea[a].style.backgroundColor = "green";
        gameArea[b].style.backgroundColor = "green";
        gameArea[c].style.backgroundColor = "green";
        
        disable(gameArea);

        setTimeout(() => {
            location.reload();
        }, 3000);
        return true;
    }
    return false;
}
function chkWin() {
    let sq = [];
    for (let i = 0; i < gameArea.length; i++) {
        sq[i] = gameArea[i].innerHTML;
    }
    
    return (
        chkArea(0,1,2,sq) ||
        chkArea(3,4,5,sq) ||
        chkArea(6,7,8,sq) ||
        chkArea(0,3,6,sq) ||
        chkArea(1,4,7,sq) ||
        chkArea(2,5,8,sq) ||
        chkArea(0,4,8,sq) ||
        chkArea(2,4,6,sq)
    );
}

