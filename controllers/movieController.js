const db = require('../database/models'); //Requerimos la conexión a la base de datos y todos los modelos.
const op = db.Sequelize.Op

const movieController = {
    show: function(req, res){
       // Debera mostrar el detalle de una pelicula
        
    } ,
    new: function(req, res){
        //últimas 5 películas ordenadas según su fecha de estreno. Cada título de película deberá ser un hipervínculo para ver el detalle de la misma.
      
    },
    recomended: function(req, res){
        // Deberá mostrar las películas cuyo rating sea mayor o igual a 8. Cada título de película deberá ser un hipervínculo para ver el detalle de la misma.
        
    },
    search: function(req, res){
       // buscador funcionando con querystrings
    },
    create: function(req, res){
        //Mostrar formulario de carga de películas
       
    },
    store: function(req, res){
        // Debera guardar una pelicula en la db        
    },
    destroy: function(req, res){
        // Debera destruir una pelicula segun su id.       
    }
}

module.exports = movieController