$(document).ready(function(){

  $("#store").click(function(){
    var val = $("#string").val();
    // alert(val);
    localStorage.something = val;
    $("#stored_value").html(localStorage.something);
  });

  $("#stored_value").html(localStorage.something);
});
