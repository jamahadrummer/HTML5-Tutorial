const webXpanel = require('../node_modules/@crestron/ch5-webxpanel/dist/cjs/index.js');

const configuration = {
	host: '192.168.115.220',
	ipId: '28'
};

if (webXpanel.isActive) {
	console.log(`WebXPanel version: ${webXpanel.getVersion()}`);
	console.log(`WebXPanel build date: ${webXpanel.getBuildDate()}`);

	webXpanel.default.initialize(configuration);
}
else {
	console.log('Skipping WebXPanel since running on touchpanel');
}

const CrComLib = require('../node_modules/@crestron/ch5-crcomlib/build_bundles/cjs/cr-com-lib.js');

window.CrComLib = CrComLib;
window.bridgeReceiveIntegerFromNative = CrComLib.bridgeReceiveIntegerFromNative;
window.bridgeReceiveBooleanFromNative = CrComLib.bridgeReceiveBooleanFromNative;
window.bridgeReceiveStringFromNative = CrComLib.bridgeReceiveStringFromNative;
window.bridgeReceiveObjectFromNative = CrComLib.bridgeReceiveObjectFromNative;


//Original Contract Working Code
// import {
// 	publishEvent,
// 	subscribeState,
// 	bridgeReceiveIntegerFromNative,
// 	bridgeReceiveBooleanFromNative,
// 	bridgeReceiveStringFromNative,
// 	bridgeReceiveObjectFromNative
// } from '@crestron/ch5-crcomlib/build_bundles/cjs/cr-com-lib';

// window.bridgeReceiveIntegerFromNative = bridgeReceiveIntegerFromNative;
// window.bridgeReceiveBooleanFromNative = bridgeReceiveBooleanFromNative;
// window.bridgeReceiveStringFromNative = bridgeReceiveStringFromNative;
// window.bridgeReceiveObjectFromNative = bridgeReceiveObjectFromNative;