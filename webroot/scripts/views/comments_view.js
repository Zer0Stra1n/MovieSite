define([
  'backbone',
  'handlebars',
  'collections/comments_collection',
  'text!templates/comments_template.html'
], function(Backbone, Handlebars, collection, template){
  return Backbone.View.extend({
    template: Handlebars.compile(template),

    initialize: function(options){
      this.listenTo(this.collection,'add', this.render);
      this.listenTo(this.collection,'remove', this.render);
      this.render();
    },

    close: function(){
      this.remove();
    },

    render: function(){
      this.$el.html(this.template(this.collection.toJSON()));
    }
  });
});
