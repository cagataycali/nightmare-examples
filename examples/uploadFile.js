var Nightmare = require('nightmare');
require('nightmare-upload')(Nightmare);
var nightmare = Nightmare({
  show: true
});

nightmare
  .goto('https://www.tutorialspoint.com/php/src/upload.php')
  .upload('[type="file"]', 'assets/tombili.jpg')
  .wait(5000) /* If you dont want to submit form you can remove these line :) */
  // .click('[type="submit"]')
  // .wait(2000)
  // .end()
  .then(function (result) {
    console.log(result)
  })
  .catch(function (error) {
    console.error('Upload failed:', error);
  });
