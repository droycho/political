
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


    if (score < 60) {
      $(".conservative").show();
    } else if (score === 60) {
      $(".independent").show();
    } else {
      $(".liberal").show();
    }


    event.preventDefault();
  });
});

$(document).ready(function() {
  $("form").submit(function(event) {
    var nameInput = $("input#name").val();
    var dateInput = $("input#date").val();
    $(".name").text(nameInput);
    $(".date").text(dateInput);
    console.log(nameInput, dateInput);
    $(".results1").show();
    $(".userInfo").hide();
    event.preventDefault();
  });
});
