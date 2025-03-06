import "dotenv/config.js"
import "../../config/database.js"
import Book from '../Book.js'

const books = [
    { title: "El Misterio del Bosque", author: "Ana Rodríguez", publicationYear: 2001 },
    { title: "Sombras en la Ciudad", author: "Carlos Martínez", publicationYear: 2005 },
    { title: "Caminos del Destino", author: "Laura Gómez", publicationYear: 2010 },
    { title: "La Voz del Silencio", author: "Miguel Herrera", publicationYear: 1998 },
    { title: "Entre Dos Mundos", author: "Sofía Pérez", publicationYear: 2015 },
    { title: "El Eco de los Sueños", author: "Juan Torres", publicationYear: 2020 },
    { title: "Laberintos del Alma", author: "Mariana López", publicationYear: 2008 },
    { title: "Susurros del Pasado", author: "Roberto Sánchez", publicationYear: 1995 },
    { title: "Reflejos de la Vida", author: "Elena Ramírez", publicationYear: 2018 },
    { title: "Vientos de Cambio", author: "Andrés Fuentes", publicationYear: 2003 },
    { title: "La Llama Eterna", author: "Isabel Domínguez", publicationYear: 1999 },
    { title: "Ríos de Tinta", author: "Jorge Romero", publicationYear: 2006 },
    { title: "Cielos Abiertos", author: "Patricia Morales", publicationYear: 2012 },
    { title: "La Sombra del Olvido", author: "Fernando Castillo", publicationYear: 2000 },
    { title: "Ecos del Futuro", author: "Gabriela Vega", publicationYear: 2021 }
  ];

  Book.insertMany(books)
  .then((docs) => {
    console.log(`${docs.length} books inserted successfully.`);
    process.exit();
  })
  .catch((err) => {
    console.error("Error inserting books:", err);
    process.exit(1);
  });