window.onload = function () {
    const music = new Audio ("./Sounds/Music.mp3")
    music.play()
}
const img = document.querySelector("#img");
console.log(img);
let imgArray = [1,2,3];
setInterval(() => {
    let index = Math.floor(Math.random() * imgArray.length);
    console.log(index);
    img.src = `./Images/${index + 1}.jpg`;
}, 3000);
