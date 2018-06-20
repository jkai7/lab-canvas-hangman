

  
function Hangman() {
  this.words = ["GODFATHER", "BANANA", "PLANE", "IRONHACK"];
  this.secretWord = "";
  this.guessedLetter = "";
  this.letters = [];
  this.errorsLeft = 10;
 }
 
 
 Hangman.prototype.getWord = function () {
    var random = [Math.floor(Math.random() * this.words.length)];
      return this.words[random]; //random indexed word from this.words array
};


Hangman.prototype.checkIfLetter = function (keyCode) { //Numbers have key codes 64-91 = A-Z. 
  
  if (keyCode > 64 && keyCode < 91){ //Checking if its a letter A-Z
   
    return true;
 
  }else{
    
    return false;
  
  }
}
  

Hangman.prototype.checkClickedLetters = function (key) {
  return this.letters.indexOf(key.toUpperCase()) === -1 ? true : false;

  // var letters = String.fromCharCode(event.keycode);
  // if(/[a-zA-Z]/){
  //   return true
  // }
  // return false; //Marcos 
};

Hangman.prototype.addCorrectLetter = function (i) {
  this.guessedLetter += this.secretWord[i].toUpperCase(); //Adding correct guessed letter from secretWord index
};                                                        //and then making it uppercase

Hangman.prototype.addWrongLetter = function (letter) {
  this.errorsLeft--; // Subtracting 1 from this.errsLeft for each wrong letter
};

Hangman.prototype.checkGameOver = function () {
  
  if(this.errorsLeft === 0){ //if no more errors left GAME OVER
    
    return true; 
 
  }else{ //Keep playing
   
    return false;
 }
};

Hangman.prototype.checkWinner = function () {
 
  if(this.secretWord.length === this.guessedLetter.length){
    
    return true; //Words must be same length becuase the letters could be in wrong order
  
  }else{
    
    return false
  }
    
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};

