const data = require("../database/fakeData");

const readingCount = (req, res) => {
    const {id} = req.query;
    let user = data.find(item => item.id == id);

    if (!user) {
        return res.status(404).send('Usuário não encontrado.')
    }

    return res.status(200).send(`Usuário ${user.name} foi lido ${user.read} vezes.`)
};

module.exports = readingCount;