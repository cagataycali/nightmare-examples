var Nightmare = require('nightmare');
var nightmare = Nightmare({
  openDevTools: {
    mode: 'detach'
  },
  webSecurity: false,
  show: true
});
var server = require('../dependencies/server')(); // Dummy api.
nightmare
  .goto('http://localhost:9000')
  .inject('js', 'assets/jquery.js')
  .evaluate(() => {
    $.get( "http://localhost:9000/hi?name=cagatay&surname=cali", function( data ) {
      console.log(JSON.stringify(data));
    });
  })
  .then((value) => {
    console.log(value);
  })
