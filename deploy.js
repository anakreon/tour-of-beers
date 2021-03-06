const Rsync = require('rsync');
const serverSettings = require('./src/environments/private/serverSettings');
 
const rsync = new Rsync()
  .shell('ssh')
  .flags('az')
  .set('delete')
  .source('./dist/tour-of-beers/')
  .source('./docs/')
  .exclude('.htaccess')
  .destination(serverSettings.destination);
 
rsync.execute(function(error, code, cmd) {});
