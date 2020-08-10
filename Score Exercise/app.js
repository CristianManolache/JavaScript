//

const students = [
    {name: "Cristian",score:87},
    {name: "Alexandru",score:24},
    {name: "Roberto",score:55},
    {name: "Rahma",score:88},
    {name: "Ivo",score:99},
    {name: "John",score:100}
];

let totalScores = 0;

for(let i = 0; i < students.length; i++){
    totalScores += students[i].score;
}
console.log(totalScores);

let average = totalScores / students.length;
console.log(average);


for(let i = 0; i < students.length; i++){
    if(students[i].score > average){
        students[i].betterThanAverage = true;
    }
    else{
        students[i].betterThanAverage = false;
    }
}