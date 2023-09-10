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


$(window).on('load', function() {
  $("#loader-wrapper").fadeOut(700);
});
