// Task 1: Calculating the area of the rectangle

// Declaring a variable for the length of the rectangle

let lengthOfTheRectangle: number = 3;

// Declaring a variable for the width of the rectangle

let widthOfTheRectangle: number = 4;

// Calculating the area of the rectangle (length * width)

let areaOfTheRectangle: number = lengthOfTheRectangle * widthOfTheRectangle;

// Outputting the area value to the console

console.log('The area of the rectangle is:', areaOfTheRectangle);

// Task 2: Calculating body mass index

// Declaring a variable for body weight in kilograms

let BodyWeight: number = 86;

// Declaring a variable for a person's height in meters

let PersonHeight: number = 1.86;

// Calculating body mass index

let BodyMassIndex: number = BodyWeight / (PersonHeight * PersonHeight);

// Displaying body mass index to console

console.log('Body mass index is:', BodyMassIndex);

// Task 3: Temperature converter

// Declaring a variable for temperature in degrees Celsius

let TemperatureCelsius: number = 37;

// Calculating temperature in degrees Fahrenheit

let TemperatureFahreheit: number = (9 / 5) * TemperatureCelsius + 32;

// Outputting temperature in degrees Fahrenheit to console

console.log('Temperature in degrees Fahrenheit will be:', TemperatureFahreheit, '°F');

// Task 4: Age of majority information

// Declaring a variable for a person's age

let PersonAge: number = 61;

// Checking the age of majority

let checkingTheAge: boolean = PersonAge >= 18;

// Outputting the result to the console

console.log('The person is of majority:', checkingTheAge);

// Task 5: Full name

// Declaring a variable for a person's name

let firstName: string = 'Jevgeni';

// Declaring a variable for a person's last name

let lastName: string = 'Massalov';

// Full name of a person

let fullName: string = firstName + ' ' + lastName;

// Outputting the full name to the console

console.log((fullName = firstName), ' ', lastName);

// Task 6: Age Check and Strict Equality

// Declaring a variable for user age

let userAge: number = 18;

// Declaring a variable for required age

let requiredAge: number = 18;

// Declaring a variable for hasa access

let hasAccess: boolean = userAge === requiredAge;

// Outputting the result to the console

console.log('Has access:', hasAccess);

// Task 7: Age Check and Strict Equality of Different Types

// Declaring a variable for user input

let userInput: string = '18';

// Declaring a variable for actual age

let actualAge: number = 18;

// Declaring a Variable is Equal Loose

let isEqualLoose = userInput == actualAge;

// Declaring a Variable is Equal Strict

let isEqualStrict = userInput === actualAge;

// Outputting the results to the console

console.log('Is Equal Loose:', isEqualLoose);
console.log('Is Equal Strict:', isEqualStrict);

// Task 8: Converting a type from String to Number

// Declaring a variable for a string

let stringVariable: string = '123';

// Converting a string to a number

let numberVariable: number = Number(stringVariable);

// Outputting the result to the console

console.log('String value:', stringVariable);
console.log('The number is:', numberVariable);

// Task 9: Converting a type from Number to String

// Declaring a variable for a number

let numberVariable2: number = 321;

// Converting a number to a string

let stringVariable2: string = String(numberVariable2);

// Outputting the result to the console

console.log('The number is:', numberVariable2);
console.log('String value:', stringVariable2);
