
let student = {
    name: "Suban",
    age: 35,
    enrolled: true,
    courses: ["English", "Math", "History", "Physics", "Computer Programming"],
    info: function() {
        return `The student ${this.name} age ${this.age} is enrolled in the following courses ${this.courses.join(", ")}.`;
    } 
}

console.log(student.name);
console.log(student.age);

console.log(student.info());

let studentJsonString = JSON.stringify(student)

console.log(studentJsonString);

let studentObject = JSON.parse(studentJsonString)

console.log(studentObject);
console.log(student);

const {name, courses} = student

console.log(name);
console.log(courses);

let scores = [85, 92, 53, 78, 90]

const [first, second] = scores;

console.log(first);
console.log(second);

let cloneStudent = {...student}

console.log(cloneStudent);