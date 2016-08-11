function mark_done_or_undone(element){
  if ($(element).is(":checked"))    {
    $(element).siblings("span").addClass("strike");
    $(element).attr("checked", "true");
  }else{
    $(element).siblings("span").removeClass("strike");
    $(element).removeAttr("checked");
  }
  localStorage.todo_list = $("#friends-list").html();
}

$(document).ready(function(){
  $("#friends-list").html(localStorage.todo_list);

  $("#save-friend").click(function(event){
    var friendName = $("#friend-name").val();
    $("#friends-list").append("<li><input type='checkbox' class='checked' /><span class='text'>"+friendName+"</span>&nbsp;&nbsp;<span class='remove'>X</span></li>");

    $(".remove:last").bind("click", function(){
      $(this).parent().remove();
    });

    $(".checked:last").bind("change", function(event){
      mark_done_or_undone(this);
    });

    localStorage.todo_list = $("#friends-list").html();
  });

  $(".remove").click(function(event){
    $(this).parent().remove();
    localStorage.todo_list = $("#friends-list").html();
  });

  $(".checked").change(function(event){
    mark_done_or_undone(this);
  });

  // $("span.strike").siblings(".checked").attr("checked", "true");

});
