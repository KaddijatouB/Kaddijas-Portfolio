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


var questions = [{
    question: "What is Kaddijatou's favorite color?",
    answers: ["Black", "Pink"]
}, {
    question: "What is Kaddijatou's millitary occupation?",
    answers: ["Medic", "Healthcare specialist", "68W"]
}, {
    question: "What is Kaddijatou's favorite bible story",
    answers: ["Ruth", "Paul", "David"]
}];

// Generic function to return a shuffled array:
function shuffled(arr) {
    arr = arr.slice(); 
    for (var i = 0; i < arr.length; i++) {
        var j = Math.floor(Math.random() * (arr.length - i)) + i;
        [arr[i], arr[j]] = [arr[j], arr[i]]; // swap
    }
    return arr;
}

// define variables for some of the HTML elements:
var domQuestion = document.querySelector('#question');
var domAnswers = Array.from(document.querySelectorAll('input[name=answer]'));
var domNext = document.querySelector('#next');

function displayQuestion() {
    // get a random order for the answers:
    var answers = shuffled(questions[questionId].answers);
    // Display question
    domQuestion.textContent = (questionId+1) + '. ' + 
                              questions[questionId].question;
    domAnswers.forEach(function (input, i){
        // Set checkbox value and unselect it
        input.value = answers[i];
        input.checked = false;
        // Display the answer text
        input.nextElementSibling.textContent = answers[i];
    });
}
// Initialise and display first question
var questionId = 0;
var correctAnswers = 0;
displayQuestion();

// Respond to a click on the Next button 
domNext.addEventListener('click', function () {
    // update correct answer counter:
    var domAnswer = domAnswers.find(input => input.checked);
    if (!domAnswer) return; // nothing was selected
    // update number of correctly answered questions:
    if (domAnswer.value == questions[questionId].answers[0]) correctAnswers++;
    // next question
    questionId++;
    if (questionId >= questions.length) {
        alert('You have answered ' + correctAnswers + 
              ' of ' + questions.length + ' questions correctly.');
        // restart
        questionId = 0;
        correctAnswers = 0;
    }
    displayQuestion();
});
