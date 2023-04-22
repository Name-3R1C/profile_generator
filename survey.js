const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  "What's your name? Nicknames are also acceptable :) ",
  "What's an activity you like doing? ",
  "What do you listen to while doing that? ",
  "Which meal is your favourite (eg: dinner, brunch, etc.) ",
  "What's your favourite thing to eat for that meal? ",
  "Which sport is your absolute favourite? ",
  "What is your superpower? In a few words, tell us what you are amazing at! ",
];

const answers = [];
const askQuestions = function(index) {
  rl.question(questions[index], (answer) => {
    answers.push(answer);
    if (index < questions.length - 1) {
      askQuestions(index + 1);
    } else {
      rl.close();
      console.log('Thank you! Here is your profile generator:\n');
      profileGenerator();
    }
  });
};

const profileGenerator = function() {
  console.log(`${answers[0]} loves ${answers[2]} while ${answers[1]}, devouring ${answers[4]} for ${answers[3]}, prefers ${answers[5]} over any other sport, and is amazing at ${answers[6]}.`);
};

askQuestions(0);
