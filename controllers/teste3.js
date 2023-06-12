const data = require("../database/fakeData");

const deleteUser = (req, res) => {
    try {
        const {name} = req.query;
        const user = data.find(item => item.name === name);

        if(!user){
            return res.status(404).send('Usuário não encontrado');
        }
        
        data.splice(data.indexOf(user), 1);
        return res.send("Usuário deletado com sucesso.");
    
    } catch (error) {
        return res.status(500).json({error: error});
    }
};

module.exports = deleteUser;