var Promise = require('bluebird');

module.exports = function setGpio(PIN, STATE) {
	return new Promise(function(resolve, reject) {
		// async work here
		var valueToReturn = 12;
		
		var gpio = require('rpi-gpio')
		var gpiop = gpio.promise;
		 
		gpiop.setup(PIN, gpio.DIR_OUT)
		.then(() => {
			console.log('pin: ', PIN);
			gpiop.write(PIN, STATE)
			console.log('value set to: ', STATE);
		})
		.catch((err) => {
			console.log('Error: ', err.toString())
		})
	
		resolve(valueToReturn);
		
		// if something fails, reject(new Error('bad bad'));
	});
};