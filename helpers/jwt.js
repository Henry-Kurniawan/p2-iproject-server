const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.SECRETKEY

function signToken(data) {
    let token = jwt.sign(data, JWT_SECRET)
    return token
}

function verifyToken(token) {
    let result = jwt.verify(token, JWT_SECRET)
    return result
}

module.exports = {
    signToken,
    verifyToken
}