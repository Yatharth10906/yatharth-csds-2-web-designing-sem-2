function add(a, b) {
    return (a + b);
}
//arrow function
const addArrow = (a, b) => {
    return (a + b);
}
//anonymous function
(a, b) => {
    return (a + b);
}
//IIFE
(function (a, b) {
    console.log(a + b);
})(1, 2)

console.log(add(1, 2))
console.log(addArrow(1, 2))
