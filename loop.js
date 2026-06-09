for (let i = 1; i <= 10; i++) {
  console.log(i);
}

let number = 10;
while (number >= 1) {
  console.log(number);
  number--;
}

const skills = ["HTML", "CSS", "JAVASCRIPT", "REACT"];

skills.forEach((skill, index) => {
  console.log(`${index + 1}.${skill}`);
});
