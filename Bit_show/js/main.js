var div = document.querySelector(".container");
var main = document.querySelector("main");
var row = document.querySelector("row")

var shows = [];

var request = new XMLHttpRequest();

request.open("GET", "http://api.tvmaze.com/shows");

request.onload = function () {
  if (request.status === 200) {
    var response = request.responseText;
    var data = JSON.parse(response);

    //  shows = data.map(function (element) {
    //   return element;
    // });

    data.forEach(function (el) {
      shows.push(el);
    });

    var sortedShows = shows.sort(function (a, b) {
      return b.rating.average - a.rating.average;
    });
    var top50 = sortedShows.slice(0, 50);

    top50.forEach(function (el) {

      var mainDiv = document.createElement("div");
      var div = document.innerHtml("mainDiv")
      div.setAttribute("data-our-key" ,el.id);
      div.classList = "col-3 tv-div"
      var img = document.createElement("img");
      img.setAttribute("src" , el.image.medium);
      var title = document.createElement("h4");
      title.textContent = el.name;
      main.append(mainDiv);
      mainDiv.append(img);
      mainDiv.append(title);
    });
    

    window.localStorage.clear();
    
    let div = document.querySelectorAll(".tv-div")
    div.forEach(function(element){
      element.addEventListener("click", function(event){
        //  event.preventDefault();
        let key = document.querySelector(".tv-div").getAttribute("data-our-key");
        window.localStorage.setItem("id", key);
        document.location = "second.html"
      });

     

      
    }) 
  }
};

request.send();

