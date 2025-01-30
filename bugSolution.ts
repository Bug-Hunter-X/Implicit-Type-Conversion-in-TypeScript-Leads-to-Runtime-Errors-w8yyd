function add(a: number, b: number): number {
  return a + b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

let result1 = add(10, 20); 
console.log(result1); //30

let result2 = add(10, "hello"); //this will now show an error 
console.log(result2); // error

let num1:number = 10;
let num2:number = 20;

let result3 = add(num1,num2);
console.log(result3); //30