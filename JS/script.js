 function onSubmit(){
 //array of answers
 var answer =[
   "Object-Based",
   "block that combines a number of statements into a single compound statement",
   "Ignores the statements",
   "Declaration statements",
   "The local element"

 ];
 var score =0;
 var noOfQuestions =5;
 var q1 = document.forms["form"]["Q1"].value;
 var q2 =document.forms["form"]["Q2"].value;
 var q3= document.forms["form"]["Q3"].value;
 var q4 = document.forms["form"]["Q4"].value;
 var q5 = document.forms["form"]["Q5"].value;

 //compare the answers
 //if answer was not selected
 for(var i = 1; i <= noOfQuestions; i++){
   if('q' + i == ''){
     alert("You missed question" i);
   }

 }
 for(var i = 1; i <= noOfQuestions; i++){
  if('q' + i == answer(i -1)){
    score++;
  }


}
 }