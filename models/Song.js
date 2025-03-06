import { Schema, model } from 'mongoose';

const collection = 'song';

const songSchema = new Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  album: { type: String, required: true },
  year: { type: Number, required: true },
  genre: { type: String, required: true },
  duration: { type: String, required: true },
  language: { type: String, required: true }
}, {
  timestamps: true
});

const Song = model(collection, songSchema);
export default Song;
