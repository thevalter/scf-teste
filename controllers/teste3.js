var data =  require("../database/fakeData");

module.exports = function(req, res) {
  
    var name =  req.query.name;

    for(let i = 0; i < data.length;  i++) {
        if(i.name == name) {
            data[i] = null;
        }
    }

    res.send("success");

};