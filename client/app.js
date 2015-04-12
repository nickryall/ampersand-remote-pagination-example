/*global app $*/
var domReady = require('domready');
var Router = require('./router');

module.exports = {
  // this is the the whole app initter
  blastoff: function () {
    var self = window.app = this;

    // init our URL handlers and the history tracker
    this.router = new Router();

    // wait for document ready to render our main view
    // this ensures the document has a body, etc.
    domReady(function () {
      // we have what we need, we can now start our router and show the appropriate page
      self.router.history.start({pushState: true, root: ''});
    });
  }
};

// run it
module.exports.blastoff();
