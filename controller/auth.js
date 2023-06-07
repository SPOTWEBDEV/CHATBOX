const db = require('../connection.js')
const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const displayLoginPage = (req,res)=>{
    res.render('form/login.ejs')
}
const login = (req, res) => {
    // req.session.user = null
    const email = req.body.email
    const password =  req.body.password
    let sql = `SELECT *  FROM users WHERE email = "${email}"`;
    db.query(sql,(error,result)=>{
        if(!error){
            if(result.length == 0){
               return res.status(404).json('USER NOT FOUND')
            }else{
                const hash = bcrypt.compareSync(password, result[0].password)
                if(hash){
                    req.session.user = result[0].user_id
                    res.redirect('/chatbox/bio')
                }else{
                    return res.status(404).json('WRONG DETAIL');
                }
            }
        }else{
            console.log(error);
        }
    })
    
}
const displayRegisterPage = (req, res) => {
    res.render('form/reg.ejs')

}
const register = (req, res) => {
    const email = req.body.email;
    let sql = `SELECT *  FROM users WHERE email ="${email}"`;
    db.query(sql, (error, result) => {
        if (error) console.log(error);

        if (result.length){
            console.log(result)
        }else{
            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(req.body.password, salt)

            const user_detail = { first_name: req.body.first, last_name: req.body.last, username: req.body.username, email: req.body.email, gender: req.body.gender, password: hash}
            const insert = `INSERT INTO users SET ?`
            db.query(insert, user_detail, (error, result) => {
                if (!error) {
                    res.redirect('/chatbox/login')
                } else {
                   console.log(error);
                }
            })
            
        }
    })
}
const logout = (req, res) => {
    console.log('logout');
    // res.clearCookie("accessToken",{
    //     secure:true,
    //     sameSite:"none"
    // // }).status(200).json('LOGOUT')
    // console.log('yes yea');

    // const token = req.cookies.accessToken
    // jwt.verify(token,"secretkey",(err,userInfo)=>{
    //     if(err){
    //         console.log(err);
    //     }else{
    //         console.log(userInfo);
    //     }
    // })
    

    
}


module.exports = {
    displayLoginPage,
    login,
    displayRegisterPage,
    register,
    logout
}