function greet(name) {
  return `hello, ${name}`;
}

const greetArrow = (name) => {
  return `hello, ${name}`;
};

function calculateArea(width, height) {
  return width * height;
}

function isEven(number) {
  return number % 2 === 0;
}

console.log(greet("hadia"));
console.log(greetArrow("shahid"));
console.log("area:", calculateArea(2, 4));
console.log("8 is even?", isEven(8));
console.log("7 is even?", isEven(7));
