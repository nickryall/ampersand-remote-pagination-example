// Topic Model - topic.js
var AmpModel = require('ampersand-model');


module.exports = AmpModel.extend({
  idAttribute: 'slug',

  props: {
    id: ['string'],
    title: ['string'],
    slug: ['string'],
    body: ['string']
  },

  derived: {
    viewUrl: {
      deps: ['slug'],
      fn: function () {
        return '/articles/' + this.slug;
      }
    }
  }
});