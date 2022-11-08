
const history = {};
 const userName = prompt("Enter Your Name: ");
       
function play() {
   let guessCounter = 1;
 let correctNum = Math.floor(Math.random() * 10) + 1;
 var count = 0;
 //var guessArray = [];

 while(true){
 const guess = prompt("Guess a number");
 if(guess === null){
   alert("Goodbye!");
   break;
 }
 let numGuess = Number(guess);

 if(Number.isNaN(guess)){
    alert("Please Enter Valid Number");
    numGuess++;
 } else if(guess < correctNum){
    alert("Higher");
    numGuess++;
 }else if(guess > correctNum){
    alert("Lower");
    numGuess++;
 }else {

   if(history[userName] === undefined){
      alert(`${userName} Correct! It only took you ${numGuess} guesses!}`);
   }else{
      const previousAtt = history[userName];
      const difference = previousAtt - numGuess;

      if(difference < 0){
         alert(`That's Correct ${userName}! You did better in your last game by ${Math.abs(difference)} fewer guesses.`);
      }else if(difference > 0){
         alert(`That's Correct ${userName}! You beat you previous attempt by ${difference} fewer guesses.`);
      }else{
         alert(`That's Correct ${userName}! You tied your previous attempt.`);
      }
   }
    //alert(`${userName} Correct! It only took you ${count} guesses! \n Previous Entries: ${guessArray}`);
    history[userName] = numGuess;
    const goAgain = prompt("Do you want to play again?");
    if(goAgain.toLowerCase() === "yes"){
      play();
    }else{
      break;
    }
}
};
}
play();

