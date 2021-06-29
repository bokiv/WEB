var newXHR = new XMLHttpRequest();
newXHR.open("GET", "http://www.geoplugin.net/xml.gp?ip=xx.xx.xx.xx");
newXHR.onload = function () {
  var xmlDoc = newXHR.responseXML;
  var country = xmlDoc.querySelector("geoplugin_countryName").textContent;
  var paragraph = document.createElement("p");
  paragraph.textContent = country;
  var div = document.querySelector("div");
  div.appendChild(paragraph);
};
newXHR.send();
// EXTRA-------------
var locationXHR = new XMLHttpRequest();
locationXHR.open("GET", "http://www.geoplugin.net/xml.gp?ip=xx.xx.xx.xx");
locationXHR.onload = function () {
  var button = document.querySelector("button");
  button.onclick = function () {
    var xmlDoc = newXHR.responseXML;
    var input = document.querySelector("input");
    var ipAddress = xmlDoc.querySelector("geoplugin_request").textContent;
    input.value = ipAddress;
  };
};
locationXHR.send();