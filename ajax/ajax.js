$(document).ready(function(){
  $("#fetch").click(function(event){
    $("#story").load("http://localhost:8000/story.txt");
    // $("#story").load("file:///home/ak/code/javascript/ajax/story.txt");
  });
});
