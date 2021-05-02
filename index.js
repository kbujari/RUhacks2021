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

var math = document.getElementById("math");
var mathPic = document.getElementById("link4");

var chemistry = document.getElementById("chemistry");
var chemistryPic = document.getElementById("link5");

var phyiscs = document.getElementById("physics");
var physicsPic = document.getElementById("link6");

var audioEditing = document.getElementById("audioEditing");
var audioEditingPic = document.getElementById("link7");

var videoEditing = document.getElementById("videoEditing");
var videoEditingPic = document.getElementById("link8");

var piano = document.getElementById("piano");
var pianoPic = document.getElementById("link9");

var creativeWriting = document.getElementById("creativeWriting");
var creativeWritingPic = document.getElementById("link10");

var all = document.getElementById("all");
var allPic = document.getElementById("all");


var photoBoxes = document.querySelectorAll(".photography");
var codeBoxes = document.querySelectorAll(".coding");
var hikeBoxes = document.querySelectorAll(".hiking");
var mathBoxes = document.querySelectorAll(".math");
var chemistryBoxes = document.querySelectorAll(".chemistry");
var physicsBoxes = document.querySelectorAll(".physics");
var audioEditingBoxes = document.querySelectorAll(".audioEditing");
var videoEditingBoxes = document.querySelectorAll(".videoEditing");
var pianoBoxes = document.querySelectorAll(".piano");
var creativeWritingBoxes = document.querySelectorAll(".creativeWriting");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if(modal.style.display == "block"){
  if (event.target == modal) {
    modal.style.display = "none";
  }

//Only show relevent content on the main page depending on user choice

} else if(event.target == coding || event.target == codingPic) {

  coding.classList.add('active');
  hiking.classList.remove('active');
  photography.classList.remove('active');
  math.classList.remove('active');
  chemistry.classList.remove('active');
  physics.classList.remove('active');
  audioEditing.classList.remove('active');
  videoEditing.classList.remove('active');
  piano.classList.remove('active');
  creativeWriting.classList.remove('active');
  all.classList.remove('active')


  for(i=0; i<codeBoxes.length; i++){

    codeBoxes[i].style.display = "block";
  
  }
  for (i=0; i<hikeBoxes.length; i++){

    hikeBoxes[i].style.display = "none";
  
  }
  for (i=0; i<photoBoxes.length; i++){

    photoBoxes[i].style.display = "none";
    
  }
  for (i=0; i<mathBoxes.length; i++){

    mathBoxes[i].style.display = "none";
    
  }
  for (i=0; i<chemistryBoxes.length; i++){

    chemistryBoxes[i].style.display = "none";
    
  }
  for (i=0; i<physicsBoxes.length; i++){

    physicsBoxes[i].style.display = "none";
    
  }
  for (i=0; i<audioEditingBoxes.length; i++){

    audioEditingBoxes[i].style.display = "none";

  }
  for (i=0; i<videoEditingBoxes.length; i++){

    videoEditingBoxes[i].style.display = "none";

  }
  for (i=0; i<pianoBoxes.length; i++){

    pianoBoxes[i].style.display = "none";

  }
  for (i=0; i<creativeWritingBoxes.length; i++){

    creativeWritingBoxes[i].style.display = "none";

  }
  

} else if(event.target == photography || event.target == photographyPic) {

  coding.classList.remove('active');
  hiking.classList.remove('active');
  photography.classList.add('active');
  math.classList.remove('active');
  chemistry.classList.remove('active');
  physics.classList.remove('active');
  audioEditing.classList.remove('active');
  videoEditing.classList.remove('active');
  piano.classList.remove('active');
  creativeWriting.classList.remove('active');
  all.classList.remove('active')


  for(i=0; i<codeBoxes.length; i++){

    codeBoxes[i].style.display = "none";
  
  }
  for (i=0; i<hikeBoxes.length; i++){

    hikeBoxes[i].style.display = "none";
  
  }
  for (i=0; i<photoBoxes.length; i++){

    photoBoxes[i].style.display = "block";
    
  }
  for (i=0; i<mathBoxes.length; i++){

    mathBoxes[i].style.display = "none";
    
  }
  for (i=0; i<chemistryBoxes.length; i++){

    chemistryBoxes[i].style.display = "none";
    
  }
  for (i=0; i<physicsBoxes.length; i++){

    physicsBoxes[i].style.display = "none";
    
  }
  for (i=0; i<audioEditingBoxes.length; i++){

    audioEditingBoxes[i].style.display = "none";

  }
  for (i=0; i<videoEditingBoxes.length; i++){

    videoEditingBoxes[i].style.display = "none";

  }
  for (i=0; i<pianoBoxes.length; i++){

    pianoBoxes[i].style.display = "none";

  }
  for (i=0; i<creativeWritingBoxes.length; i++){

    creativeWritingBoxes[i].style.display = "none";

  }
} else if(event.target == hiking || event.target == hikingPic) {

  coding.classList.remove('active');
  hiking.classList.add('active');
  photography.classList.remove('active');
  math.classList.remove('active');
  chemistry.classList.remove('active');
  physics.classList.remove('active');
  audioEditing.classList.remove('active');
  videoEditing.classList.remove('active');
  piano.classList.remove('active');
  creativeWriting.classList.remove('active');
  all.classList.remove('active')


  for(i=0; i<codeBoxes.length; i++){

    codeBoxes[i].style.display = "none";
  
  }
  for (i=0; i<hikeBoxes.length; i++){

    hikeBoxes[i].style.display = "block";
  
  }
  for (i=0; i<photoBoxes.length; i++){

    photoBoxes[i].style.display = "none";
    
  }
  for (i=0; i<mathBoxes.length; i++){

    mathBoxes[i].style.display = "none";
    
  }
  for (i=0; i<chemistryBoxes.length; i++){

    chemistryBoxes[i].style.display = "none";
    
  }
  for (i=0; i<physicsBoxes.length; i++){

    physicsBoxes[i].style.display = "none";
    
  }
  for (i=0; i<audioEditingBoxes.length; i++){

    audioEditingBoxes[i].style.display = "none";

  }
  for (i=0; i<videoEditingBoxes.length; i++){

    videoEditingBoxes[i].style.display = "none";

  }
  for (i=0; i<pianoBoxes.length; i++){

    pianoBoxes[i].style.display = "none";

  }
  for (i=0; i<creativeWritingBoxes.length; i++){

    creativeWritingBoxes[i].style.display = "none";

  }

} else if(event.target == math || event.target == mathPic) {

  coding.classList.remove('active');
  hiking.classList.remove('active');
  photography.classList.remove('active');
  math.classList.add('active');
  chemistry.classList.remove('active');
  physics.classList.remove('active');
  audioEditing.classList.remove('active');
  videoEditing.classList.remove('active');
  piano.classList.remove('active');
  creativeWriting.classList.remove('active');
  all.classList.remove('active')


  for(i=0; i<codeBoxes.length; i++){

    codeBoxes[i].style.display = "none";
  
  }
  for (i=0; i<hikeBoxes.length; i++){

    hikeBoxes[i].style.display = "none";
  
  }
  for (i=0; i<photoBoxes.length; i++){

    photoBoxes[i].style.display = "none";
    
  }
  for (i=0; i<mathBoxes.length; i++){

    mathBoxes[i].style.display = "block";
    
  }
  for (i=0; i<chemistryBoxes.length; i++){

    chemistryBoxes[i].style.display = "none";
    
  }
  for (i=0; i<physicsBoxes.length; i++){

    physicsBoxes[i].style.display = "none";
    
  }
  for (i=0; i<audioEditingBoxes.length; i++){

    audioEditingBoxes[i].style.display = "none";

  }
  for (i=0; i<videoEditingBoxes.length; i++){

    videoEditingBoxes[i].style.display = "none";

  }
  for (i=0; i<pianoBoxes.length; i++){

    pianoBoxes[i].style.display = "none";

  }
  for (i=0; i<creativeWritingBoxes.length; i++){

    creativeWritingBoxes[i].style.display = "none";

  }
} else if(event.target == chemistry || event.target == chemistryPic) {

  coding.classList.remove('active');
  hiking.classList.remove('active');
  photography.classList.remove('active');
  math.classList.remove('active');
  chemistry.classList.add('active');
  physics.classList.remove('active');
  audioEditing.classList.remove('active');
  videoEditing.classList.remove('active');
  piano.classList.remove('active');
  creativeWriting.classList.remove('active');
  all.classList.remove('active')


  for(i=0; i<codeBoxes.length; i++){

    codeBoxes[i].style.display = "none";
  
  }
  for (i=0; i<hikeBoxes.length; i++){

    hikeBoxes[i].style.display = "none";
  
  }
  for (i=0; i<photoBoxes.length; i++){

    photoBoxes[i].style.display = "none";
    
  }
  for (i=0; i<mathBoxes.length; i++){

    mathBoxes[i].style.display = "none";
    
  }
  for (i=0; i<chemistryBoxes.length; i++){

    chemistryBoxes[i].style.display = "block";
    
  }
  for (i=0; i<physicsBoxes.length; i++){

    physicsBoxes[i].style.display = "none";
    
  }
  for (i=0; i<audioEditingBoxes.length; i++){

    audioEditingBoxes[i].style.display = "none";

  }
  for (i=0; i<videoEditingBoxes.length; i++){

    videoEditingBoxes[i].style.display = "none";

  }
  for (i=0; i<pianoBoxes.length; i++){

    pianoBoxes[i].style.display = "none";

  }
  for (i=0; i<creativeWritingBoxes.length; i++){

    creativeWritingBoxes[i].style.display = "none";

  }
} else if(event.target == physics || event.target == physicsPic) {

  coding.classList.remove('active');
  hiking.classList.remove('active');
  photography.classList.remove('active');
  math.classList.remove('active');
  chemistry.classList.remove('active');
  physics.classList.add('active');
  audioEditing.classList.remove('active');
  videoEditing.classList.remove('active');
  piano.classList.remove('active');
  creativeWriting.classList.remove('active');
  all.classList.remove('active')


  for(i=0; i<codeBoxes.length; i++){

    codeBoxes[i].style.display = "none";
  
  }
  for (i=0; i<hikeBoxes.length; i++){

    hikeBoxes[i].style.display = "none";
  
  }
  for (i=0; i<photoBoxes.length; i++){

    photoBoxes[i].style.display = "none";
    
  }
  for (i=0; i<mathBoxes.length; i++){

    mathBoxes[i].style.display = "none";
    
  }
  for (i=0; i<chemistryBoxes.length; i++){

    chemistryBoxes[i].style.display = "none";
    
  }
  for (i=0; i<physicsBoxes.length; i++){

    physicsBoxes[i].style.display = "block";
    
  }
  for (i=0; i<audioEditingBoxes.length; i++){

    audioEditingBoxes[i].style.display = "none";

  }
  for (i=0; i<videoEditingBoxes.length; i++){

    videoEditingBoxes[i].style.display = "none";

  }
  for (i=0; i<pianoBoxes.length; i++){

    pianoBoxes[i].style.display = "none";

  }
  for (i=0; i<creativeWritingBoxes.length; i++){

    creativeWritingBoxes[i].style.display = "none";

  }
} else if(event.target == audioEditing || event.target == audioEditingPic) {

  coding.classList.remove('active');
  hiking.classList.remove('active');
  photography.classList.remove('active');
  math.classList.remove('active');
  chemistry.classList.remove('active');
  physics.classList.remove('active');
  audioEditing.classList.add('active');
  videoEditing.classList.remove('active');
  piano.classList.remove('active');
  creativeWriting.classList.remove('active');
  all.classList.remove('active')


  for(i=0; i<codeBoxes.length; i++){

    codeBoxes[i].style.display = "none";
  
  }
  for (i=0; i<hikeBoxes.length; i++){

    hikeBoxes[i].style.display = "none";
  
  }
  for (i=0; i<photoBoxes.length; i++){

    photoBoxes[i].style.display = "none";
    
  }
  for (i=0; i<mathBoxes.length; i++){

    mathBoxes[i].style.display = "none";
    
  }
  for (i=0; i<chemistryBoxes.length; i++){

    chemistryBoxes[i].style.display = "none";
    
  }
  for (i=0; i<physicsBoxes.length; i++){

    physicsBoxes[i].style.display = "none";
    
  }
  for (i=0; i<audioEditingBoxes.length; i++){

    audioEditingBoxes[i].style.display = "block";

  }
  for (i=0; i<videoEditingBoxes.length; i++){

    videoEditingBoxes[i].style.display = "none";

  }
  for (i=0; i<pianoBoxes.length; i++){

    pianoBoxes[i].style.display = "none";

  }
  for (i=0; i<creativeWritingBoxes.length; i++){

    creativeWritingBoxes[i].style.display = "none";

  }
} else if(event.target == videoEditing || event.target == videoEditingPic) {

  coding.classList.remove('active');
  hiking.classList.remove('active');
  photography.classList.remove('active');
  math.classList.remove('active');
  chemistry.classList.remove('active');
  physics.classList.remove('active');
  audioEditing.classList.remove('active');
  videoEditing.classList.add('active');
  piano.classList.remove('active');
  creativeWriting.classList.remove('active');
  all.classList.remove('active')


  for(i=0; i<codeBoxes.length; i++){

    codeBoxes[i].style.display = "none";
  
  }
  for (i=0; i<hikeBoxes.length; i++){

    hikeBoxes[i].style.display = "none";
  
  }
  for (i=0; i<photoBoxes.length; i++){

    photoBoxes[i].style.display = "none";
    
  }
  for (i=0; i<mathBoxes.length; i++){

    mathBoxes[i].style.display = "none";
    
  }
  for (i=0; i<chemistryBoxes.length; i++){

    chemistryBoxes[i].style.display = "none";
    
  }
  for (i=0; i<physicsBoxes.length; i++){

    physicsBoxes[i].style.display = "none";
    
  }
  for (i=0; i<audioEditingBoxes.length; i++){

    audioEditingBoxes[i].style.display = "none";

  }
  for (i=0; i<videoEditingBoxes.length; i++){

    videoEditingBoxes[i].style.display = "block";

  }
  for (i=0; i<pianoBoxes.length; i++){

    pianoBoxes[i].style.display = "none";

  }
  for (i=0; i<creativeWritingBoxes.length; i++){

    creativeWritingBoxes[i].style.display = "none";

  }
} else if(event.target == piano || event.target == pianoPic) {

  coding.classList.remove('active');
  hiking.classList.remove('active');
  photography.classList.remove('active');
  math.classList.remove('active');
  chemistry.classList.remove('active');
  physics.classList.remove('active');
  audioEditing.classList.remove('active');
  videoEditing.classList.remove('active');
  piano.classList.add('active');
  creativeWriting.classList.remove('active');
  all.classList.remove('active')


  for(i=0; i<codeBoxes.length; i++){

    codeBoxes[i].style.display = "none";
  
  }
  for (i=0; i<hikeBoxes.length; i++){

    hikeBoxes[i].style.display = "none";
  
  }
  for (i=0; i<photoBoxes.length; i++){

    photoBoxes[i].style.display = "none";
    
  }
  for (i=0; i<mathBoxes.length; i++){

    mathBoxes[i].style.display = "none";
    
  }
  for (i=0; i<chemistryBoxes.length; i++){

    chemistryBoxes[i].style.display = "none";
    
  }
  for (i=0; i<physicsBoxes.length; i++){

    physicsBoxes[i].style.display = "none";
    
  }
  for (i=0; i<audioEditingBoxes.length; i++){

    audioEditingBoxes[i].style.display = "none";

  }
  for (i=0; i<videoEditingBoxes.length; i++){

    videoEditingBoxes[i].style.display = "none";

  }
  for (i=0; i<pianoBoxes.length; i++){

    pianoBoxes[i].style.display = "block";

  }
  for (i=0; i<creativeWritingBoxes.length; i++){

    creativeWritingBoxes[i].style.display = "none";

  }
} else if(event.target == creativeWriting || event.target == creativeWritingPic) {

  coding.classList.remove('active');
  hiking.classList.remove('active');
  photography.classList.remove('active');
  math.classList.remove('active');
  chemistry.classList.remove('active');
  physics.classList.remove('active');
  audioEditing.classList.remove('active');
  videoEditing.classList.remove('active');
  piano.classList.remove('active');
  creativeWriting.classList.add('active');
  all.classList.remove('active')


  for(i=0; i<codeBoxes.length; i++){

    codeBoxes[i].style.display = "none";
  
  }
  for (i=0; i<hikeBoxes.length; i++){

    hikeBoxes[i].style.display = "none";
  
  }
  for (i=0; i<photoBoxes.length; i++){

    photoBoxes[i].style.display = "none";
    
  }
  for (i=0; i<mathBoxes.length; i++){

    mathBoxes[i].style.display = "none";
    
  }
  for (i=0; i<chemistryBoxes.length; i++){

    chemistryBoxes[i].style.display = "none";
    
  }
  for (i=0; i<physicsBoxes.length; i++){

    physicsBoxes[i].style.display = "none";
    
  }
  for (i=0; i<audioEditingBoxes.length; i++){

    audioEditingBoxes[i].style.display = "none";

  }
  for (i=0; i<videoEditingBoxes.length; i++){

    videoEditingBoxes[i].style.display = "none";

  }
  for (i=0; i<pianoBoxes.length; i++){

    pianoBoxes[i].style.display = "none";

  }
  for (i=0; i<creativeWritingBoxes.length; i++){

    creativeWritingBoxes[i].style.display = "block";

  }
} else if(event.target == all || event.target == allPic) {

  coding.classList.remove('active');
  hiking.classList.remove('active');
  photography.classList.remove('active');
  math.classList.remove('active');
  chemistry.classList.remove('active');
  physics.classList.remove('active');
  audioEditing.classList.remove('active');
  videoEditing.classList.remove('active');
  piano.classList.remove('active');
  creativeWriting.classList.remove('active');
  all.classList.add('active')


  for(i=0; i<codeBoxes.length; i++){

    codeBoxes[i].style.display = "block";
  
  }
  for (i=0; i<hikeBoxes.length; i++){

    hikeBoxes[i].style.display = "block";
  
  }
  for (i=0; i<photoBoxes.length; i++){

    photoBoxes[i].style.display = "block";
    
  }
  for (i=0; i<mathBoxes.length; i++){

    mathBoxes[i].style.display = "block";
    
  }
  for (i=0; i<chemistryBoxes.length; i++){

    chemistryBoxes[i].style.display = "block";
    
  }
  for (i=0; i<physicsBoxes.length; i++){

    physicsBoxes[i].style.display = "block";
    
  }
  for (i=0; i<audioEditingBoxes.length; i++){

    audioEditingBoxes[i].style.display = "block";

  }
  for (i=0; i<videoEditingBoxes.length; i++){

    videoEditingBoxes[i].style.display = "block";

  }
  for (i=0; i<pianoBoxes.length; i++){

    pianoBoxes[i].style.display = "block";

  }
  for (i=0; i<creativeWritingBoxes.length; i++){

    creativeWritingBoxes[i].style.display = "block";

  }
}
}




