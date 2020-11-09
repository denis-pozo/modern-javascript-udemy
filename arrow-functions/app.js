// const sayHello = function() {
//   console.log('Hello');
// }

// const sayHello = (name) => {
//   console.log(`Hello ${name}`);
// }

const sayHello = (firstName, lastName) => {
  console.log(`Hello ${firstName} ${lastName}`);
}

sayHello('Brad', 'Travis');

const users = ['Nathan', 'John', 'William'];

// const nameLengths = users.map(function(name) {
//   return name.length;
// });

const nameLengths = users.map(name => name.length); 
console.log(nameLengths);
