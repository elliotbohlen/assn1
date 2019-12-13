$( function() {
    $( ".draggable" ).draggable();
  } );


document.getElementById("txt").addEventListener("click", readMe);
  function readMe() {
    var element = document.getElementById("readmeclick");
      element.classList.add("hide");
    document.getElementById("readme").classList.add("hide");
  	document.getElementById("popup1").classList.remove("hide");
    	document.getElementById("ladies").classList.remove("hide");
      document.getElementById("bg").classList.add("hue");
}


/*

var checkpoint = 0; // global variable

// onload:
checkpoint = localStorage.getItem("checkpointValue");

// click start
// drag textedit #1
// drag textedit #2



// click on untitled folder
  // hide "desktop-" + checkpoint
  checkpoint = checkpoint + 1;
  // sh
  ow "desktop-" + checkpoint
  localStorage.setItem("checkpointValue", checkpoint)


*/






//////////////////////////
////////////////////////







// once content has been loaded
window.addEventListener('DOMContentLoaded', function(){
	checkForItems();
	saveUserInfo(); // run saving user info
});
