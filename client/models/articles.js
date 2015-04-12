// Topic Collection - topic-collection.js
var AmpCollection = require('ampersand-collection');
var Article = require('./article');

module.exports = AmpCollection.extend({
  model: Article
});