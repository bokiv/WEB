var $searchInput = $("#search");
var $result = $("#result");
var $profile = $("#profile");


$searchInput.keydown(function(e){
    if(e.keyCode == 13){
        var name = $searchInput.val();
        $.ajax({
            url : "https://api.github.com/search/users?q="+ name + "&per_page=9",
            metod : "GET",
            dataType : "json",
        }).done(function(data){
            $result.html("");
            
         data.items.forEach(function(element) {
        
             var name = element.login;
             var imgSrc = element.avatar_url;
             var img = $("<img>").attr("src", imgSrc);
             var user =$("<h3>").text(name);
             var $responseDiv = $("<div>").attr("class" ,"responseDiv");

             $responseDiv.append(img, user);
             $result.append($responseDiv); 
          
         });  
         
        
        
            
            });

        
    }
});