module.exports = function(sails) {
	
	const install = require('./lib/install.js');
	const setup = require('./lib/setup.js');
	var getGpio = require('./lib/getGpio.js');
	var setGpio = require('./lib/setGpio.js');
	var exec = require('./lib/exec.js');
	
	return {
		install : install,
		setup : setup,
		getGpio: getGpio,
		setGpio: setGpio,
		exec : exec
	};
	
};