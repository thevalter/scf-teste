const data = require("../database/fakeData");
const generateToken = require('../config/jwt');

const userLogin = (req, res) => {

    try {
        const { name } = req.body;
        const user = data.find(item => item.name == name);

        if (!user) {
            return res.status(401).json({ error: 'Esse usuario não existe no nosso sistema' });
        }

        return res.status(200).json({
            name: name,
            token: generateToken(user.id.toString())
        });
    } catch (error) {
        return res.status(500).json({ error: error });
    }
}

module.exports = userLogin;