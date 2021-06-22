/*$(document).ready(function(){
    var $div = $("<div>");
    var $img = $("<img>");
    console.log($img);
    var imgArray = ["https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" ,"https://butterflyhospice.org/wp-content/uploads/2014/11/nature-pictures-free-2-300x187.jpg" ,"https://images.unsplash.com/photo-1500622944204-b135684e99fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80" ,"https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80" ,"https://images.unsplash.com/photo-1441239372925-ac0b51c4c250?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=372&q=80"]
   // $img.each(function(index , element){
   //     $(element).imgArray().css("url");
   // })





});*/
$(function(){
    var gallery = $("<div>");
    $("body").append(gallery);
    var title = $("<h1>Our gallery images</h1>");

var imgArray = [
    "https://i.pinimg.com/originals/f1/17/a4/f117a4bfe2db2c3b8c529e0b8e169d65.jpg" ,
    "https://images.unsplash.com/photo-1471879832106-c7ab9e0cee23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80" ,
    "https://wallpapercave.com/wp/84cQVIX.jpg" ,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqo8WX4JzWJZh61_NOOL_2wfGOmVrPzj84Kw&usqp=CAU" ,
    "https://wallpapercave.com/wp/84cQVIX.jpg",
    "https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg"
    ];
    imgArray.forEach(function(e){
        var image = $("<img>").attr("src" ,e).width(Math.random() *100 + 150).addClass("testCss");
        gallery.append(image);
        
      
    });
   
  
    gallery.prepend(title);

  });
  
 
