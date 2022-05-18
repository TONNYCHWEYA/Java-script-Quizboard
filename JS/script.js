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
 var q1 = document.forms["form"]["Q1"].value;
 var q2 =document.forms["form"]["Q2"].value;
 var q3= document.forms["form"]["Q3"].value;
 var q4 = document.forms["form"]["Q4"].value;
 var q5 = document.forms["form"]["Q5"].value;
 var results = document.getElementById('results');
 //compare the answers
 //if answer was not selected
 /*for(var i = 1; i <= noOfQuestions; i++){
   if(eval('q' + i) == ''){
     alert("You missed question" + i);
   }
   

 }
 */
 
 
 for(var i = 1; i <= noOfQuestions; i++){
  if(eval('q' + i) == answer[i -1]){
    score++;
  }
 }
 
 alert(score);
 document.getElementById("results").innerText = scoreDiplay(score);
  

 }
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