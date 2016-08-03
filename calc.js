function update_ans(){
  var val1 = $("#num1").val();
  val1 = parseFloat(val1);
  var val2 = $("#num2").val();
  val2 = parseFloat(val2);
  $("#ans").html(val1+val2);
}

$(document).ready(function(){
   $("#num1").keyup(function(event) {
    //  alert($("#num1").val());
     update_ans();
    });

    $("#num2").keyup(function(event) {
      // alert($("#num2").val());
      update_ans();
     });
});
