// Article List View - article-list.js
var View = require('ampersand-view');
var ArticleListItemView = require('../views/article-list-item');
var PaginationView = require('../views/pagination');

module.exports = View.extend({
  template: '<div><ul data-hook="article-list"></ul><div data-hook="article-list-pagination"></div></div>',

  initialize: function(options) {
    // Listen to change of 'page' on the article-list model and fetch 
    // the new page from the API. Also update the history
    this.listenTo(this.model, 'change:page', function() {
      this.model.fetchRemote();
      this.updateHistory();
    }, this);
  },

  render: function (spec) {
    this.renderWithTemplate(this);
    // Render the collection of articles
    this.renderCollection(this.collection, ArticleListItemView, this.queryByHook('article-list'));
    // Render the pagination view
    this.renderPagination();

    return this;
  },

  renderPagination: function() {
    this.renderSubview(new PaginationView({
      model: this.model
    }), '[data-hook~=article-list-pagination]');
  },

  // Updates the browser history without triggering the route handler
  updateHistory: function() {
    app.router.navigate('/page/' + this.model.page, {
      trigger: false
    });
  }
});