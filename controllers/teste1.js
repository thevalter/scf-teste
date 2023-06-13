const data = require("../database/fakeData");

const getUser = (req, res) => {
    try {
        const { name } = req.query;
        const user = data.find((user) => user.name === name);

        if (!user) {
            return res.status(404).send('Usuário não encontrado');
        }
        user.read++;

        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({error: error});
    }
};

const getAllUsers = (req, res) => {
    try {
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({error: error});
    }
};

module.exports = {
    getUser,
    getAllUsers
}