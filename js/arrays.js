const products = [
  { name: "Shirt", price: 500 },
  { name: "Shoes", price: 2000 },
  { name: "Cap", price: 300 },
  { name: "Jeans", price: 1500 },
  { name: "Belt", price: 400 },
  { name: "Jacket", price: 3000 },
];

// filter
const underThousandProducts = products.filter(
  (product) => product.price < 1000,
);
console.log("products under 1000:", underThousandProducts);

// map
const names = products.map((product) => product.name);
console.log("names:", names);

// find
const findShoes = products.find((product) => product.name === "Shoes");
console.log("name:", findShoes);

// reduce
const totalPrice = products.reduce(
  (total, product) => total + product.price,
  0,
);
console.log("total price:", totalPrice);
