var Promise = require('bluebird');

module.exports = function setGpio(PIN, STATE) {
	return new Promise(function(resolve, reject) {
		// async work here
	
		var gpio = require('rpi-gpio')
		var gpiop = gpio.promise;
		 
		gpiop.setup(PIN, gpio.DIR_OUT)
		.then(() => {
			gpiop.write(PIN, STATE)
		})
		.catch((err) => {
			console.log('Error: ', err.toString())
		})
	
		resolve('PIN ',PIN, ' value set to : ',STATE);
		
		// if something fails, reject(new Error('bad bad'));
	});
};