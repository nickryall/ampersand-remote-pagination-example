// Topic Collection - topic-collection.js
var AmpCollection = require('ampersand-collection');
var ArticleModel = require('./article');

module.exports = AmpCollection.extend({
  model: ArticleModel
});