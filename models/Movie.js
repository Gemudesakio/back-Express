import { Schema, model } from 'mongoose';

const collection = 'movie';

const movieSchema = new Schema({
  title: { type: String, required: true },
  director: { type: String, required: true },
  year: { type: Number, required: true },
  genre: { type: String, required: true }
}, {
  timestamps: true
});

const Movie = model(collection, movieSchema);
export default Movie;
