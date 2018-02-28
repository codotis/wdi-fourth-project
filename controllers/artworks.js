const Artwork = require('../models/artwork');

function artworksIndex(req, res, next) {
  Artwork
    .find()
    .exec()
    .then(artworks => res.json(artworks))
    .catch(next);
}

function artworksCreate(req, res, next) {
  Artwork
    .create(req.body)
    .then(artwork => res.status(201).json(artwork))
    .catch(next);
}

function artworksShow(req, res, next) {
  Artwork
    .findById(req.params.id)
    .exec()
    .then((artwork) => {
      if(!artwork) return res.notFound();
      res.json(artwork);
    })
    .catch(next);
}

function artworksUpdate(req, res, next) {
  Artwork
    .findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(artwork => res.status(200).json(artwork))
    .catch(next);
}

function artworksDelete(req, res, next) {
  Artwork
    .findByIdAndRemove(req.params.id)
    .then(() => res.status(204).end())
    .catch(next);
}

module.exports = {
  index: artworksIndex,
  create: artworksCreate,
  show: artworksShow,
  update: artworksUpdate,
  delete: artworksDelete
};
