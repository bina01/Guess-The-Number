const randomNumber=Math.floor(Math.random() * 100) + 1;
function checkGuess() {
    const userGuess = parseInt(document.getElementById("guess").value);

    if (userGuess === randomNumber) {
      alert("Congratulations! You guessed the correct number!");
    } 
    else if(userGuess<1 || userGuess>100){
      alert(`Please insert a number between 1 and 100`);
    }else if(userGuess<randomNumber) {
      alert(`Please try a greater number`);
    }
    else if(userGuess>randomNumber){
      alert(`Please try a smaller number`);
    }
    
    else{
      alert(`Please insert a valid number`);
    }
}