const jwt = require('jsonwebtoken');
let generateToken = (userData) => {
    return jwt.sign(`${userData.userName}&&${userData.password}`, 'Tokenset')
}
module.exports = generateToken