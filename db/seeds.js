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
      username: 'Hubert',
      email: 'hubert@ga.com',
      password: 'password',
      passwordConfirmation: 'password'
    },
    {
      username: 'Enrique',
      email: 'enrique@ga.com',
      password: 'password',
      passwordConfirmation: 'password'
    },
    {
      username: 'Kai',
      email: 'kai@ga.com',
      password: 'password',
      passwordConfirmation: 'password'
    },
    {
      username: 'Anwar',
      email: 'anwar@ga.com',
      password: 'password',
      passwordConfirmation: 'password'
    },
    {
      username: 'Rizwan',
      email: 'rizwan@ga.com',
      password: 'password',
      passwordConfirmation: 'password'
    },
    {
      username: 'Pluto',
      email: 'pluto@ga.com',
      password: 'password',
      passwordConfirmation: 'password'
    },
    {
      username: 'Lisa',
      email: 'lisa@ga.com',
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
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu.',
        createdBy: users[6]._id
      }, {
        title: 'Melody 5',
        image: 'http://www.idolmag.co.uk/wp-content/uploads/2015/11/grimes2.jpg',
        price: '20.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu.',
        createdBy: users[5]._id
      }, {
        title: 'Superfloat',
        image: 'http://78.media.tumblr.com/d2fd3bc99a83e27f724a14aed515930e/tumblr_ou55g0ZAEC1s24xrxo1_500.jpg',
        price: '20.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu.',
        createdBy: users[3]._id
      }, {
        title: 'Fledging',
        image: 'https://www.chesterartsfair.co.uk/wp-content/uploads/2017/06/Chester-Arts-Fair-Artwork-by-James-Buffifant-Heart.jpg',
        price: '10.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu.',
        createdBy: users[1]._id
      }, {
        title: 'Portrait 1',
        image: 'https://i.pinimg.com/736x/fd/60/b3/fd60b329d470ee6a3e5dd6ceeeddca51--african-women-african-art.jpg',
        price: '35.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu.',
        createdBy: users[0]._id
      }, {
        title: 'Untitled',
        image: 'https://static1.squarespace.com/static/538d1920e4b0369e0b93e74b/t/53ce0509e4b0e7d8eb426872/1406010634248/nanobit-zelda-link-majoras-mask',
        price: '18.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu.',
        createdBy: users[2]._id
      }, {
        title: 'Arrange',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71in1KteGML.jpg',
        price: '15.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu.',
        createdBy: users[4]._id
      }, {
        title: 'Bowie',
        image: 'http://www.schwabach.de/images/referate/referat_2/Kommunale_Jugendarbeit/Aki/fasching2.jpg',
        price: '15.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu.',
        createdBy: users[6]._id
      }, {
        title: 'Colourscape',
        image: 'http://www.sheilagill.co.uk/media/catalog/product/cache/1/image/500x500/9df78eab33525d08d6e5fb8d27136e95/m/a/magical-mistical.jpg',
        price: '15.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu.',
        createdBy: users[7]._id
      }, {
        title: 'Forest',
        image: 'https://img1.wsimg.com/isteam/ip/555da8f8-cc54-46c1-85b7-c37c05f2cdef/194fd69e-3aac-482c-adc5-aefd14daee92.jpg/:/cr=t:0%25,l:30.16%25,w:69.84%25,h:100%25/rs=w:400,h:500,cg:true,m/cr=w:800,h:500,a:cc',
        price: '15.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu.',
        createdBy: users[5]._id
      }, {
        title: 'Smile',
        image: 'http://www.blackcattips.com/images/son%20of%20man-%20BlackCatTips%20500.jpg',
        price: '15.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu.',
        createdBy: users[3]._id
      }, {
        title: 'Moonlit Edge',
        image: 'http://www.tagfinearts.com/media/catalog/category/Donwood_-_Poor_End_-_courtesy_of_TAG_Fine_Arts.jpg',
        price: '15.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu.',
        createdBy: users[1]._id
      }, {
        title: 'Helping Hand',
        image: 'https://i.pinimg.com/736x/0b/92/35/0b92351c9f2fd4854776efcafef73ea2--hand-prints-thumb-prints.jpg',
        price: '15.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu.',
        createdBy: users[0]._id
      }, {
        title: 'Guess Who',
        image: 'http://www.tagfinearts.com/media/catalog/category/Goldstar_-_MA08_Mao_-_courtesy_of_TAG_Fine_Arts_1.jpg',
        price: '15.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu.',
        createdBy: users[2]._id
      }, {
        title: 'Climb To',
        image: 'https://cdn.shopify.com/s/files/1/1897/8801/products/Climbing_Men_Trio_-_Silver_Colour_Wall_Art_1.jpg?v=1504784033',
        price: '15.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu.',
        createdBy: users[4]._id
      }, {
        title: 'Pasty',
        image: 'https://static1.squarespace.com/static/5551d68be4b0ff48240b2ab9/564d9107e4b0a93a30eb8cbf/572f98392fe131e2fe8ab6fb/1480005355174/IMG_1196.JPG?format=500w',
        price: '15.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu.',
        createdBy: users[6]._id
      }, {
        title: 'Eloquence',
        image: 'https://img.posterlounge.co.uk/images/wbig/poster-unterredung-am-abend-950499.jpg',
        price: '15.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu.',
        createdBy: users[7]._id
      }, {
        title: 'Dread',
        image: 'https://i.pinimg.com/736x/5d/bd/d1/5dbdd1816e8185f8260d8750410d69ea--contemporary-art-amber.jpg',
        price: '15.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu.',
        createdBy: users[5]._id
      }, {
        title: 'Basquiat',
        image: 'http://www.galleriesnow.net/wp-content/uploads/2017/10/Sothebys-New-York-Basquiat.jpg',
        price: '15.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu.',
        createdBy: users[3]._id
      }, {
        title: 'Food',
        image: 'http://www.surreyartists.co.uk/surbiton/stained-glass-artist/dinner-party.jpg',
        price: '15.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu.',
        createdBy: users[1]._id
      }, {
        title: 'DARTHEA Cross',
        image: 'https://static1.squarespace.com/static/59c0457303596e04bbd27bf8/t/5a10ed9f71c10ba5531a83f7/1511058923422/Barba+Contemporary+Art%2C+Darthea+Cross%2C+Hidden+Passage%2C+30x30%2C+acrylic+on+panel%2C+%2427500.jpg?format=500w',
        price: '15.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu.',
        createdBy: users[0]._id
      }, {
        title: 'Sundead',
        image: 'http://static1.squarespace.com/static/5577a12ae4b053a499f459d5/5579046ce4b032e60999672d/55790581e4b032e609998057/1433994625249/collage-art-15.jpg?format=original',
        price: '15.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu.',
        createdBy: users[2]._id
      }, {
        title: 'Essence Coe',
        image: 'https://78.media.tumblr.com/c805747599ec267157bd05be176bc6c8/tumblr_p2emgjH0g71vesf5to1_500.jpg',
        price: '15.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu.',
        createdBy: users[2]._id
      }, {
        title: 'Eloquence',
        image: 'https://img.posterlounge.co.uk/images/wbig/poster-unterredung-am-abend-950499.jpg',
        price: '15.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu.',
        createdBy: users[4]._id
      }, {
        title: 'Tethered 200',
        image: 'http://superselected.com/wp-content/uploads/2014/04/Massogona-Sylla-Art-Collage-open.jpg',
        price: '15.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu.',
        createdBy: users[4]._id
      }, {
        title: 'Mirror Effigy',
        image: 'https://img.posterlounge.co.uk/images/wbig/poster-retro-pastell-abstract-art-39083.jpg',
        price: '15.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu.',
        createdBy: users[6]._id
      }, {
        title: 'Heart As A Home',
        image: 'http://www.jablonskimarketing.com/wp-content/uploads/2016/02/Jablonski-Marketing-Inspiration-Digital-Art-9-108.jpg',
        price: '15.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu.',
        createdBy: users[6]._id
      }, {
        title: 'Split Man',
        image: 'https://static1.squarespace.com/static/534546cde4b088718e30d3b4/t/58e9452c8419c2d99389f285/1491682622792/DigitalArt_JadePurpleBrown?format=500w',
        price: '15.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu.',
        createdBy: users[7]._id
      }, {
        title: 'Shades Of Purple',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtVDvDkJN9r4f1nNkztcdAMHtqqobnwhBqIdiJVX70WHKP_l_dWw',
        price: '15.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu.',
        createdBy: users[7]._id
      }, {
        title: 'Root Life',
        image: 'https://s-media-cache-ak0.pinimg.com/originals/aa/0e/6c/aa0e6cc0cc417340bab7007142885459.jpg',
        price: '15.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu.',
        createdBy: users[7]._id
      }, {
        title: 'Painted BLK',
        image: 'https://streetart.photo/photos/square/11/c8/11c84a6f-7ea9-4026-bd7b-d6f391d96c97.jpg',
        price: '15.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu.',
        createdBy: users[5]._id
      }, {
        title: 'Bro Ken',
        image: 'http://78.media.tumblr.com/c9e18c7757767011b22272e1345763bb/tumblr_p1c5i5qQFc1t1xu4uo1_500.jpg',
        price: '15.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu.',
        createdBy: users[5]._id
      }, {
        title: 'You Joking?',
        image: 'https://78.media.tumblr.com/84db84a0ba63b77be10d60812c377834/tumblr_olol70kssd1tzo1n6o1_500.jpg',
        price: '15.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu.',
        createdBy: users[5]._id
      }, {
        title: 'BTTF100',
        image: 'https://img.posterlounge.co.uk/images/wbig/poster-unterredung-am-abend-950499.jpg',
        price: '15.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu.',
        createdBy: users[3]._id
      }, {
        title: 'Cube',
        image: 'https://s-media-cache-ak0.pinimg.com/originals/be/8c/fb/be8cfb7e15f96134e8cebc1c288ec35e.jpg',
        price: '15.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu.',
        createdBy: users[3]._id
      }, {
        title: 'CyberSPACE',
        image: 'https://s-media-cache-ak0.pinimg.com/originals/48/28/13/48281339d7b7217e52db0c3805aea762.jpg',
        price: '15.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu.',
        createdBy: users[3]._id
      }, {
        title: 'Spilt',
        image: 'https://fresheasel.com/wp-content/uploads/2016/04/Exploflora-hero.jpg',
        price: '15.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu.',
        createdBy: users[1]._id
      }, {
        title: 'Hoover',
        image: 'https://static.wixstatic.com/media/15df69_b2f3b7fd6fa548058614f6f45de5f7f1~mv2_d_3024_4032_s_4_2.jpg/v1/fill/w_500,h_500,al_c,q_90/file.jpg',
        price: '15.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu.',
        createdBy: users[1]._id
      }, {
        title: 'Roar',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7sq_Qxkon08NlHoU6njdVGc3ERfj7CpmwoFPT8aYJ7eRLjzH17g',
        price: '15.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu.',
        createdBy: users[1]._id
      }, {
        title: 'Rising Sun',
        image: 'https://i.pinimg.com/736x/6f/57/b8/6f57b82929c2c28802d49dc9e7e9a2e4--wood-oil-oil-pastels.jpg',
        price: '15.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu.',
        createdBy: users[0]._id
      }, {
        title: 'Fine Line',
        image: 'http://moziru.com/images/drawn-forest-line-drawing-15.jpg',
        price: '15.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu.',
        createdBy: users[0]._id
      }, {
        title: 'Flying',
        image: 'https://i.pinimg.com/736x/98/62/8d/98628d25d4fd061c59737a6641005e17--metropolitan-museum-museum-of-art.jpg',
        price: '15.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu.',
        createdBy: users[0]._id
      }, {
        title: 'How It Feels',
        image: 'https://d3l2rivt3pqnj2.cloudfront.net/i/prints/lg/4/3/433925.jpg',
        price: '15.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu.',
        createdBy: users[2]._id
      }, {
        title: 'F1',
        image: 'https://static1.squarespace.com/static/547fdb41e4b0d2f5ad35c90e/t/5812ae5f2994cac660606bfb/1477619297547/Squarespace_Thumbnails.jpg?format=original',
        price: '15.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu.',
        createdBy: users[2]._id
      }, {
        title: 'Crystal Eyesed',
        image: 'https://i.pinimg.com/564x/5c/f0/09/5cf009b603ba687b3f85669e14f8b488--futurism-art-retro-futurism.jpg',
        price: '15.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu.',
        createdBy: users[4]._id
      }, {
        title: 'Null',
        image: 'http://moziru.com/images/drawn-see-line-drawing-13.jpg',
        price: '15.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu.',
        createdBy: users[4]._id
      }, {
        title: 'Eclipse Of Present',
        image: 'http://40.media.tumblr.com/9837c6457a4856a2d1b4dc908355cc7f/tumblr_nlmjip00kK1u16n75o1_500.jpg',
        price: '15.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu.',
        createdBy: users[6]._id
      }, {
        title: 'Collage 4',
        image: 'https://cdn.shopify.com/s/files/1/2714/5634/products/9781905792528-panter-art-cover-recto-web_250x250@2x.jpg?v=1516264326',
        price: '15.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla elit, vehicula sed faucibus eu, laoreet eu nulla. Quisque venenatis aliquam sem, non auctor turpis luctus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras congue purus et nibh ultricies sollicitudin. Quisque ante ipsum, volutpat non dignissim aliquet, dapibus eu neque. Vivamus vitae lobortis est, a mollis nulla. Pellentesque at bibendum arcu.',
        createdBy: users[6]._id
      }]);
  })
  .then(artworks => {
    console.log(`${artworks.length} artworks have been added to the db.`);
  })
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
