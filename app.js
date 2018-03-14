
var gravityNum = document.getElementById("gravityNum");
var calculateButton = document.getElementById("calculate-button");
var standardDrinks = document.getElementById("standard-drinks");

//event listeners (event, function, )

calculateButton.addEventListener("click", decrypt);

// functions

function decrypt() {
  var str = document.getElementById('secret-code');
  let odds = str.slice(0,(str.length/2));
  let evens = str.slice((str.length/2));
  let output = "";

  for (let i = 0; i < str.length; i++) {
            if (i % 2) {
                output += odds[0];
                odds = odds.slice(1);
            } else {
                output += evens[0];
                evens = evens.slice(1);
            }
    }

    document.getElementById("secret-message").innerHTML = output;

}
