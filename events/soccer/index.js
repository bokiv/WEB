"use-strict"
var player = document.querySelector("#player");
var bg = document.querySelector("#bg");
var btn = document.querySelector("#button");
var status = true;
var posX = 0;
var posY = 0;

function movePlayer(event) {
    if(status !== btn){
       player.style.top = event.pageY + 'px';
       player.style.left = event.pageX + 'px';
       console.log(event);

    }if(status === btn) {
        player.style.top = posY + 'px';
        player.style.left = posX + 'px';  
    }
}
bg.addEventListener("click" , movePlayer)