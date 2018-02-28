const router = require('express').Router();
// const secureRoute = require('../lib/secureRoute');

const artworks  = require('../controllers/artworks');
// const auth  = require('../controllers/auth');

router.route('/artworks')
  .get(artworks.index)
  .post(artworks.create);

router.route('/artworks/:id')
  .get(artworks.show)
  .put(artworks.update)
  .delete(artworks.delete);

// router.route('/register')
//   .post(register);
//
// router.route('/login')
//   .post(login);

// routes go here

router.all('/*', (req, res) => res.notFound());

module.exports = router;
