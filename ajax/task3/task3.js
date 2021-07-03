var $searchInput = $("#search");
var $result = $("#result");
var $profile = $("#profile");

$searchInput.keydown(function(e){
    if(e.keyCode == 13){
        var name = $searchInput.val();
        $.ajax({
            url : "https://api.github.com/search/users?q="+name,
            metod : "GET",
            dataType : "json",
        }).done(function(data){
            $result.html("");
            
         data.items.forEach(function(element) {
              $responseDiv = $("<div>");
             $responseDiv.html(
                 `<div><img src = "${element.avatar_url}>"</div>
                 <h3>${element.login}</h3>`
                 );
             console.log(element);
         });  
         $result.append($responseDiv); 
        
        
          console.log($result);      
            });

        
    }
});