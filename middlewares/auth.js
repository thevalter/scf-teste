const data = require("../database/fakeData");
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {

    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ error: 'Nenhum token fornecido. Essa função é permitida apenas para administradores.' })
    }

    try {

        const replace = token.replace("Bearer ", "");
        const { id } = jwt.verify(replace, 'sfc123');
        const user = data.find(item => item.id == id);

        if (!user) {
            return res.status(401).json("Token invalido");
        }

        if (user.role != 'adm') {
            return res.status(401).json("Essa função é permitida apenas para administradores.");
        }

        next();

    } catch (error) {
        return res.status(500).json({ error: error });
    }
}

module.exports = authMiddleware;