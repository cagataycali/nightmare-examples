var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });

nightmare
  .goto('https://cagataycali.xyz')
  .inject('js', 'assets/jquery.js')
  .evaluate(() => {
    $('body').html('<h1>Cagatay Was Here</h1>')
    return 'hi'
  })
  .then(function (result) {
    callback(result);
  })
