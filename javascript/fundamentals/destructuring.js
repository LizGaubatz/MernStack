// 1
// const cars = ['Tesla', 'Mercedes', 'Honda']
// const [ randomCar ] = cars
// const [ ,otherRandomCar ] = cars
// //tesla, mercedes
// console.log(randomCar)
// console.log(otherRandomCar)


// 2
// const employee = {
//     name: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }
// const { name: otherName } = employee;
// //reference error
// console.log(name);
// console.log(otherName);


// 3
// const person = {
//     name: 'Phil Smith',
//     age: 47,
//     height: '6 feet'
// }
// const password = '12345';
// const { password: hashedPassword } = person;  
// //12345, reference error
// // ACTUAL OUTPUT 12345, undefined
// console.log(password);
// console.log(hashedPassword);

// 4
// const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
// const [,first] = numbers;
// const [,,,second] = numbers;
// const [,,,,,,,,third] = numbers;
// //syntax error
// // ACTUAL OUTPUT false, true
// console.log(first == second);
// console.log(first == third);