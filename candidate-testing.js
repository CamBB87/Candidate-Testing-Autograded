const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 

let candidateName = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //

let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2

let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? " ];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];

//Variable for part 3
let score = 0;

function askForName() {

  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("What is your name?: ");

}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //


  for (i = 0; i < questions.length; i++) {

    candidateAnswer = input.question(questions[i]);
    candidateAnswers.push(candidateAnswer);

  }

}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

  for (i = 0; i < correctAnswers.length; i++) {

    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()){

<<<<<<< HEAD
    console.log(`Correct! Q-${i + 1} correct answer: ${correctAnswers[i]}. your answer: ${candidateAnswers[i]} \n`);
    score += 1;

    } else if (candidateAnswers[i].toLowerCase() !== correctAnswers[i].toLowerCase()){

    console.log(`Incorrect! Q-${i + 1} correct answer: ${correctAnswers[i]}. your incorrect answer: ${candidateAnswers[i]} \n`);
=======
    console.log(`Correct! Q-${i + 1}. correct answer: ${correctAnswers[i]} your answer: ${candidateAnswers[i]} \n`);

    } else if (candidateAnswers[i].toLowerCase() !== correctAnswers[i].toLowerCase()){

    console.log(`Incorrect! Q-${i + 1}. correct answer: ${correctAnswers[i]} your incorrect answer: ${candidateAnswers[i]} \n`);
>>>>>>> 593e16668f605b5055ecbce1f1b049f5bb382419

  };


  }
  
  console.log(score)

  let grade = ((score / 5) * 100);  //TODO 3.2 use this variable to calculate the candidates score.
  console.log(grade)
  if (score >= 4) {

    console.log(`Congratulations! you passed the test with a score of ${grade}%.`)

  } else {

    console.log(`Try again! you can do it, your score this time was ${grade}%.`)

  }
  

  return grade;

}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("Welcome " + candidateName + " ready for a quiz?");
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};