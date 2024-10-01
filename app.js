'use strict';

const Homey = require('homey');
const { debug } = require('zigbee-clusters');
debug(true);

class tuyazigbee extends Homey.App {
	
	onInit() {
		//if (process.env.DEBUG === '1') {
			require('inspector').open(9222, '0.0.0.0', true);
		//}

		this.log('Tuya Zigbee JREVI app is running...');

		this.homey.flow.getActionCard('start_effect').registerRunListener(async (args, state) => {
			this.log("Christmas Lights Action Triggered");
			await args.christmas_lights_device.StartEffect(args);
			return true
		})
	}
	
}

module.exports = tuyazigbee;