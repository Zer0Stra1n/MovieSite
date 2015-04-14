define([
  'backbone',
  'handlebars',
  'views/comments_view',
  'collections/comments_collection',
  'text!templates/modal_template.html'
], function(Backbone, Handlebars, CommentsView, CommentList, template){
  return Backbone.View.extend({
    template: Handlebars.compile(template),
    tagName: 'article',

    initialize: function(){
      this.comments = new CommentList();
      this.comments.fetch();
      this.listenTo(this.comments,"sync", this.renderSubView);
      this.render();
    },

    events:{
      'click .js-close' : 'removeModal',
      'click #submitComment' : 'saveComment'
    },

    removeModal: function(e){
        this.subView.close();
        this.remove();
    },

    renderSubView: function(){
       this.subView = new CommentsView({collection: this.comments ,el: '#commentContainer'});
    },

    saveComment: function(e){
      var $input = $('#commentBox'),
          value = $input.val().toString();

      this.comments.saveModel(value);
      $input.val('');
    },

    render: function(){
      this.$el.html(this.template(this.model.toJSON()));
      $('body').append(this.$el);
    }
  });
});
