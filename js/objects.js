const student = {
  name: "Hadia",
  age: 21,
  university: "UAF",
  courses: ["HTML", "CSS", "REACT", "JAVASCRIPT"],
  introduce: function () {
    return `Hi I am ${this.name} from ${this.university}`;
  },
};
console.log(student.name);
console.log(student["university"]);
student.grade = "A";
for (let key in student) {
  console.log(key, student[key]);
}
