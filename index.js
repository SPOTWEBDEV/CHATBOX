// IMPORT
const express = require('express')
const path = require('path')
require('./connection.js')
const cors = require('cors')
const cookie_parser = require('cookie-parser')


//  SETTING
const app = express()
const PORT = 5000

// STATIC
app.use(express.static('assest'))
app.use(express.static('UserImage'))


// MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(cookie_parser())
const session = require('express-session')
const { Socket } = require('socket.io')

app.use(session({
    secret: 'hi',
    httpOnly: false
}))


// ROUTER

app.use('/chatbox', require('./routerController/userRouter.js'))
app.use('/chatbox', require('./routerController/auth.js'))
app.use('/chatbox', require('./routerController/imageRouter.js'))
app.get('*', (req, res) => {
    res.render('notification/error404')
})




// EJS SETUP
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');









app.listen(PORT, ()=>{
    console.log(`CHATBOX IS RUNNING AT PORT ${PORT}`);
})