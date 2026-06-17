function createCounter() {
  let count = 0;
  return {
    increment() {
      count++;
    },
    decrement() {
      count--;
    },
    getCount() {
      return count;
    },
  };
}

const c = createCounter();
c.increment();
c.increment();
c.decrement();
console.log(c.getCount());
console.log(c.count);
