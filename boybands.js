var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?)
var bandLoopCount = bands.length;
var vegLoopCount = vegetables.length;

// Keep track of which band we're on in the loop
// Keep track of which veggie we're on in the loop

// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById("boy-bands");

// Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById("vegetables");

// Start looping

  // Add the band names into the correct <div>

  // Add the veggie names into the correct <div>
for ( var i = 0; i < bands.length; i++ ) {
  bandElement.innerHTML += ( "<div>" + " " + bands[i] + "</div>" );
}

for ( var i = 0; i < vegetables.length; i++ ) {
  veggieElement.innerHTML += ( "<div>" + " " + vegetables[i] + "</div>" );
}
