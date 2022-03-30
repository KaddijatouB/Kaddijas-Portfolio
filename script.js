// create function for clicking to next image 
var slide = 1;
showDivs(slide);

function plusDivs(n) {
  showDivs(slide += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1} 

  if (n < 1) {slideIndex = x.length} ;

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  
  x[slide-1].style.display = "block"; 
}

var userName = window.prompt("Hello, What is your name? ");
console.log("Let's play", userName)
/**
 * userName = input("Hello, What is your name? ")
print()
print("Let's play", userName)
print()
print("Computer is thinking...")
time.sleep(2)
print()

print(userName,"you have", MAX_TRY, "attempts to guess a number between 1 and 20", sep =' ')
print()


numAttempts = 1


while (numAttempts <= MAX_TRY):
  print("Attempt", numAttempts)
  userGuesses = int(input("Enter a guess:"))
  computerGuesses = randint(MIN,MAX)
  numAttempts = numAttempts + 1
  
  if (userGuesses == computerGuesses):
    print("Good Job,",userName,"You guessed my number in",numAttempts, "guesses!")
    break
  elif (userGuesses < MIN):
    print("You must enter a number between 1 and 20")
  elif (userGuesses > MAX):
    print("You must enter a number between 1 and 20")
  elif (userGuesses < computerGuesses) and not (userGuesses < MIN):
    print("Too low!")
  elif (userGuesses > computerGuesses) and not (userGuesses > MAX):
    print("Too high!")
  if (numAttempts > MAX_TRY):
    print("Gameover!")
    playAgain = input("Would you like to play again?")
    if playAgain == 'yes':
      #reset game
      numAttempts = 1
    else:
      print("Goodbye")
 */