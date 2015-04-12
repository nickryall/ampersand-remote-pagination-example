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
    return this;
  },

  toggleBackButtonClass: function() {
    if(this.model.page > 1) {
      dom.removeClass(this.backListItem, 'disabled');
    } else {
      dom.addClass(this.backListItem, 'disabled');
    }
  },

  moveBack: function() {
    if(this.model.page > 1) {
      --this.model.page;
    }
  },

  toggleForwardButtonClass: function() {
    if(this.model.page < this.model.totalPages) {
      dom.removeClass(this.forwardListItem, 'disabled');
    } else {
      dom.addClass(this.forwardListItem, 'disabled');
    }
  },

  moveForward: function() {
    if(this.model.page < this.model.totalPages) {
      ++this.model.page;
    }
  }
});