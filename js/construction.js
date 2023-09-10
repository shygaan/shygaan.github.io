/* Random Image function for Construction splash page */
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
  