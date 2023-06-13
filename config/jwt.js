const jwt = require("jsonwebtoken");

const generateToken = (id) => {
    return jwt.sign({id}, 'sfc123', {expiresIn: '3d'});
}

module.exports = generateToken;