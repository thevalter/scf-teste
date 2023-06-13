const data = require("../database/fakeData");

const updateUser = (req, res, next) => {
    const { id } = req.query;
    let user = data.find(item => item.id == id);

    if (!user) {
        return res.status(404).send('Usuário não encontrado.')
    }

    const { name, job } = req.body;

    user.name = name;
    user.job = job;

    return res.status(200).json({status: 'Usuário atualizado com sucesso.', user});
};


module.exports = updateUser;