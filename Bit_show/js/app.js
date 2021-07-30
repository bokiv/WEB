var key = window.localStorage.getItem("id");

request.open("GET", "http://api.tvmaze.com/shows/" + key + "/seasons");

// first request for show 

// second request for season 

// third request for cast
