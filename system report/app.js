

import os from 'os';
console.log("    Abdelrahman Sha3rawy");

console.log("/*************************/");

console.log("system : ");
console.log(`* OS Type: ${os.platform()}`);
console.log(`* CPU Architecture: ${os.arch()}`);
console.log(`* Hostname: ${os.hostname()}`);


console.log("memory : ");
const totalMemGB = (os.totalmem() / (1024 * 1024 * 1024)).toFixed(2);
const freeMemGB = (os.freemem() / (1024 * 1024 * 1024)).toFixed(2);
const usedMemGB = totalMemGB - freeMemGB;



console.log(`* Total Memory : ${totalMemGB} GB`);
console.log(`* Free Memory : ${freeMemGB} GB`);
console.log(`* used Memory : ${usedMemGB.toFixed(2)} GB`);

console.log("calculate RAM : ");
const RAM=(usedMemGB/totalMemGB)*100;
console.log(`* RAM after calculating = ${RAM.toFixed(2)} %`);
console.log("user : ");
const user = os.userInfo();
console.log(`* Username: ${user.username}`);
const homeDir = os.homedir();
console.log(`* Home Directory: ${homeDir}`);


console.log("cpu : ");
const cpus = os.cpus();
console.log(`* Number of CPU Cores: ${cpus.length}`);


console.log("uptime : ");
const uptime = os.uptime();
const uptimeHours = Math.floor((uptime % (60 * 60 * 24)) / (60 * 60));
const uptimeMinutes = Math.floor((uptime % (60 * 60)) / 60);
console.log(`* System has been running for: ${uptimeHours} Hours, ${uptimeMinutes} Minutes`);

console.log("/*************************/");
console.log("          Thank you🎉");

