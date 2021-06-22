/*$(document).ready(function(){
    var $div = $("<div>");
    var $img = $("<img>");
    console.log($img);
    var imgArray = ["https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" ,"https://butterflyhospice.org/wp-content/uploads/2014/11/nature-pictures-free-2-300x187.jpg" ,"https://images.unsplash.com/photo-1500622944204-b135684e99fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80" ,"https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80" ,"https://images.unsplash.com/photo-1441239372925-ac0b51c4c250?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=372&q=80"]
   // $img.each(function(index , element){
   //     $(element).imgArray().css("url");
   // })





});*/
$(document).ready(function(){
    var $img = $("<img>");
    var images = [];

var imgArray = new Array {"https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" ,
"https://butterflyhospice.org/wp-content/uploads/2014/11/nature-pictures-free-2-300x187.jpg" ,
"https://images.unsplash.com/photo-1500622944204-b135684e99fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80" ,
"https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80" ,
"https://images.unsplash.com/photo-1441239372925-ac0b51c4c250?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=372&q=80"};

$img.prepend().each(function(){
    images.push($(this.imgArray).attr('src'));
    
  });
 
