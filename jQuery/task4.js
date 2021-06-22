$(document).ready(function(){
    var gallery1 = $("<div>");
    $("body").append(gallery1);
    var imgArray1 = [
        "https://images.unsplash.com/photo-1500622944204-b135684e99fd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJhbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://butterflyhospice.org/wp-content/uploads/2014/11/nature-pictures-free-2.jpg"     ];
    

imgArray1.forEach(function(e){
    var image1 = $("<img>").attr("src" , e).width("33%");
    gallery1.append(image1);
    

});
var gallery2 = $("<div>");
    $("body").append(gallery2).addClass("second");
    var imgArray2 = [
        "https://i.pinimg.com/originals/f1/17/a4/f117a4bfe2db2c3b8c529e0b8e169d65.jpg",
        "https://thumbs.dreamstime.com/b/scenic-nature-landscape-path-near-lake-forest-path-tunnel-trees-near-lake-scenic-nature-autumn-landscape-panorama-view-115358410.jpg",
        "https://images.unsplash.com/photo-1471879832106-c7ab9e0cee23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
    ];
    imgArray2.forEach(function(e){
        var image2 = $("<img>").attr("src" , e).width("33%");
        gallery2.append(image2);
    
    });
    $("img").first().addClass("selected");
    $("img.selected").removeClass();
    $("div").next().children().first().next().addClass("selected");
});