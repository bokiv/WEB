
function Festival(){
    this.listOfAllovies = [];
    this.listOfPrograms = [];
}

function Movie(title , length , genre) {
    this.title = title;
    this.length = parseInt(length);
    this.genre genre;
}
Movie.prototype.getGenreCode = function(){
    var firstLetter = this.genre[0].toUpperCase();
    var lastLetter = this.genre[this.genre.length - 1].toUpperCase();
    return firstLetter + lastLetter;
}

