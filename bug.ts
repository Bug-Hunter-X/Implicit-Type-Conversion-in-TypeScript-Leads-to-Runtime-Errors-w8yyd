function add(a: number, b: number): number {
  return a + b;
}

let result = add("hello", 10); // This will compile without error, but will fail at runtime
console.log(result); // NaN