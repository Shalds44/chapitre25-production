const express = require('express')
const path = require('path')
const app = express()
module.exports = app;
const morgan = require('morgan')
const errorHandler = require('errorhandler')
const cookieParser = require('cookie-parser')
require('./database')

const index = require('./routes')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

require('./config/session.config')
//passport config après session sinon passport ne pourra pas accèder à req.session
require('./config/passport.config')

app.use(morgan('short'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

app.use(index)
if(process.env.NODE_ENV === 'development'){
    app.use(errorHandler())
}else{
    app.use((err, req, res, next) => {
        const code = err.code || 500
        res.status(code || 500).json({
            code: code,
            message: codee === 500 ? null : err.message
        })
    })
}
