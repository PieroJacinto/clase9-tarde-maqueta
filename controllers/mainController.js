const db = require('../database/models'); //Requerimos la conexión a la base de datos y todos los modelos.
const movies = db.Movie

const mainController = {
    index: function(req, res){        
        //Nuestro código.
        movies.findAll()
        .then( function ( data ){
            res.render("index", { movies: data })
        })
        .catch( function (err){
            console.log(err)
        })
        
    }   
}

module.exports = mainController