
$(document).ready(function() {
  $("form").submit(function(event) {
    var age = parseInt($("input#age").val());
    console.log(age);

    if (age > 18) {
      window.location.href = "over18.html";
    } else if (age === 18){
        window.location.href = "exact18.html";
      } else {
        window.location.href = "under18.html";
    }
    event.preventDefault();
  });
});
