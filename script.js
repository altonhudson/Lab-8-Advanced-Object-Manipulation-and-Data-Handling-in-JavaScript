
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