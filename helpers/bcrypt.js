const bcrypt = require('bcrypt');
const saltRounds = 10;

function hashPassword(normalPassword) {
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(normalPassword, salt);
    return hash
}

function comparePassword(normalPassword, hashedPassword) {
    return bcrypt.compareSync(normalPassword, hashedPassword);
}

module.exports = {
    hashPassword,
    comparePassword
}