$(document).ready(function(){
  $("#friends-list").html(localStorage.friends_list);

  $("#save-friend").click(function(event){
    var friendName = $("#friend-name").val();
    $("#friends-list").append("<li>"+friendName+"&nbsp;&nbsp;<span>X</span></li>");
    localStorage.friends_list = $("#friends-list").html();
  })
});
