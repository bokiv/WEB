var festival = new Festival();

var createMovieButton = document.querySelector("#create-movie");
var createProgramButton = document.querySelector("#create-program");
var addMovieToProgramButton = document.querySelector("#add-movie");
var inputTitleElement =document.querySelector("#title");
var inputLengthElement = document.querySelector("#length");
var selectGenreElement = document.querySelector("#genre");
var movieErrorElement = document.querySelector("#movie-error");
var movieSelectElement = document.querySelector("#movie-select");
var ulMovieListElement = document.querySelector("#movie-list");
var inpDateElement = document.querySelector("#date");
var programErrorElement = document.querySelector("#program-error");
var ulProgramListElement = document.querySelector("#program-list");
var programSelectElement = document.querySelector("#program-select");
var selectMovieElement = document.querySelector("#movie-select");
var selectProgramElement = document.querySelector("#program-select");

function addMovie() {
    var titleValue = inputTitleElement.value;
    var lengthValue = inputLengthElement.value;
    var genreValue = selectGenreElement.value;

    if(!titleValue) {
        movieErrorElement.textContent = "Title is required";
        return;
    }
    if(!genreValue) {
        
    }
}




