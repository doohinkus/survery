$(document).ready(function(){

 $('form#survey').submit(function(event){
   var name = $("input#name").val();
   var hometown = $("input#hometown").val();
   var food = $("input:radio[name=food]:checked").val();
   var flavor = $("#flavor").val();
   var dob = $("#born").val();
   var favoriteColor = $("#color").val();
   event.preventDefault();

var result = name + hometown + food + flavor + dob;

//""<li>"+name+"</li>""
$("li.name").append(name);
$("li.hometown").append(hometown);
$("li.food").append(food);
$("li.flavor").append(flavor);
$("li.date").append(dob);
$("#output").css("background-color", favoriteColor);

   //$("#output").text(result).css("background-color", favoriteColor);
 });

});
