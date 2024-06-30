function studentMarksGenerator() {
    const marks = Number(prompt("enter marks "))
    if (marks < 0 || marks > 100) {
        return alert("this input is not valid!");
    }
    else if (marks > 79) {
        return alert("A");
    }
    else if (marks >= 60 && marks <= 79) {
        return alert("B");
    }
    else if (marks >= 50 && marks <= 59) {
        return alert("C");
    }
    else if (marks >= 40 && marks <= 49) {
        return alert("D");
    }
    else
        return alert("E");
}
return marks

console.log(studentMarksGenerator());