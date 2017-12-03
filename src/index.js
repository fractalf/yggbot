//import git from 'simple-git'
//require("babel-polyfill");
async function status (workingDir) {
   const git = require('simple-git/promise');

   let statusSummary = null;
   try {
      statusSummary = await git(workingDir).status();
   }
   catch (e) {
      // handle the error
   }

   return statusSummary;
}

console.log('asdf')
// using the async function
const dir = __dirname + '/../'
console.log(dir)
status('/home/alf/code/alf/yggbot').then(status => console.log(status));
