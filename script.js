//create function for clicking to next image 
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

// creat a questions /answers about me quiz to website

function buildQuiz(){
    const output = [];

    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        const answers = [];

        for(letter in currentQuestion.answers){
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    const answerContainers = quizContainer.querySelectorAll('.answers');

    let numCorrect = 0;

    myQuestions.forEach( (currentQuestion, questionNumber) => {

      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      if(userAnswer === currentQuestion.correctAnswer){
        numCorrect++;
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      else{
        answerContainers[questionNumber].style.color = 'red';
      }
    });
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "What is Kaddijatou's favorite color?",
      answers: {
        a: "Black",
        b: "Olive green",
        c: "Pink"
      },
      correctAnswer: "c"
    },
    {
      question: "What is Kaddijatou's favorite Bible story?",
      answers: {
        a: "Ruth",
        b: "Exodus",
        c: "Creation"
      },
      correctAnswer: "a"
    },
    {
      question: "What is Kaddijatou's millitary occupation?",
      answers: {
        a: "Information techincal specialist",
        b: "Combat medic",
        c: "Driver",
        
      },
      correctAnswer: "b"
    }
  ];

  buildQuiz();

  submitButton.addEventListener('click', showResults);


