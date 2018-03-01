const router = require('express').Router();
const secureRoute = require('../lib/secureRoute');

const artworks  = require('../controllers/artworks');
const users  = require('../controllers/users');
const auth  = require('../controllers/auth');

router.route('/artworks')
  .get(artworks.index)
  .post(secureRoute, artworks.create);

router.route('/artworks/:id')
  .get(artworks.show)
  .put(artworks.update)
  .delete(artworks.delete);

router.route('/users/:id')
  .get(users.show);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

// routes go here

router.all('/*', (req, res) => res.notFound());

module.exports = router;
