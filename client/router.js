/*global router */
var ArticleListModel = require('./models/article-list');
var ArticleListView = require('./views/article-list');
var Router = require('ampersand-router');

module.exports = Router.extend({
  routes: {
    '': 'articles',
    'page': 'redirectToHome', // No page number given - redirect to homepage.
    'page/:page' : 'articles'
  },

  articles: function(page) {
    page = parseInt(page, 10) || 1;

    var model = new ArticleListModel({
      page: parseInt(page, 10) || 1,
    });

    // Basic URL for page 1.
    if(page === 1) {
      this.navigate('/', {
        trigger: false
      });
    }

    model.fetch({
      data: {
        page: model.page,
        pageSize: model.pageSize
      },
      success: function(model, response) {
        // init our main view
        new ArticleListView({
          model: model,
          collection: model.data,
          el: document.getElementById('container')
        }).render();
      }.bind(this),
      error: function() {
        // Redirect to home if API returns 404.
        this.redirectToHome();
      }.bind(this)
    });
  },

  redirect: function() {
    this.redirectToHome('/');
  }
});

