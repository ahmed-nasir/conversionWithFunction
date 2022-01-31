function gradeCalculator(marks) {
    if (marks >= 80 && marks <= 100) {
        console.log("you got A+");
    } else if (marks >= 70 && marks <= 79) {
        console.log("you got A");
    } else if (marks >= 60 && marks <= 69) {
        console.log("you got B");
    } else if (marks >= 50 && marks <= 59) {
        console.log("you got C");
    } else if (marks >= 40 && marks <= 49) {
        console.log("you got D");
    } else if (marks >= 0 && marks <= 39) {
        console.log("you got F");
    }
}
let yourmarks = 135;
gradeCalculator(yourmarks);