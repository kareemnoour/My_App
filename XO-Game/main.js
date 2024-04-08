let gameArea = document.querySelectorAll( '.game-area' );
let turn = document.querySelector( '.title' );

gameArea.forEach((e) => {
    e.onclick = () =>{
        if (e.innerHTML  === '') {
            e.innerHTML = 'X';
            turn.textContent = "Computer Turn...";
            disable(gameArea)  
            setTimeout(() => {
               comPlay(gameArea);
               unDisable(gameArea) 
            }, 1000);
            chkWin()
        }  
    }
})

function comPlay(array) {
    let places = [];
    
    for (let i = 0; i < array.length; i++) {
        if (array[i].innerHTML == '') {
           places.push(i);
        }
    }
    let x = Math.floor(Math.random() * places.length);
    gameArea[places[x]].innerHTML = "O";
    places = [];
    turn.textContent = "Your Turn";
}

function disable(array) {
    array.forEach((e)=>{
       e.style.pointerEvents = "none"
    })
}
function unDisable(array) {
    array.forEach((e)=>{
       e.style.pointerEvents = "unset"
    })
}
function chkWin() {
}

