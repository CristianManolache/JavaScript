//Quiz v1.0

const example = [
    ["cristian","alexandru"],
    ["banana","orange"],
    ["keyboard","mouse"]
]

console.log(example); //log all the arrays
let names = example[0]; //log the 1st array which has the names inside
let fruits = example[1];//log the 2nd array which has the fruits inside
let hardwares = example[2]//log the 3rd array which has the hardwares inside
//console.log(example[0][1]) output is the first array and print alexandru name!

const quiz = [
    ["Best country to live in?","italy"],
    ["Capital of Italy?","rome"],
    ["Capital of Romania?","bucharest"]
]

let score = 0;

for(let i = 0;i < quiz.length; i++) {
    let answer = prompt(quiz[i][0]);
    let answerCorrect = answer.toLowerCase().trim();

    if(answerCorrect === quiz[i][1]) {
        alert("Good answer");
        score++
    }else {
        alert(`Wrong answer.The correct answer is ${quiz[i][1]}`);
    }
}

let correctPercentScore = ((score / quiz.length) * 100).toFixed(2);

alert(`You have answer ${score} question correctly of ${quiz.length}
and your percent is ${correctPercentScore}%`);