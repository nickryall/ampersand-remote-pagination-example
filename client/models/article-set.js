var AmpModel = require('ampersand-model');
var Articles = require('./articles');

module.exports = AmpModel.extend({
  urlRoot: '/api/',

  props: {
    totalRecords: ['number']
  },
  
  session: {
    page: ['number', false, 1 ],
    pageSize: ['number', false, 5 ],
    fetching: ['boolean', false, false ]
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
    data: Articles
  },

  reset: function() {
    this.set({
      page: 1
    });
  },

  checkSessionDefaults: function(attributes) {
    if(attributes.page === 1) {
      return true;
    } else {
      return false;
    }
  },

  // Fetch remote results.
  fetchRemote: function() {
    var self = this;

    this.fetching = true;

    this.fetch({
      data: {
        page: this.page,
        pageSize: this.pageSize
      },
      success: function() {
        self.fetching = false;

      },
      error: function() {
        self.fetching = false;

        // Trigger Alert
        console.log('handle error');
      }
    });
  }
});