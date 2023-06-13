const {Router} = require('express');
const {getUser, getAllUsers} = require('./controllers/teste1');
const createUser = require('./controllers/teste2');
const deleteUser = require('./controllers/teste3');
const updateUser = require('./controllers/teste4');
const readingCount = require('./controllers/teste5');

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
  routes.post("/users", createUser);
  routes.delete("/users", deleteUser);
  routes.put("/users", updateUser)
  routes.get("/users/access", readingCount);
  
 module.exports = routes