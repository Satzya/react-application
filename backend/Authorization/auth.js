
const User = require('../models/user')
const jwt = require('jsonwebtoken')

let auth = async (req, res, next) => {
    let recievedToken = req.cookies.Token;
    try {
        let userData = jwt.verify(recievedToken, 'Tokenset')
        let userDetails = {
            userName: userData.split('&&')[0],
            password: userData.split('&&')[1],
        }
        const user = await User.findOne({ userName: userDetails.userName, password: userDetails.password })
        if (!user) res.status(400).send("Unauthorized");
        next()
    } catch (err) {
        res.status(401).send(err)
    }
}

module.exports = auth;
