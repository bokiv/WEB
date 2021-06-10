var inputElement = document.querySelector("#message");
var textAreaElement = document.querySelector(".chat-area");
var sendButton = document.querySelector("#button");

function appendMessage() {
    var textMessage = inputElement.value;
    if(!textMessage){
        return;
    }

    var p = document.createElement("p");
    p.textContent = textMessage;

    textAreaElement.appendChild(p);
    inputElement.value = "";
}

inputElement.onkeyup = function(event) {
    if(event.keyCode === 13) {
        appendMessage();
    }
}

var sendButton = document.querySelector("#button");
sendButton.onclick = appendMessage;