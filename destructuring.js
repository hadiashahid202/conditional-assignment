// const student = {
//   name: "hadia",
//   age: 21,
//   university: "uaf",
// };

// destructuring
const { name, age, university } = student;
console.log(name);
console.log(age);
console.log(university);
// spread into new object
const newStudent = {
  ...student,
  grade: "A",
};
console.log(student);
console.log(newStudent);

const courses = ["html", "css", "javascript", "react"];
const [first, second, ...rest] = courses;
console.log(first);
console.log(second);
console.log(rest);
