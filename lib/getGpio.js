var Promise = require('bluebird');

module.exports = function getGpio(PIN) {
	return new Promise(function(resolve, reject) {
		// async work here
		
		var gpio = require('rpi-gpio');
		var gpiop = gpio.promise;
		 
		gpiop.setup(PIN, gpio.DIR_IN)
		.then(() => {
			gpio.read(PIN,function(err,value){
				console.log('Pin: ', PIN);
				console.log('value: ', value);
				resolve(value);
			});
		})
		.catch((err) => {
			console.log('Error: PIN ', PIN, ' ',err.toString());
		})
				
					
		
		
		// if something fails, reject(new Error('bad bad'));
	});
};