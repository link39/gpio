var Promise = require('bluebird');


module.exports = function readAllGpio() {
	return new Promise(function(resolve, reject) {
		var PINs =  [3,7,11,13,15,19,21,23,29,31,33,37,8,10,12,16,18,22,24,26,32,36,38,40];
		var valueToReturn = 42;

		
		for(i=0;i<PINs.length;i++){
			gladys.modules.rpigpio.getGpio(PINs[i]);
		}
						
		resolve(valueToReturn);
	});
};