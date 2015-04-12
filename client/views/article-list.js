var View = require('ampersand-view');
var ArticleListItemView = require('../views/article-list-item');
var PaginationView = require('../views/pagination');

module.exports = View.extend({
  template: '<div><ul data-hook="article-list"></ul><div data-hook="article-list-pagination"></div></div>',

  initialize: function(options) {
    // Listen to change of 'page' on the article-list model and fetch 
    // the new page from the API. Also update the history.
    this.listenTo(this.model, 'change:page', function() {
      this.model.fetchRemote();
      this.updateHistory();
    });
  },

  render: function (spec) {
    this.renderWithTemplate(this);
    this.renderCollection(this.collection, ArticleListItemView, this.queryByHook('article-list'));
    this.renderPagination();

    return this;
  },

  renderPagination: function() {
    this.renderSubview(new PaginationView({
      model: this.model,
      collection: this.collection
    }), '[data-hook~=article-list-pagination]');
  },

  updateHistory: function() {
    app.router.navigate('/page/' + this.model.page, {
      trigger: false
    });
  }
});