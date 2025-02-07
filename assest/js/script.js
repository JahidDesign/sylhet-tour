function myBangla() {
    var bangla = document.getElementById("banId");
    var english =document.getElementById("engId")
    if (bangla.style.display === "none") {
        bangla.style.display = "block";
        english.style.display ="none"

    } else {
      bangla.style.display = "none";
    }
  }
  
  function myEnglish() {
    var bangla = document.getElementById("banId");
    var english =document.getElementById("engId")
    if (english.style.display === "none") {
        english.style.display = "block";
        bangla.style.display ="none"

    } else {
      english.style.display = "none";
    }
  }

  function myNav() {
    var nav = document.getElementById("mNav");
    if (nav.style.display === "none") {
        nav.style.display = "block";
        

    } else {
      nav.style.display = "none";
    }
  }

  function myClose() {
    var navClose = document.getElementById("mNav");
    if (navClose.style.display === "block") {
        navClose.style.display = "none";
        

    } else {
        navClose.style.display = "block";
    }
  }
  function myBng() {
    var bangla = document.getElementById("BanId");
    var english =document.getElementById("EngId")
    if (bangla.style.display === "none") {
        bangla.style.display = "block";
        english.style.display ="none";

    } else {
      bangla.style.display = "none";
      english.style.display="block";
    }
  }
  
  function myEng() {
    var bangla = document.getElementById("BanId");
    var english =document.getElementById("EngId")
    if (english.style.display === "none") {
        english.style.display = "block";
        bangla.style.display ="none";

    } else {
      english.style.display = "none";
      bangla.style.display="block";
    }
  }
  let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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
