#!/usr/bin/env node
'use strict';

let exec = require('child_process').exec;
let enableCmd = 'sudo /System/Library/CoreServices/RemoteManagement/ARDAgent.app/Contents/Resources/kickstart -activate -configure -access -off -restart -agent -privs -all -allowAccessFor -allUsers';

exec(enableCmd, (error, stdout, stderr) => {
	exec('ipconfig getifaddr en0', (error, stdout, stderr) => {
		let copyCmd = `printf "vnc://${stdout}" | pbcopy`.replace(/(\r\n|\n|\r)/gm,'');
		exec(copyCmd, (error, stdout, stderr) => {
			console.log('screen sharing address is on your clipboard');
		});
	});
});