document.getElementById("secret-code")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("decrypter-button").click();
    }
});



function decrypt() {
  var str = document.getElementById("secret-code").value;
  var odds = str.slice(0,(str.length/2));
  var evens = str.slice((str.length/2));
  var output = "";

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
