const db = require('../database/models'); //Requerimos la conexión a la base de datos y todos los modelos.


const mainController = {
    index: function(req, res){        
        //Nuestro código.

        
        res.render("index")
    }   
}

module.exports = mainController