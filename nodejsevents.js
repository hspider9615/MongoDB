const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('WaterFull', () => {
  setTimeout(() => {
    console.log('Please turn off the motor!');
    console.log('The script is still running');
  }, 2000);

  setTimeout(() => {
    console.log("Please turn off the motor! It's a gentle reminder.");
  }, 5000);
});

console.log('The script is running');

myEmitter.emit('WaterFull');

// console.log('The script is still running');
