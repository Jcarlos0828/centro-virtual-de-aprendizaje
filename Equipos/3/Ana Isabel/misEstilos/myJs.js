var totalSteps = 4;

$('#myCarousel').carousel();
$('#myCarousel').on('slide.bs.carousel', function (e) {
  
  //update progress
  var step = $(e.relatedTarget).data('step');
  var percent = (parseInt(step) / totalSteps) * 100;
  
  $('.progress-bar').css({width: percent + '%'});
  $('.progress-bar').text("Step " + step);
  
})

// When the user clicks on div, open the popup
function myPopOverFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
function myPopOverFunction1() {
  var popup = document.getElementById("myPopup1");
  popup.classList.toggle("show");
}
function myPopOverFunction2() {
  var popup = document.getElementById("myPopup2");
  popup.classList.toggle("show");
}
function myPopOverFunction3() {
  var popup = document.getElementById("myPopup3");
  popup.classList.toggle("show");
}