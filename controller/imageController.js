const db = require("../connection")




// DISPLAY BIO

const displaybio = (req, res) => {
    if (req.session.user != undefined) {
        const id = req.session.user
        console.log(req.session.user);
        let sql = `SELECT * FROM user_detail WHERE user_id="${id}"`;
        db.query(sql, (error, result) => {
            if (!error) {
                if (result.length > 0) {
                    res.redirect('/chatbox/profile')
                } else {
                    res.render('form/bio.ejs')
                }
            } else {
                console.log("ERROR " + error);
            }
        })
    } else {
        res.redirect('/chatbox/login')
    }
}









module.exports  = {
    displaybio,  
}