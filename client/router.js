/*global router */
var ArticleListModel = require('./models/article-list');
var ArticleListView = require('./views/article-list');
var Router = require('ampersand-router');

module.exports = Router.extend({
  routes: {
    '': 'articles',
    'page/:page' : 'articles',
    '(*path)': 'redirectToHome', // Catch all. Note: Could redirect to 404 page here
  },

  articles: function(page) {
    page = parseInt(page, 10) || 1;

    var model = new ArticleListModel({
      page: page
    });

    // Fetch
    model.fetch({
      data: {
        page: model.page,
        pageSize: model.pageSize
      },
      success: function(model, response) {
        // Render the article list view
        new ArticleListView({
          model: model,
          collection: model.data,
          el: document.getElementById('container')
        }).render();
      }.bind(this),
      error: function() {
        // Redirect to home if API returns 404.
        // Note: You could redirect to a 404 page here also. 
        this.redirectToHome();
      }.bind(this)
    });
  },

  redirectToHome: function() {
    this.redirectTo('/');
  }
});

