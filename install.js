module.exports = () => {

  const myNewDevice = {
    identifier : '123456',
    name: 'RPI2',
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