const baseUrl =  "http://api.tvmaze.com/shows";

let main = document.querySelector(".row");

let top50 = [];

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

const request = new XMLHttpRequest();

request.open("GET", `${baseUrl}`, true);

request.onload = function () {
  if (request.status === 200) {
    let response = request.responseText;
    const data = JSON.parse(response);

    data.forEach(function (el) {
      data.push(el);
    });

    let sortedShows = data.sort(function (a, b) {
      return b.rating.average - a.rating.average;
    });
    let top50 = sortedShows.slice(0, 50);

    top50.forEach(function (el) {

      let mainDiv = document.createElement("div");
      mainDiv.setAttribute("data-our-key" ,el.id);
      mainDiv.classList = "tv-div col-md-4"
      let img = document.createElement("img");
      img.setAttribute("src" , el.image.medium);
      let title = document.createElement("h4");
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
        let key = element.getAttribute("data-our-key");
        window.localStorage.setItem("id", key);
        document.location = "second.html"
      });

     

      
    }) 
  }
};

request.send();

//Search field//
let ul = null;
let $searchShow = "http://api.tvmaze.com/search/shows?q=";

 const btnSearch = document.getElementById('btnSearch');
 btnSearch.addEventListener('keyup', function(event) {
   console.log(event)
   if (!event.target.value) {
     return;
   }
   const requestSearch = new XMLHttpRequest();
   requestSearch.open("GET", `${$searchShow}:${event.target.value}`, true);
   requestSearch.onload = function(){
     if (requestSearch.status === 200){
       const searchResultsWrapper = document.querySelector(".search-results");
       console.log({searchResultsWrapper});
       if (searchResultsWrapper && searchResultsWrapper.children.length > 0) {
         console.log('VEC POSTOJE REZULTATI PRETRAGE');
         removeAllChildNodes(searchResultsWrapper);
       }

       const searchResults = JSON.parse(requestSearch.responseText);
       console.log({searchResults})

      //  if (!searchResultsWrapper) {
      //     ul = document.createElement("li");
      //     ul.classList.add('search-results');
      //     ul.append(li);
      //   }
            
       searchResults.forEach(function(element){
          console.log(element);
          let text = document.createElement("h5").textContent;
          //let fullText= text.textContent=element.show.name
        
          let li = document.createElement("li"); 
          li.classList.add("single-result");
          li.innerText= element.show.name;
          li.setAttribute("data-our-key", element.show.id);
          ul.append(li);
       })  
    
     }
   }



   requestSearch.send();
 });
 //END SEARCH INPUT FIELD//
 document.addEventListener("click", function (event) {
  //event Delegation
  console.log(event.target);
  if (event.target.classList.contains("single-result")) {
    const id = event.target.getAttribute("data-our-key");
    console.log(id);

    window.localStorage.setItem("id", id);
    document.location = "second.html";
  }
});
