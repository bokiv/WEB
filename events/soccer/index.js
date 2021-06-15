"use-strict"
/*var player = document.querySelector("#player");
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
bg.addEventListener("click" , movePlayer)*/

var player = document.getElementById('player');
var bg = document.getElementById('bg');
var t = document.getElementById('t');
var status = 'on';
function movePlayer(eventClick) {
    if(status == 'on') {
        player.style.top = eventClick.pageY + 'px';
        player.style.left = eventClick.pageX + 'px';
        console.log(eventClick);
    }
    else {
        player.style.left = 0;
        player.style.top = 0;
    }
}
bg.addEventListener('click', movePlayer);
player.addEventListener('mouseover', function () {
    player.title = 'Cristiano Ronaldo';
})
function stopA() {
    status = 'off';
}