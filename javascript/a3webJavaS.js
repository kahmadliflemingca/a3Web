/////////////// Section : Javascript Clock //////////////////////
// * Owner : Adrian Koornneef
// * Date  : 2022-12-06
// * From  : https://codepen.io/Tcip/pen/BNKjeN
//           https://flexiple.com/javascript/javascript-clock/
//           https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
//            https://www.w3schools.com/jsref/event_onclick.asp
// Creating function to manipulate document objects from W3 school when a button is clicked -AK//
// Kept same format, manipulating the ID's that it interacts with, and nested with clock function//
// so that the button causes both the date / time items and the text to appear within the stylized div container //
/////////////////////////////////////////////////////////////////
  

//initiate function called in HTML in the Clock holder -AK//
function myFunction() {
  document.getElementById("p2").innerHTML="There's lots to explore.."; /// The text we want inserted on the button click -AK///
  document.getElementById("p3").innerHTML="But don't lose track of time!";
  
  /// Variable re-initiates the myTimer function every second so the clock keeps updating -AK///
  var myVar=setInterval(function() {
  myTimer();
}, 1000);

 /// Function adds the date methods to the identified IDs in the HTML ///
function myTimer() {
  var timeVariable=new Date(); /// Identifies the date and time in a long string to feed to other sections of the code ///
  document.getElementById("clock").innerHTML=timeVariable.toLocaleTimeString(); /// Breaks down the date method and takes just the local time ///
  document.getElementById("showDate").innerHTML=timeVariable.toLocaleDateString(); /// Breaks down the date method and takes just the date ////
}
}
