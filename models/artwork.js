const mongoose = require('mongoose');

const artworkSchema = mongoose.Schema({
  title: { type: String, required: 'Input the name of your artwork' },
  image: [{ type: String }],
  price: { type: String, required: 'Provide a selling price for your artwork' },
  description: { type: String, required: 'Provide a description for your artwork' },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User'}
});


artworkSchema.set('toJSON', {
  getters: true,
  virtuals: true,
  transform(obj, json) {
    delete json._id;
    delete json.__v;
  }
});

module.exports = mongoose.model('Artwork', artworkSchema);
