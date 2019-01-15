const install = require('./lib/install.js');
const setup = require('./lib/setup.js');
var getGpio = require('./lib/getGpio.js');
var setGpio = require('./lib/setGpio.js');
var exec = require('./lib/exec.js');

module.exports = function(sails) {
	/* gladys.on('ready', function() {
    watchWithInterval();
	}); */
	
	return {
		install : install,
		setup : setup,
		getGpio: getGpio,
		setGpio: setGpio,
		exec : exec
	};
	
};

/* function watchWithInterval() {
  // Read devices every second
  watch().finally(function() {
    setTimeout(watchWithInterval, 2000);
  });
}  */