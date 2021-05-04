
// Problem 1)
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)//Output..."Tesla"
console.log(otherRandomCar)// Output... "Mercedes"

// Problem 2)
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);// name is not defined.
console.log(otherName);// Output..."Elon"

// Problem 3)
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);// This logs the password
console.log(hashedPassword);// This logs "undefined" because the variable declaration isn't in the object.

// Problem 4)
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);//false, because first == 2 and second == 5
console.log(first == third);//true, because first == 2 and third == 2

// Problem 5)
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);//Output..."value"
console.log(secondKey);// Output... The whole array in secondKey
console.log(secondKey[0]);//Output...The value at the first index == 1
console.log(willThisWork);//Yeah...Output is 5

