// Article List Item View - article-list-item.js
var View = require('ampersand-view');

module.exports = View.extend({
  template: '<div class="row"><div class=col-md-12"><h2><a data-hook="title"></a></h2><div data-hook="body></div></div></div>',

  bindings: {
    'model.viewUrl' : {
      type: 'attribute',
      hook: 'title',
      name: 'href'
    },
    'model.title': '[data-hook~=title]',
    'model.body' : {
      type: 'innerHTML',
      hook: 'body'
    }
  }
});