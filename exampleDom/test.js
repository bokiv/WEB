function secList() {
    var ulSec = document.querySelector('#second');
    ulSec.style.backgroundColor = 'orange';
    return ulSec;
}
secList();

function selAllLiElem () {
    var liEleme = document.querySelectorAll('li');
    liEleme.forEach(function(element){
        element.style.backgroundColor = 'blue';
    });

    
}
selAllLiElem();

function sellectThirdLiElements (){
    var thirdLiElements = document.querySelectorAll('.third');
        thirdLiElements.forEach(function(el){
        el.style.backgroundColor = 'red';
        el.textContent = el.textContent.toUpperCase();
    });
   
}
sellectThirdLiElements();
