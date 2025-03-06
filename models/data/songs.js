import 'dotenv/config.js'
import '../../config/database.js'
import Song from '../Song.js'

const songs = [
    { title: "Luz en la Oscuridad", artist: "Sofía Luna", album: "Sombras del Alba", year: 2018, genre: "Pop", duration: "3:45", language: "Español" },
    { title: "Ritmo del Corazón", artist: "Carlos Viento", album: "Latidos", year: 2019, genre: "Rock", duration: "4:10", language: "Inglés" },
    { title: "Ecos del Pasado", artist: "Elena Sol", album: "Recuerdos", year: 2017, genre: "Balada", duration: "5:00", language: "Español" },
    { title: "Caminos Infinitos", artist: "Andrés Mar", album: "Horizontes", year: 2020, genre: "Indie", duration: "3:30", language: "Español" },
    { title: "Voces en el Viento", artist: "Lucía Aire", album: "Susurros", year: 2016, genre: "Electrónica", duration: "4:20", language: "Inglés" },
    { title: "Melodía de la Luna", artist: "Miguel Estrella", album: "Nocturno", year: 2015, genre: "Jazz", duration: "6:15", language: "Español" },
    { title: "Cielo Abierto", artist: "Valentina Mar", album: "Horizontes", year: 2021, genre: "Pop", duration: "3:55", language: "Inglés" },
    { title: "Ritmo de la Vida", artist: "Diego Sol", album: "Vibraciones", year: 2018, genre: "Reggae", duration: "4:05", language: "Español" },
    { title: "Sombras del Recuerdo", artist: "Isabel Brisa", album: "Memorias", year: 2019, genre: "Rock", duration: "4:30", language: "Inglés" },
    { title: "Energía Vital", artist: "Jorge Fuego", album: "Renacer", year: 2020, genre: "Hip-Hop", duration: "3:40", language: "Español" },
    { title: "Calle y Poesía", artist: "Martina Calle", album: "Versos Urbanos", year: 2017, genre: "Rap", duration: "3:25", language: "Español" },
    { title: "Entre Sombras", artist: "Pedro Noche", album: "Luz y Sombra", year: 2016, genre: "Blues", duration: "5:10", language: "Inglés" },
    { title: "Fuego Interior", artist: "Ana Llama", album: "Ardiente", year: 2021, genre: "Rock", duration: "4:00", language: "Español" },
    { title: "Ríos de Melodía", artist: "Felipe Roca", album: "Aguas Sonoras", year: 2018, genre: "Pop", duration: "3:35", language: "Inglés" },
    { title: "Vibraciones del Alma", artist: "Mariana Voz", album: "Sentimientos", year: 2019, genre: "Indie", duration: "4:15", language: "Español" }
  ];
  
  Song.insertMany(songs)
  .then((docs) => {
    console.log(`${docs.length} songs inserted successfully.`);
    process.exit();
  })
  .catch((err) => {
    console.error("Error inserting songs:", err);
    process.exit(1);
  });