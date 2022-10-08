console.log('This script populates some test users and products to the database.');

const async = require('async');
const Product = require('./models/Product');

// Get arguments passed on command line
const userArgs = process.argv.slice(2);
// TODO to use this userArgs to take user params
// to optionally empty collection before enter data
// add create and store random images.

const mongoose = require('mongoose');
const connectDb = require('./connectDB');

connectDb();

function createProduct(productObj, cb) {
  const product = new Product({
    title: productObj.title,
    description: productObj.description,
    breed: productObj.breed,
    price: productObj.price,
    imageUrl: productObj.imageUrl
  });

  product.save(function (err) {
    if (err) {
      cb(err, null);
      return;
    }
    console.log('New Product: ' + product);
    cb(null, product);
  });
}

function generateProducts(cb) {
  // First empty the collection.
  Product.deleteMany({}, () => {

    async.parallel([
      function (callback) {
        createProduct(
          {
            title: 'Abyssinian',
            description: 'The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.',
            breed: 'Abyssinian',
            price: 7,
            imageUrl: 'https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg'
          },
          callback
        );
      },
      function (callback) {
        createProduct(
          {
            title: 'Aegean',
            description: 'Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.',
            breed: 'Aegean Cat',
            price: 5,
            imageUrl: 'https://cdn2.thecatapi.com/images/ozEvzdVM-.jpg'
          },
          callback
        );
      }
    ],
    // optional callback
    cb);
  });
}

async.series(
  [
    generateProducts
  ],
  // Optional callback
  (err, results) => {
    if (err) {
      console.log('Data Creation Error: ' + err);
    }
    // All done, disconnect from database
    mongoose.connection.close();
  }
);
