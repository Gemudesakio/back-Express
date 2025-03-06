import { Schema, model } from 'mongoose';

const collection = 'restaurant';

const restaurantSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  cuisine: { type: String, required: true },
  rating: { type: Number, required: true },
  priceRange: { type: String, required: true },
  schedule: { type: String, required: true }
}, {
  timestamps: true
});

const Restaurant = model(collection, restaurantSchema);
export default Restaurant;
