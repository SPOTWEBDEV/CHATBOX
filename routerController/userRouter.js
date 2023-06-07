const express = require('express')
const router = express.Router()
const { home, profile, deleteUser, addUser, displaycreatePost } = require('../controller/userController.js')
const multer = require('multer')
const path = require('path')
const db = require("../connection")




router.route('/profile').get(profile)
router.route('/deleteAccout').post(deleteUser)
router.route('/home').get(home)
router.route('/addUser').get(addUser)





// CREATE POST
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'UserImage/post')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})
const uploadPost = multer({ storage})
router.route('/createPost').get(displaycreatePost)
router.route('/createPost').post(uploadPost.single('postImage'), (req, res) => {
    const items = { user_id: req.session.user, post_desc: req.body.message, post_image: req.file.filename }
    const insert = `INSERT INTO post SET ?`
    db.query(insert, items, (error, result) => {
        if (!error) {
            res.redirect('/chatbox/timeline')
        } else {
            console.log(error);
        }
    })
})






module.exports = router