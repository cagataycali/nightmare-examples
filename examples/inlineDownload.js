var Nightmare = require('nightmare');
require('nightmare-inline-download')(Nightmare);
var nightmare = Nightmare();
var downloadInfo = nightmare
  .goto('https://github.com/segmentio/nightmare')
  .click('a[href="/segmentio/nightmare/archive/master.zip"]')
  .download('nightmare.zip')
  .end()
  .then(()=>console.log('done'));
