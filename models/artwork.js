const mongoose = require('mongoose');

const artworkSchema = mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: String, required: true },
  description: { type: String, required: true }
});

artworkSchema.set('toJSON', {
  getters: true,
  virtuals: true,
  transform(obj, json) {
    delete json._id;
    delete json.__v;
  }
});

module.exports = mongoose.model('artwork', artworkSchema);
