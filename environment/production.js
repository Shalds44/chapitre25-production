const path = require('path')

module.exports = {
    dbUrl: 'mongodb://localhost/twitter?authSource=admin',
    cert: path.join(__dirname, ''),
    key: path.join(__dirname, '')
}