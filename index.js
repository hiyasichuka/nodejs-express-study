var os = require('os');
console.log(os.platform());
console.log(process.cwd());

let path = require("path");
let s = process.argv[1];
// process.chdir(path.dirname(process.argv[1]));
process.chdir(__dirname);
console.log(process.cwd());