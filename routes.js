const {Router} = require('express');
const {getUser, getAllUsers} = require('./controllers/teste1');

const routes = Router();

routes.get('/', function(req, res){
    res.send(`get user/ </br>
    get users/ </br>
    post users/ </br>
    delete users/ </br>
    put users/ </br>
    `);
  });
  
  routes.get("/user", getUser);
  routes.get("/users", getAllUsers);
//   routes.post("/users", teste2)
//   routes.delete("/users", teste3)
//   routes.put("/users", teste4)
//   routes.get("/users/access", teste5);
  
 module.exports = routes