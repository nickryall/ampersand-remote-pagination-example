// Article List Model - article-list.js
var AmpModel = require('ampersand-model');
var ArticlesCollection = require('./articles');

module.exports = AmpModel.extend({
  urlRoot: '/api/',

  props: {
    totalRecords: ['number']
  },
  
  session: {
    page: ['number', false, 1 ], // The current page. 
    pageSize: ['number', false, 5 ],  // Often an API will let you specify number of items per page. Note: The mock API for this demo will always return 5 items.
    fetching: ['boolean', false, false ] // Can be used to control display of list view. e.g. Listen to change on this prop and show/hide a spinner
  },

  derived: {
    totalPages: {
      deps: ['totalRecords', 'pageSize'],
      fn: function () {
        return Math.ceil(this.totalRecords / this.pageSize);
      }
    },
    isEmpty: {
      deps: ['totalRecords'],
      fn: function () {
        return !this.totalRecords;
      }
    }
  },

  collections: {
    data: ArticlesCollection
  },

  // Fetch remote results.
  fetchRemote: function() {
    this.fetching = true;

    this.fetch({
      data: {
        page: this.page,
        pageSize: this.pageSize
      },
      success: function() {
        self.fetching = false;
      }.bind(this),
      error: function() {
        self.fetching = false;
        console.log('handle error');
      }.bind(this)
    });
  }
});