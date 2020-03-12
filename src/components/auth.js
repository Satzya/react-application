import Cookies from 'universal-cookie';
let jwt = require('jsonwebtoken')
export default class Authorization {
    getValue = () => {
        const cookie = new Cookies()
        let recievedToken = cookie.get("Token");
        try {
            return jwt.verify(recievedToken, 'Tokenset')
        } catch (err) {
            return false
        }
    }
}
