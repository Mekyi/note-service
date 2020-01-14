module.exports = function InfoPlugin(options) {
  const infoData = require('./data/info.json');

  this.add('role:info,cmd:info', function info(msg, respond) {
    respond(null, infoData);
  })
}