// Pagination View - pagination.js
var dom = require('ampersand-dom');
var View = require('ampersand-view');

module.exports = View.extend({
  template: '<div><ul class="pagination"><li data-hook="back-list-item"><a data-hook="back-button">&laquo; Previous Page</a></li><li data-hook="forward-list-item"><a data-hook="forward-button">Next Page &raquo;</a></li></ul></div>',

  events: {
    'click [data-hook~=back-button]' : 'moveBack',
    'click [data-hook~=forward-button]' : 'moveForward'
  },

  render: function() {
    this.renderWithTemplate();

    // Cache forward and back buttons
    this.cacheElements({
      backListItem: '[data-hook=back-list-item]',
      forwardListItem: '[data-hook=forward-list-item]'
    });

    this.listenToAndRun(this.model, 'change:page', this.toggleBackButtonClass);
    this.listenToAndRun(this.model, 'change:page', this.toggleForwardButtonClass);

    // NOTE: You could easily render a button for each page number here. 
    // for( i=0; i<this.model.totalPages; i++ ) {
          // Render button here
    // }

    return this;
  },

  // Disable the back button if on page 1
  toggleBackButtonClass: function() {
    if(this.model.page > 1) {
      dom.removeClass(this.backListItem, 'disabled');
    } else {
      dom.addClass(this.backListItem, 'disabled');
    }
  },

  // Move back a page
  moveBack: function() {
    if(this.model.page > 1) {
      --this.model.page;
    }
  },

  // Disable the forward button if on the last page
  toggleForwardButtonClass: function() {
    if(this.model.page < this.model.totalPages) {
      dom.removeClass(this.forwardListItem, 'disabled');
    } else {
      dom.addClass(this.forwardListItem, 'disabled');
    }
  },

  // Move forward a page
  moveForward: function() {
    if(this.model.page < this.model.totalPages) {
      ++this.model.page;
    }
  }
});