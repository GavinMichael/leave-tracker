const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');
const { ensureAuthorized } = require('../config/auth');

// Manage
router.get('/leaves', function (req, res) {
  // Database Query

  const MongoClient = require('mongodb').MongoClient;
  const assert = require('assert');

  // Connection URL
  const url = require('../config/keys').mongoURI;

  // Database Name
  const dbName = 'test';

  const client = new MongoClient(url);
  // Use connect method to connect to the server
  client.connect(function (err) {
    assert.equal(null, err);
    console.log("Connected correctly to server");

    const db = client.db(dbName);
    const findDocuments = function (db, callback) {
      // Get the documents collection
      const collection = db.collection('leaves');
      // Find some documents
      collection.find({}).toArray(function (err, docs) {
        assert.equal(err, null);
        res.json(docs);
        callback(docs);
      });
    }
    findDocuments(db, function () {
      client.close();
    });
  });
});

module.exports = router;




