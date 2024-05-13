const db = require('../database/models'); //Requerimos la conexión a la base de datos y todos los modelos.
const movies = db.Movie;
const op = db.Sequelize.Op;

const movieController = {
    show: function(req, res){
       // Debera mostrar el detalle de una pelicula
       const id = req.params.id;
       movies.findByPk(id)
       .then( function (movie) {
        res.render("movie", { movie })
       })
       .catch( function (err){
            console.log(err)
       })
        
    } ,
    new: function(req, res){
        //últimas 5 películas ordenadas según su fecha de estreno. Cada título de película deberá ser un hipervínculo para ver el detalle de la misma.
        movies.findAll({
            order:[
                ["release_date", "DESC"]
            ],
            limit: 5,
            
        })
        .then( function (movies){
            return res.render("new", { movies })
        })
    },
    recomended: function(req, res){
        // Deberá mostrar las películas cuyo rating sea mayor o igual a 8. Cada título de película deberá ser un hipervínculo para ver el detalle de la misma.
        movies.findAll({
            where: [
                { rating: { [op.gte]: 8 }}
            ],
            order: [ 
                [ "rating", "DESC"]
            ]
        })
        .then( function (movies){
            return res.render("new", { movies })
        })
    },
    search: function(req, res){
       // buscador funcionando con querystrings
    },
    create: function(req, res){
        //Mostrar formulario de carga de películas
        db.Genre.findAll()
        .then( function (genres){
            return res.render("movieNew", { genres })
        })
        .catch( function (err){
            console.log(err)
        })
       
    },
    store: function(req, res){
        // Debera guardar una pelicula en la db 
        const data = req.body;
        
        const movie = {
            title: data.title,
            rating: data.rating,
            awards: data.awards,
            release_date: data.release_date,
            length: data.length,
            genre_id: data.genre_id
        }
        db.Movie.create(movie)
        .then( function (data){
            return res.redirect("/")
        })
        .catch( function( err ){
            console.log(err)
        })
        
    },
    destroy: function(req, res){
        // Debera destruir una pelicula segun su id.       
    }
}

module.exports = movieController