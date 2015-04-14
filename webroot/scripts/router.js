define([
  'views/catalog_view',
  'backbone'
], function(CatalogView, Backbone) {
  return Backbone.Router.extend({

    routes: {
      '': 'home',
      'index.html': 'home'
    },

    home: function() {
      var homeView = new CatalogView({
        el: 'main ul'
      });
    }

  });
});
