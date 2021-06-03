function alertLi(){
    var text = document.querySelector(".first").textContent;
    alert(text);

}
alertLi();

function selTextLastLi(arg){
   document.querySelector(".last").textContent = arg ; 
}
selTextLastLi("Neki novi tekst");