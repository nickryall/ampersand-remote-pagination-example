var AmpModel = require('ampersand-model');
var ArticlesCollection = require('./articles');

module.exports = AmpModel.extend({
  urlRoot: '/api/',

  props: {
    totalRecords: ['number']
  },
  
  session: {
    page: ['number', false, 1 ],
    pageSize: ['number', false, 5 ],
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