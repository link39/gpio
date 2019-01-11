// Use a param defined in 'parameters

const Promise = require('bluebird');

// Using arrow functions. Check ES6 specs for more informations
module.exports = () => {

    // uncomment following line ;)
    // console.log('You have to put a valid parameterName in /lib/getGladysParam.js');
	
    // As gladys convention is to generate Promises... gladys.param.getValue returns a Promise. You have to resolve it.
    // We don't deal with reject here because gladys.param.getValue already does it.
    return gladys.param.getValues(['RPI_MODEL'])
	.spread((RPI_MODEL) => {
		'The parameter value is ' + RPI_MODEL
		if(RPI_MODEL==3){
			const myNewDevice = {
				identifier : '123456',
				name: 'RPI',
				protocol: 'virtual',
				service: 'gpio'
			};
			
			var types = [];
			gpio=[3,5,7,11,13,15,19,21,23,29,31,33,35,37,12,16,18,22,24,26,32,36,38,40];
			
			gpio.forEach(element => {
				console.log(element);
				var prefix = 'GPIO';
				prefix+= element;
				types.push({
					identifier: element,
					name: prefix,
					type: 'binary',
					category: 'none',
					unit:'',
					tag: prefix,
					sensor: false,
					min: 0,
					max: 1,
				});
			});
			return gladys.device.create({device: myNewDevice, types: types});
		}	
		
		
			
	});

    // Yeah it's stupid to make a new Promise from a resolved one.
    // Just for the sake of the example...
}
