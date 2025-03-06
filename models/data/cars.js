import "dotenv/config.js"
import "../../config/database.js"
import Car from "../Car.js"

let cars = [
    { name: "Toyota Corolla", color: "Rojo", model: 2022 },
    { name: "Honda Civic", color: "Azul", model: 2021 },
    { name: "Ford Mustang", color: "Negro", model: 2023 },
    { name: "Chevrolet Camaro", color: "Blanco", model: 2020 },
    { name: "BMW M3", color: "Gris", model: 2024 },
    { name: "Mercedes-Benz C-Class", color: "Plata", model: 2019 },
    { name: "Audi A4", color: "Verde", model: 2022 },
    { name: "Nissan Altima", color: "Amarillo", model: 2021 },
    { name: "Volkswagen Jetta", color: "Azul Marino", model: 2023 },
    { name: "Hyundai Elantra", color: "Naranja", model: 2020 }
  ];

  Car.insertMany(cars)
  .then((docs) => {
    console.log(`${docs.length} cars inserted successfully.`);
    process.exit();
  })
  .catch((err) => {
    console.error("Error inserting cars:", err);
    process.exit(1);
  });