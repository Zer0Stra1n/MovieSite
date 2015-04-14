define([
  'marionette',
  '../collections/movie_collection',
  'views/movie_view'
], function(Marionette, collection, child) {
  return Backbone.Marionette.CollectionView.extend({
    collection: new collection(),
    childView: child,

    initialize: function(){
      this.listenTo(this.collection,'sync', this.render);

      this.collection.fetch();
    }
  });
});
