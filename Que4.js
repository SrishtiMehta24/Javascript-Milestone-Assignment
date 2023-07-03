let marksOfStudents= [56,90,89,67,45]
let highestMarks = marksOfStudents[0];

for (let i = 1; i < marksOfStudents.length; i++) {
    // console.log(marksOfStudents[i])
    highestMarks = marksOfStudents[i] > highestMarks ? marksOfStudents[i] : highestMarks;
}
console.log("Highest Marks: ",highestMarks)