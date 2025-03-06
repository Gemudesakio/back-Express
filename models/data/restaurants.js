import 'dotenv/config.js'
import '../../config/database.js'
import Restaurant from '../Restaurant.js'

const restaurants = [
    { name: "La Casa del Sabor", location: "Ciudad de México", cuisine: "Mexicana", rating: 4.5, priceRange: "$$", schedule: "12:00-23:00" },
    { name: "El Rincón Italiano", location: "Roma", cuisine: "Italiana", rating: 4.7, priceRange: "$$$", schedule: "11:00-22:00" },
    { name: "Sushi Master", location: "Tokio", cuisine: "Japonesa", rating: 4.9, priceRange: "$$$", schedule: "12:00-23:00" },
    { name: "Bistró Parisino", location: "París", cuisine: "Francesa", rating: 4.6, priceRange: "$$$", schedule: "12:00-23:30" },
    { name: "El Asador Argentino", location: "Buenos Aires", cuisine: "Argentina", rating: 4.3, priceRange: "$$", schedule: "13:00-00:00" },
    { name: "Curry House", location: "Nueva Delhi", cuisine: "India", rating: 4.4, priceRange: "$$", schedule: "12:00-22:00" },
    { name: "The Burger Joint", location: "Nueva York", cuisine: "Americana", rating: 4.2, priceRange: "$", schedule: "10:00-22:00" },
    { name: "Tapas y Vinos", location: "Madrid", cuisine: "Española", rating: 4.5, priceRange: "$$$", schedule: "13:00-00:00" },
    { name: "Dragon's Wok", location: "Beijing", cuisine: "China", rating: 4.0, priceRange: "$$", schedule: "11:00-22:00" },
    { name: "Grill & Smoke", location: "Austin", cuisine: "Barbacoa", rating: 4.8, priceRange: "$$$", schedule: "11:00-23:00" },
    { name: "Veggie Delight", location: "San Francisco", cuisine: "Vegetariana", rating: 4.6, priceRange: "$$", schedule: "11:00-21:00" },
    { name: "Seafood Paradise", location: "Sydney", cuisine: "Mariscos", rating: 4.7, priceRange: "$$$", schedule: "12:00-23:00" },
    { name: "El Fogón Mexicano", location: "Guadalajara", cuisine: "Mexicana", rating: 4.4, priceRange: "$$", schedule: "12:00-22:30" },
    { name: "Modern Bistro", location: "Londres", cuisine: "Internacional", rating: 4.5, priceRange: "$$$", schedule: "12:00-23:00" },
    { name: "La Terraza", location: "Barcelona", cuisine: "Mediterránea", rating: 4.3, priceRange: "$$", schedule: "13:00-23:00" }
  ];

  Restaurant.insertMany(restaurants)
  .then((docs) => {
    console.log(`${docs.length} restaurants inserted successfully.`);
    process.exit();
  })
  .catch((err) => {
    console.error("Error inserting restaurants:", err);
    process.exit(1);
  });