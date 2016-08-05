$(document).ready(function(){
  $("#friends-list").html(localStorage.friends_list);

  $("#save-friend").click(function(event){
    var friendName = $("#friend-name").val();
    $("#friends-list").append("<li>"+friendName+"&nbsp;&nbsp;<span class='remove'>X</span></li>");
    $(".remove:last").bind("click", function(){
      $(this).parent().remove();
    });
    localStorage.friends_list = $("#friends-list").html();
  });

  $(".remove").click(function(event){
    $(this).parent().remove();
    localStorage.friends_list = $("#friends-list").html();
  });
});
