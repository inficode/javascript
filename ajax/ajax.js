$(document).ready(function(){
  $("#fetch").click(function(event){
    $("#story").load("http://localhost:8000/story.txt");
  });
});
