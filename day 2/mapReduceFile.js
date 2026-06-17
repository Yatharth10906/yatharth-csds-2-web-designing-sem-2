const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const num2 = num.map((num) => num * num);
console.log(num2);

const divisiblebye2 = num.filter((num) => num % 2 == 0);
console.log(divisiblebye2);

const sum = num.reduce((acc, num) => acc + num, 0);
console.log(sum);