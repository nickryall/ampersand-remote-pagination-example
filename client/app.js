/*global app $*/
var domReady = require('domready');
var Router = require('./router');

module.exports = {
  // this is the the whole app initter
  blastoff: function () {
    var self = window.app = this;

    this.router = new Router();

    domReady(function () {
      self.router.history.start({pushState: true, root: ''});
    });
  }
};

// run it
module.exports.blastoff();
