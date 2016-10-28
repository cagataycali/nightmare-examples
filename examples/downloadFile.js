var Nightmare = require('nightmare')
require('nightmare-download-manager')(Nightmare)

var nightmare = Nightmare()

nightmare.on('download', (state, downloadItem) => {
  if (state === 'started')
    nightmare.emit('download', 'nightmare.zip', downloadItem)
})

nightmare
  .downloadManager()
  .goto('https://github.com/segmentio/nightmare')
  .click('a[href="/segmentio/nightmare/archive/master.zip"]')
  .waitDownloadsComplete()
  .then(() => {
    console.log('done')
    return nightmare.end()
  })
