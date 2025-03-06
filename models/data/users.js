import "dotenv/config.js"
import "../../config/database.js" 
import User from "../User.js"

let users = [
    {
      name: "Juan Pérez",
      email: "juan.perez@example.com",
      password: "abc12345",
      photo: "https://randomuser.me/api/portraits/men/1.jpg",
      role: 1,
    },
    {
      name: "María Gómez",
      email: "maria.gomez@example.com",
      password: "xyz98765",
      photo: "https://randomuser.me/api/portraits/women/2.jpg",
      role: 2,
    },
    {
      name: "Carlos López",
      email: "carlos.lopez@example.com",
      password: "qwerty12",
      photo: "https://randomuser.me/api/portraits/men/3.jpg",
      role: 3,
    },
    {
      name: "Ana Torres",
      email: "ana.torres@example.com",
      password: "torres456",
      photo: "https://randomuser.me/api/portraits/women/4.jpg",
      role: 1,
    },
    {
      name: "Diego Ramírez",
      email: "diego.ramirez@example.com",
      password: "ramirez789",
      photo: "https://randomuser.me/api/portraits/men/5.jpg",
      role: 2,
    },
    {
      name: "Laura Fernández",
      email: "laura.fernandez@example.com",
      password: "laura159",
      photo: "https://randomuser.me/api/portraits/women/6.jpg",
      role: 3,
    },
    {
      name: "Pedro Sánchez",
      email: "pedro.sanchez@example.com",
      password: "sanchez852",
      photo: "https://randomuser.me/api/portraits/men/7.jpg",
      role: 1,
    },
    {
      name: "Lucía Herrera",
      email: "lucia.herrera@example.com",
      password: "herrera753",
      photo: "https://randomuser.me/api/portraits/women/8.jpg",
      role: 2,
    },
    {
      name: "Andrés Castro",
      email: "andres.castro@example.com",
      password: "castro963",
      photo: "https://randomuser.me/api/portraits/men/9.jpg",
      role: 3,
    },
    {
      name: "Elena Rojas",
      email: "elena.rojas@example.com",
      password: "rojas321",
      photo: "https://randomuser.me/api/portraits/women/10.jpg",
      role: 1,
    },
    {
      name: "Mateo Vargas",
      email: "mateo.vargas@example.com",
      password: "vargas654",
      photo: "https://randomuser.me/api/portraits/men/11.jpg",
      role: 2,
    },
    {
      name: "Camila Mendoza",
      email: "camila.mendoza@example.com",
      password: "mendoza852",
      photo: "https://randomuser.me/api/portraits/women/12.jpg",
      role: 3,
    },
    {
      name: "Felipe Ortega",
      email: "felipe.ortega@example.com",
      password: "ortega789",
      photo: "https://randomuser.me/api/portraits/men/13.jpg",
      role: 1,
    },
    {
      name: "Sofía Núñez",
      email: "sofia.nunez@example.com",
      password: "nunez951",
      photo: "https://randomuser.me/api/portraits/women/14.jpg",
      role: 2,
    },
    {
      name: "Gabriel Silva",
      email: "gabriel.silva@example.com",
      password: "silva357",
      photo: "https://randomuser.me/api/portraits/men/15.jpg",
      role: 3,
    },
    {
      name: "Isabella Fuentes",
      email: "isabella.fuentes@example.com",
      password: "fuentes456",
      photo: "https://randomuser.me/api/portraits/women/16.jpg",
      role: 1,
    },
    {
      name: "Hugo Díaz",
      email: "hugo.diaz@example.com",
      password: "diaz789",
      photo: "https://randomuser.me/api/portraits/men/17.jpg",
      role: 2,
    },
    {
      name: "Valentina Reyes",
      email: "valentina.reyes@example.com",
      password: "reyes123",
      photo: "https://randomuser.me/api/portraits/women/18.jpg",
      role: 3,
    },
    {
      name: "Fernando Morales",
      email: "fernando.morales@example.com",
      password: "morales852",
      photo: "https://randomuser.me/api/portraits/men/19.jpg",
      role: 1,
    },
    {
      name: "Daniela Paredes",
      email: "daniela.paredes@example.com",
      password: "paredes951",
      photo: "https://randomuser.me/api/portraits/women/20.jpg",
      role: 2,
    },
    {
      name: "José Estrada",
      email: "jose.estrada@example.com",
      password: "estrada753",
      photo: "https://randomuser.me/api/portraits/men/21.jpg",
      role: 3,
    },
    {
      name: "Martina Soto",
      email: "martina.soto@example.com",
      password: "soto159",
      photo: "https://randomuser.me/api/portraits/women/22.jpg",
      role: 1,
    },
    {
      name: "Rodrigo Guzmán",
      email: "rodrigo.guzman@example.com",
      password: "guzman456",
      photo: "https://randomuser.me/api/portraits/men/23.jpg",
      role: 2,
    },
    {
      name: "Renata Salazar",
      email: "renata.salazar@example.com",
      password: "salazar357",
      photo: "https://randomuser.me/api/portraits/women/24.jpg",
      role: 3,
    },
    {
      name: "Eduardo Peña",
      email: "eduardo.pena@example.com",
      password: "pena654",
      photo: "https://randomuser.me/api/portraits/men/25.jpg",
      role: 1,
    },
    {
      name: "Carolina Navarro",
      email: "carolina.navarro@example.com",
      password: "navarro852",
      photo: "https://randomuser.me/api/portraits/women/26.jpg",
      role: 2,
    },
    {
      name: "Alberto Ríos",
      email: "alberto.rios@example.com",
      password: "rios321",
      photo: "https://randomuser.me/api/portraits/men/27.jpg",
      role: 3,
    },
    {
      name: "Julieta León",
      email: "julieta.leon@example.com",
      password: "leon789",
      photo: "https://randomuser.me/api/portraits/women/28.jpg",
      role: 1,
    },
    {
      name: "Emiliano Figueroa",
      email: "emiliano.figueroa@example.com",
      password: "figueroa159",
      photo: "https://randomuser.me/api/portraits/men/29.jpg",
      role: 2,
    },
    {
      name: "Natalia Castaño",
      email: "natalia.castano@example.com",
      password: "castano753",
      photo: "https://randomuser.me/api/portraits/women/30.jpg",
      role: 3,
    },
  ];

  User.insertMany(users)
  .then((docs) => {
    console.log(`${docs.length} users inserted successfully.`);
    process.exit();
  })
  .catch((err) => {
    console.error("Error inserting users:", err);
    process.exit(1);
  });