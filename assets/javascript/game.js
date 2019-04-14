var won = 0;
var lost = 0;
var attempts = 10;
var usedArray = [];


var letters;
// renders all div tags in a nice css
function PrettyUpPage() {
    // needs a separate css sheet ... let's build our stuff on the fly

    // put the generic here, and the specific right in the HTML

    A = document.getElementsByTagName("div");

    for (i = 0; i < A.length && 1 == 1; i += 1) {

        A[i].style.cssText += "; border: 1px solid #CCCC00; padding: 10px; margin: 3px;";

    }

    LetterSpans = document.getElementsByTagName("span");

    for (i = 0; i < LetterSpans.length && 1 == 1; i += 1) {

        LetterSpans[i].style.cssText += ";border: 1px solid #0000CC; padding: 3px; margin: 3px; cursor: pointer; color: #CCCCCC;";

    }


    //GameStart();
}

function startGame() {

    // display the game board
    document.getElementById("playingBoard").style.display = "block";
    letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q"
        , "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    //generate a random number to access the letter array

    computerGenerate = letters[Math.floor(Math.random() * letters.length)];
    computerGenerate = 'b';
    console.log(computerGenerate);

    // get the user input

    document.onkeyup = function (event) {
        var playerGuess = event.key;
        attempts.alert(playerGuess);


        function LetterClick(letter) {
            playerGuess = letter;
            console.log('playerGuess : ' + playerGuess);
            console.log('computerGenerate : ' + computerGenerate);
            if (playerGuess.toLowerCase() === computerGenerate.toLowerCase()) {
                console.log('won : ' + won);
                won++;
                console.log('won : ' + won);
                document.getElementById('won').innerHTML = won;
                attempts = 10;
                usedArray = [];
            }

            if (playerGuess.toLowerCase() === computerGenerate.toLowerCase()) {
                won++;
                attempts = 10;
                usedArray = [];
                alert("you won");
            }
        }


        if (playerGuess !== computerGenerate) {
            attempts--;

        } else if (attempts == 0) {
            lost++;
            usedArray = []
            attempts = 10;
            document.getElementById('attempts').innerHTML = attempts;
        }

        //     // list the letters that the user guessed
        if (usedArray.indexOf(playerGuess) >= 0) {
        }
        else {
            usedArray.push(playerGuess);
            document.getElementById('playerGuess').innerHTML = usedArray;
        }

        if ('attempt' > 10) {
            // user looses
            // restart the game
        }
    }

    // document.getElementById('lost').innerHTML = lost;
    // document.getElementById('attempts').innerHTML = attempts;


}
