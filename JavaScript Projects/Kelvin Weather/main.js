//This is the value of kelvin
const kelvin = 293;
//This converts Kelvin to Celsius
let celsius = kelvin - 273;
//This line is to calculate Fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;
//This line converts celsius to fahrenheit
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
let newton = celsius * (33 / 100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} in Newton.`);
