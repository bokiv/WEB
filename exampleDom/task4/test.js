/*function toCreateDropdown(array){
    var createForm = document.createElement("dropdown");
    var select = document.createElement("select");
    var options = document.createElement("option");
    var text = document.createTextNode(array);
    createForm.appendChild(text);
    var somelist = document.querySelector(".first");
    somelist.appendChild(createForm);

}
var a = ["volvo" , "saab", "opel", "audi" ]
toCreateDropdown(a);*/

 
    var values = ["dog", "cat", "parrot", "rabbit"];
 
    var select = document.createElement("select");
    select.name = "pets";
    select.id = "pets"
 
    for (const val of values)
    {
        var option = document.createElement("option");
        option.value = val;
        option.text = val.charAt(0).toUpperCase() + val.slice(1);
        select.appendChild(option);
    }
 
    var label = document.createElement("label");
    label.innerHTML = "Choose your pets: "
    label.htmlFor = "pets";
 
    document.getElementById("container").appendChild(label).appendChild(select);
