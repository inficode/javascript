function calculate(operator){
  var val1 = $("#num1").val();
  val1 = parseFloat(val1);
  var val2 = $("#num2").val();
  val2 = parseFloat(val2);
  switch (operator) {
    case "+":
      $("#ans").html(val1+val2);
      break;
    case "-":
      $("#ans").html(val1-val2);
    default:

  }
}

$(document).ready(function(){
  $("#calculate").click(function(event){
    calculate($("#operation").val());
  });
});
