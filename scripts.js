$(document).ready(function() {

  var slideIndex = 1;
  showSlides(slideIndex);

  $("#prevButton").click(function() {
    plusSlides(-1);
  });
  $("#nextButton").click(function() {
    plusSlides(1);
  });
  $("#dot1").click(function() {
    currentSlide(1);
  });
  $("#dot2").click(function() {
    currentSlide(2);
  });
  $("#dot3").click(function() {
    currentSlide(3);
  });
  function plusSlides(i) {
    showSlides(slideIndex += i);
  }

  function currentSlide(i) {
    showSlides(slideIndex = i);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }

  var autoRunning = false;
  var auto = null;
  $("#auto").click(function(){
    if (!autoRunning) {
      autoRunning = true;
      auto = setInterval(function() { plusSlides(1);}, 1000);
      console.log("autorun");
    } else {
      console.log("clearauto")
      autoRunning = false;
      clearInterval(auto);
    }
  })
});
