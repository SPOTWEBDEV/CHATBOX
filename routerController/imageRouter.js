const express = require('express')
const router = express.Router()
const multer = require('multer');
const path = require('path')

const { displaybio, displaycreatePost } = require('../controller/imageController');
const db = require('../connection');
const { error } = require('console');


// BIO 
router.route('/bio').get(displaybio)
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'UserImage/ProfileImage')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})
const uploadimg = multer({ storage })
router.route('/bio').post(uploadimg.fields([{ name: 'profilepic'}, { name: 'coverPic'}]), (req, res) => {
    const items = { user_id: req.session.user, bio: req.body.bio, occuption: req.body.occuption, address: req.body.address, profileImage: req.files.profilepic[0].filename, coverImage: req.files.coverPic[0].filename }

    const insert = `INSERT INTO user_detail SET ?`
    db.query(insert,items,(error,result)=>{
        if(!error){
            res.redirect('/chatbox/profile')
        }else{
          console.log(error);
        }
    })  
})



module.exports = router