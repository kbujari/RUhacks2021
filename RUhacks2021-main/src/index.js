// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("aboutBtn");

const test = 1;
// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
  btn = false;
}

// Get sidebar elements

var coding = document.getElementById("coding");
var codingPic = document.getElementById("link1");

var photography = document.getElementById("photography");
var photographyPic = document.getElementById("link2");

var hiking = document.getElementById("hiking");
var hikingPic = document.getElementById("link3");


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if(modal.style.display == "block"){
  if (event.target == modal) {
    modal.style.display = "none";
  }

//Only show relevent content on the main page depending on user choice

} else if(event.target == coding || event.target == codingPic) {

  var photoBoxes = document.querySelectorAll(".photo");
  var codeBoxes = document.querySelectorAll(".code");
  var hikeBoxes = document.querySelectorAll(".hike");

  for(i=0; i<codeBoxes.length; i++)
    codeBoxes[i].style.display = "block";
  
  for(i=0; i<hikeBoxes.length; i++)
    hikeBoxes[i].style.display = "none";

  for(i=0; i<photoBoxes.length; i++)
    photoBoxes[i].style.display = "none";

} else if(event.target == photography || event.target == photographyPic) {

  var photoBoxes = document.querySelectorAll(".photo");
  var codeBoxes = document.querySelectorAll(".code");
  var hikeBoxes = document.querySelectorAll(".hike");

  for(i=0; i<codeBoxes.length; i++)
    codeBoxes[i].style.display = "none";
  
  for(i=0; i<hikeBoxes.length; i++)
    hikeBoxes[i].style.display = "none";

  for(i=0; i<photoBoxes.length; i++)
    photoBoxes[i].style.display = "block";

} else if(event.target == hiking || event.target == hikingPic) {

  var photoBoxes = document.querySelectorAll(".photo");
  var codeBoxes = document.querySelectorAll(".code");
  var hikeBoxes = document.querySelectorAll(".hike");

  for(i=0; i<codeBoxes.length; i++)
    codeBoxes[i].style.display = "none";
  
  for(i=0; i<hikeBoxes.length; i++)
    hikeBoxes[i].style.display = "block";

  for(i=0; i<photoBoxes.length; i++)
    photoBoxes[i].style.display = "none";
  }
}






