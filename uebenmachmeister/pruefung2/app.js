//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function antwort1() {
    var text1 = document.getElementById("antwort1").className;
    if (text1 == "d-none") {
      document.getElementById("antwort1").className = "";
      document.getElementById("antwort1").className += "d-block";
    } else if (text1 == "d-block") {
      document.getElementById("antwort1").className = "";
      document.getElementById("antwort1").className += "d-none";
    }
  }
  
  function antwort2() {
    var text2 = document.getElementById("antwort2").className;
    if (text2 == "d-none") {
      document.getElementById("antwort2").className = "";
      document.getElementById("antwort2").className += "d-block";
    } else if (text2 == "d-block") {
      document.getElementById("antwort2").className = "";
      document.getElementById("antwort2").className += "d-none";
    }
  }
  
  function antwort3() {
    var text3 = document.getElementById("antwort3").className;
    if (text3 == "d-none") {
      document.getElementById("antwort3").className = "";
      document.getElementById("antwort3").className += "d-block";
    } else if (text3 == "d-block") {
      document.getElementById("antwort3").className = "";
      document.getElementById("antwort3").className += "d-none";
    }
  }
  
  function antwort4() {
    var text4 = document.getElementById("antwort4").className;
    if (text4 == "d-none") {
      document.getElementById("antwort4").className = "";
      document.getElementById("antwort4").className += "d-block";
    } else if (text4 == "d-block") {
      document.getElementById("antwort4").className = "";
      document.getElementById("antwort4").className += "d-none";
    }
  }
  
  function antwort5() {
    var text5 = document.getElementById("antwort5").className;
    if (text5 == "d-none") {
      document.getElementById("antwort5").className = "";
      document.getElementById("antwort5").className += "d-block";
    } else if (text5 == "d-block") {
      document.getElementById("antwort5").className = "";
      document.getElementById("antwort5").className += "d-none";
    }
  }