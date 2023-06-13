const data = require("../database/fakeData");

const createUser = (req, res) => {
    try {
        const {name, job} = req.body;

        if(!name || !job) {
            return res.status(401).send('é necessario informar todos os campos para efetuar o cadastro');
        }

        const user = data.find((user) => user.name === name);

        if(user){
            return res.status(401).send('Este usuario já está cadastrado no sistema');
        }

        const index = data.length - 1;
        const newUser = {
            id: data[index].id + 1,
            name: name,
            job: job,
            read: 0
        };

        data.push(newUser);

        return res.status(201).json(newUser);
    } catch (error) {
        return res.status(500).json({error: error});
    }
};
module.exports = createUser;