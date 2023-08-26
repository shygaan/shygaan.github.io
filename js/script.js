/* When the user clicks on the button, 
closes every dropdowns and open the only one passed as argument */

function myFunction(element) {
  var dropdowns = document.getElementsByClassName("dropdown-content");
  var buttons = document.getElementsByClassName("dropbtn"); 

  var thisDropdown = element.nextSibling.nextSibling;

  if (!thisDropdown.classList.contains('show')) {  
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      dropdowns[i].classList.remove('show');
      if (buttons[i] !== element) { // to not remove 'active' class from the currently clicked button
        buttons[i].classList.remove('active'); // remove 'active' class from all buttons
      }
    }
  }

  thisDropdown.classList.toggle("show");
  element.classList.toggle('active'); // toggle 'active' class of clicked button
}


/*  function to close the dropdown when clicked outside. */
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var buttons = document.getElementsByClassName("dropbtn");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        buttons[i].classList.remove('active'); // remove 'active' class from the button
      }
    }
  }
}


function randomImage() {
  const images = [
    { src: "assets/img/splash/The Arcadian State - Thomas Cole.jpg", caption: "The Arcadian State (1834), by Thomas Cole" },
    { src: "assets/img/splash/The Oxbow - Thomas Cole.jpg", caption: "The Oxbow (1836), by Thomas Cole" },
    { src: "assets/img/splash/The Death of Caesar - Vincenzo Camuccini.jpg", caption: "The Death of Caesar (1806), by Vincenzo Camuccini" },
    { src: "assets/img/splash/The Hay Wain - John Constable.jpg", caption: "The Hay Wain (1821), by John Constable" },
    { src: "assets/img/splash/The Death of Socrates - Jacques-Louis David.jpg", caption: "The Death of Socrates (1787), by Jacques-Louis David" }
    // add more images and captions here
  ];

  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImage = document.getElementById("randomImage");
  randomImage.src = images[randomIndex].src;
  const randomCaption = document.getElementById("randomCaption");
  randomCaption.textContent = images[randomIndex].caption;
}

// call the randomImage function on page load
window.addEventListener('load', randomImage);

function setBackgroundByTime() {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
}