 function onSubmit(){
 //array of answers
 var answer =[
   'Object-Based',
   'block that combines a number of statements into a single compound statement',
   'Ignores the statements',
   'Declaration statements',
   'The local element'

 ];
 var score =0;
 var noOfQuestions =5;
 // listen to form submission and get user data
var userForm = document.getElementById("form");
userForm.addEventListener("submit", (e) => {
  e.preventDefault();
  var userData = new FormData(userForm);
  correctAnswer(userData);
});

//  compare user's with correct answers
function correctAnswer(userData) {
  for (let answer of userData) {
    var userKey = answer[0];
    var userValue = answer[1];
    if (userValue === quizData[userKey]) {
      score++;
    }
  }
  document.getElementById("results").innerText = scoreDiplay(score);
  userForm.style.display = "none";
}
// display the score to user
function scoreDiplay(score) {
  var score = (score / 5) * 100;
  var message = "";
  if (score < 50) {
    message = "Poor score retake the quiz";
  } else if (score < 80) {
    message = "Average score keep it up!";
  } else {
    message = "Excellent!";
  }
  return score + "%: " + message;
}
 }