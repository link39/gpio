module.exports = function exec(param) {
	return new Promise(function(resolve, reject) {
		// async work here
		var valueToReturn = 12;
		
		var gpio = require('rpi-gpio');
		var gpiop = gpio.promise;
		
		console.log('PIN :', param.deviceType.deviceTypeIdentifier);
		console.log('Value :', param.state.value);
		console.log('Value convert :', !!+param.state.value);
		
		var PIN = param.deviceType.deviceTypeIdentifier; 

		gpiop.setup(PIN, gpio.DIR_IN)
		.then(() => {
			gladys.modules.gpio.setGpio(PIN,param.state.value);
		})
/* 		.then(() => {
			gladys.modules.gpio.getGpio(PIN);
		}) */
				
					
		resolve(valueToReturn);
		
		// if something fails, reject(new Error('bad bad'));
	});
};