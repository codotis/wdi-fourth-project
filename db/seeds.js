const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');
const { db, env } = require('../config/environment');

const User    = require('../models/user');
const Artwork = require('../models/artwork');

mongoose.connect(db[env]);

Artwork.collection.drop();
User.collection.drop();

User
  .create([
    {
      username: 'Otis',
      email: 'otis@otis.com',
      password: 'password',
      passwordConfirmation: 'password'
    },
    {
      username: 'Rane',
      email: 'rane@rane.com',
      password: 'password',
      passwordConfirmation: 'password'
    },
    {
      username: 'Bob',
      email: 'bob@bob.com',
      password: 'password',
      passwordConfirmation: 'password'
    }
  ])
  .then(users => {
    console.log(`${users.length} users have been added to the db.`);

    return Artwork.create([
      {
        title: 'Arrange',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71in1KteGML.jpg',
        price: '15.00',
        description: 'An oil painting of my favourite cartoon creature - Totoro!',
        createdBy: users[0]._id
      }, {
        title: 'Melody 5',
        image: 'http://www.idolmag.co.uk/wp-content/uploads/2015/11/grimes2.jpg',
        price: '20.00',
        description: 'A digital drawing of a creature from the depths of my imagination',
        createdBy: users[1]._id
      }, {
        title: 'Superfloat',
        image: 'http://78.media.tumblr.com/d2fd3bc99a83e27f724a14aed515930e/tumblr_ou55g0ZAEC1s24xrxo1_500.jpg',
        price: '20.00',
        description: 'Digital artwork of a groovy spaceship taking off',
        createdBy: users[1]._id
      }, {
        title: 'Fledging',
        image: 'https://www.chesterartsfair.co.uk/wp-content/uploads/2017/06/Chester-Arts-Fair-Artwork-by-James-Buffifant-Heart.jpg',
        price: '10.00',
        description: 'Two sombre looking penguins',
        createdBy: users[0]._id
      }, {
        title: 'Portrait 1',
        image: 'https://i.pinimg.com/736x/fd/60/b3/fd60b329d470ee6a3e5dd6ceeeddca51--african-women-african-art.jpg',
        price: '35.00',
        description: 'A colourful portrait of love',
        createdBy: users[2]._id
      }, {
        title: 'Untitled',
        image: 'https://static1.squarespace.com/static/538d1920e4b0369e0b93e74b/t/53ce0509e4b0e7d8eb426872/1406010634248/nanobit-zelda-link-majoras-mask',
        price: '18.00',
        description: 'Link wearing majoras mask',
        createdBy: users[2]._id
      }]);
  })
  .then(artworks => {
    console.log(`${artworks.length} artworks have been added to the db.`);
  })
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
