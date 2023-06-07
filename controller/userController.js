const db = require("../connection")

// PROFILE
const profile = (req, res) => {
    if (req.session.user != undefined) {
        const id = req.session.user
        let select = `SELECT * FROM user_detail AS ud JOIN users AS u ON (u.user_id = "${id}") AND (ud.user_id = "${id}")`;
        db.query(select, (error, result) => {
            if (!error) {
                res.render('profile.ejs', {
                    result: result
                })
            } else {
                console.log('CAN NOT SELECT USER DETAILS');
            }
        })

    } else {
        res.redirect('/chatbox/login')
    }
}



// DELETE USER ACCOUNT
const deleteUser = (req, res) => {
    console.log(req.session);
    let sql = `DELETE FROM users WHERE user_id="${req.session.user}"`;

    db.query(sql, (error, result) => {
        if (!error) {
            req.session.user = undefined;
            res.redirect('/chatbox/login')
        } else {
            console.log(error);
        }
    })
}

// HOME
const home = (req, res) => {
    if (req.session.user != undefined) {
        const id = req.session.user 
        let getUserDetail = `SELECT  ud.profileImage , u.username  FROM users AS u JOIN user_detail AS ud ON (u.user_id = ?) AND (ud.user_id = ?) `;

        db.query(getUserDetail,[id,id],(UserDetailError,userDetail)=>{
            if (!UserDetailError){
                let select = `SELECT p.*,u.username,ud.profileImage FROM post AS p LEFT JOIN users AS u ON p.user_id = u.user_id LEFT JOIN user_detail AS ud ON (ud.user_id = u.user_id) LEFT JOI relationship AS r ON (p.user_id = r.FollowedUser) 
                `
                //  LEFT JOIN relationship AS r ON r.folloer
                db.query(select,[id],(error, data) => {
                    if (!error) {
                        console.log(data);
                        res.render('user/homepage', {
                            data: data,
                            user: userDetail
                        })
                    } else {
                        console.log(error);
                    }
                })
            }else{
                console.log(UserDetailError);
            }
        })
    } else {
        res.redirect('/chatbox/login')
    }
}



// DISPLAY CREATE POST PAGE
const displaycreatePost = (req, res) => {
    if (req.session.user != undefined) {
        const id = req.session.user
        res.render('form/createPost.ejs')

    } else {
        res.redirect('/chatbox/login')
    }
}


const addUser = (req,res)=>{
    if (req.session.user != undefined) {
        const id = req.session.user
        res.render('user/addUser.ejs')

    } else {
        res.redirect('/chatbox/login')
    }
}


module.exports = {
    home,
    profile,
    deleteUser,
    displaycreatePost,
    addUser
}