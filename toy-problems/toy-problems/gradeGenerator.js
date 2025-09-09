function gradeGenerator(marks) {
    if (marks > 79) return "A";
    else if (marks >= 60) return "B";
    else if (marks >= 49) return "C";
    else if (marks >= 40) return "D";
    else return "E";
}

// Example
const marks = 83;
console.log("Grade:", gradeGenerator(marks));
