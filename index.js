module.exports = function(sails) {
	
	const install = require('./install.js');
	const setup = require('./setup.js');
	var getGpio = require('./lib/getGpio.js');
	var setGpio = require('./lib/setGpio.js');
	var readAllGpio = require('./lib/readAllGpio.js');
	var exec = require('./lib/exec.js');
	
	return {
		install : install,
		setup : setup,
		getGpio: getGpio,
		setGpio: setGpio,
		readAllGpio: readAllGpio,
		exec : exec
	};
	
};