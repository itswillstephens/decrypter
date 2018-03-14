
var secretCode = document.getElementById("secret-code");
var decrypterButton = document.getElementById("decrypter-button");

//event listeners (event, function, )

decrypterButton.addEventListener("click", decrypt);

// functions

function decrypt() {
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
