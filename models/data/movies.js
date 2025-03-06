import 'dotenv/config.js'
import '../../config/database.js'
import Movie from '../Movie.js'

const movies = [
    { title: "La Última Oportunidad", director: "Ricardo Gómez", year: 2010, genre: "Drama" },
    { title: "Cazadores de Sombras", director: "María González", year: 2012, genre: "Acción" },
    { title: "Entre Estrellas", director: "Alejandro Morales", year: 2015, genre: "Ciencia Ficción" },
    { title: "El Silencio del Tiempo", director: "Cecilia Ramírez", year: 2008, genre: "Misterio" },
    { title: "Sueños Rotos", director: "Javier López", year: 2003, genre: "Drama" },
    { title: "La Ciudad Perdida", director: "Isabel Herrera", year: 2007, genre: "Aventura" },
    { title: "Furia en la Noche", director: "Diego Sánchez", year: 2018, genre: "Acción" },
    { title: "El Eco de la Soledad", director: "Lucía Díaz", year: 2011, genre: "Romance" },
    { title: "Horizontes Lejanos", director: "Carlos Pérez", year: 2013, genre: "Drama" },
    { title: "Rumbo al Amanecer", director: "Ana Martínez", year: 2006, genre: "Comedia" },
    { title: "Sombras del Pasado", director: "Pedro Ruiz", year: 2009, genre: "Suspense" },
    { title: "Entre Dos Mundos", director: "Verónica Castro", year: 2016, genre: "Fantasía" },
    { title: "La Llama Interior", director: "Oscar Romero", year: 2004, genre: "Inspiracional" },
    { title: "Voces del Silencio", director: "Daniela Vega", year: 2014, genre: "Misterio" },
    { title: "El Último Suspiro", director: "Miguel Álvarez", year: 2019, genre: "Terror" }
  ];

  Movie.insertMany(movies)
  .then((docs) => {
    console.log(`${docs.length} movies inserted successfully.`);
    process.exit();
  })
  .catch((err) => {
    console.error("Error inserting movie:", err);
    process.exit(1);
  });