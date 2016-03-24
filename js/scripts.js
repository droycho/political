
$(document).ready(function() {
  $("form").submit(function(event) {

    var score= 0;

    var result= parseInt($("#party").val());
    score += result;
    var result= parseInt($("#president").val());
    score += result;
    var result= parseInt($("#tax").val());
    score += result;
    var result= parseInt($("#social").val());
    score += result;
    var result= parseInt($("#foreign").val());
    score += result;
    var result= parseInt($("#economic").val());
    score += result;
    var result= parseInt($("#looks").val());
    score += result;
    console.log(score);

    if (score < 60) {
      alert("Conservative");
    } else if (score === 60) {
      alert("Independent");
    } else {
      alert("Democrat")
    }

    event.preventDefault();
  });
});
