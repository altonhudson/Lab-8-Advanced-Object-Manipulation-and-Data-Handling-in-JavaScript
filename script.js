// Part 1: Understanding and Creating Objects

let student = {
    name: "Suban",
    age: 35,
    enrolled: true,
    courses: ["English", "Math", "History", "Physics", "Computer Programming"],
    info: function() {
        return `The student ${this.name} age ${this.age} is enrolled in the following courses ${this.courses.join(", ")}.`;
    },
    addCourse: function(course){
        this.courses.push(course)
        return this.courses 
    },
    totalCourses: function() {
        return `The total number of courses is: ${this.courses.length}`
    }
}

console.log(student.name);
console.log(student.age);

console.log(student.info());

// Part 2: Working with jSON

let studentJsonString = JSON.stringify(student)

console.log(studentJsonString);

let studentObject = JSON.parse(studentJsonString)

console.log(studentObject);
console.log(student);

//Part 3: Destructuring

const {name, courses} = student

console.log(name);
console.log(courses);

let scores = [85, 92, 53, 78, 90]

const [first, second] = scores;

console.log(first);
console.log(second);

// Part 4: Spread Operator

let cloneStudent = {...student}

console.log(cloneStudent);

cloneStudent.gradutationYear = 2026

console.log(cloneStudent)

let newCourses = ["Biology", "Geography", "Introduction to javaScript", "Physical Education"]

let mergedCourses = [...student.courses, ...newCourses]

console.log(mergedCourses);

// Part 5: Object Methods

console.log(student.addCourse("gym"));
console.log(student.totalCourses());

// Bonus Task:

let averageScore = function() {
    const total = scores.reduce((sum, score) => sum + score, 0);
    const average = total / scores.length
    return `The average score is: ${average}%`
}

console.log(averageScore());