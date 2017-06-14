var words = [ "Laura Pamer",
              "Dale Cooper",
              "Leo Johnson",
              "one arm-ed man",
              "Doctor Jacoby",
              "Bobby Briggs",
              "Ronette Pulaski",
              "Shelly Johnson", 
              "All work and no play make Ben and Jerry dull boys.",
              "Leland Palmer", 
              "huckleberry pie", 
              "Donna Hayward", 
              "Audrey Horne",
              "Black Lodge",
              "Red Room",
              "Harry Truman", 
              "Diane", 
              "douglas fir", 
              "Lucy", 
              "Bob", 
              "Norwegians", 
              "Twin Peaks", 
              "Blackie", 
              "Shall I compare thee to a summer's day?", 
              "Roadhouse", 
              "Tibet",
              "donuts",
              "Norma Jennings",
              "Gentleman Jim's",
              "noiseless drape runners",
              "Sometimes my arms bend back",
              "cotton balls",
              "coffee", 
              "Wow, Bob WoW.",
              "Doppleganger",
              "One Eyed Jack's",
              "Packard Mill", 
              "Doctor Hayward",
              "Fire, walk with me.", 
              "Josie Packard"];
    
var wins = 0;
var loses = 0;
var guesses = 10; 
var underlines = "";

var computerChoice = words[Math.floor(Math.random()*words.length)];
console.log(computerChoice)

document.onkeypress = function(event) {
  var userGuess = event.key;
  console.log(userGuess);



  for(var i = 0; i < computerChoice.length; i++){
      underlines += "_ ";  
    }

var underlineDiv = document.getElementById("underlines");
    underlineDiv.innerHTML = (underlines);
    
      if (userGuess === computerChoice[i]) {
        alert("Dale Cooper approves!")
      }
       else {
      alert("Whomp, whomp! Try again.")
       }
     }








 //  if (userGuess === computerChoice) {
 //     wins++;
 //   } 
 //   else {
 //     guesses--;
 //   }

 //   if (guesses === 0) {
 //   losses++
 // }


var titleDiv = document.getElementById("title");
    titleDiv.innerHTML = "Press any key to begin!";

var questionDiv = document.getElementById("question");
    questionDiv.innerHTML = "Think very hard before you guess!";

var winsDiv = document.getElementById("wins");
    winsDiv.innerHTML = "Wins: " + wins;       

var lossesDiv = document.getElementById("losses");
    lossesDiv.innerHTML = "Losses: " + losses;    

var guessesLeft = document.getElementById("guessesLeft");
    guessesLeft.innerHTML = "Guesses Left:";        



//var winDiv = document.createElement("wins");
   // winDiv.innerHTML ="WINS + wins";   

// document.getElementById('wins').innerHTML = "WINS: " + wins;
// document.getElementById('losses').innerHTML ="Losses: " + losses;
// document.getElementById('guessesLeft').innerHTML ="Guesses Remaining: " + guesses;
// }
