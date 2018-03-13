
var gravityNum = document.getElementById("gravityNum");
var calculateButton = document.getElementById("calculate-button");
var standardDrinks = document.getElementById("standard-drinks");

//event listeners (event, function, )

calculateButton.addEventListener("click", decrypt);

// functions

function decrypt() {
  var x = document.getElementById('gravityNum');
  let odds = x.slice(0,(x.length/2));
  let evens = x.slice((x.length/2));
  let output = "";

  for (let i = 0; i < x.length; i++) {
            if (i % 2) {
                output += odds[0];
                odds = odds.slice(1);
            } else {
                output += evens[0];
                evens = evens.slice(1);
            }
    }

    document.getElementById("standard-drinks").innerHTML = output;

}
