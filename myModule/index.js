// getter of the port number
function getPort() {
  return 8081;
}

// export port getter
exports.getPort = getPort;
// or: this.getPort;
// or: module.exports.getPort;

console.log('myModule is required!');
