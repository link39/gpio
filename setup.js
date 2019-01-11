module.exports = () => {

// Use a param defined in 'parameters

const Promise = require('bluebird');

// Using arrow functions. Check ES6 specs for more informations
module.exports = () => {

    // uncomment following line ;)
    console.log('You have to put a valid parameterName in /lib/getGladysParam.js');
    const RPI_MODEL = 'RPI_MODEL';
    const RPI_MODELPromise = gladys.param.getValue(RPI_MODEL);
	
    // As gladys convention is to generate Promises... gladys.param.getValue returns a Promise. You have to resolve it.
    // We don't deal with reject here because gladys.param.getValue already does it.
    return Promise.resolve(RPI_MODELPromise.then((result) => {
		'The parameter value is ' + result
		if(result==3){
			const myNewDevice = {
				identifier : '123456',
				name: 'RPI',
				protocol: 'virtual',
				service: 'gpio'
			};
			// You can add deviceTypes now or later
			const types = [{
				identifier: '3',
				name: 'GPIO3',
				type: 'binary',
				category: 'none',
				unit:'',
				tag: 'GPIO3',
				sensor: false,
				min: 0,
				max: 1,
			},
			{
				identifier: '7',
				name: 'GPIO7',
				type: 'binary',
				category: 'none',
				unit:'',
				tag: 'GPIO7',
				sensor: false,
				min: 0,
				max: 1,
			},
			{
				identifier: '11',
				name: 'GPIO11',
				type: 'binary',
				category: 'none',
				unit:'',
				tag: 'GPIO11',
				sensor: false,
				min: 0,
				max: 1,
			}];
			return gladys.device.create({device: myNewDevice, types: types});
		}		
	}
	));

    // Yeah it's stupid to make a new Promise from a resolved one.
    // Just for the sake of the example...
}
}