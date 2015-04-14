define([
  'text!templates/movie_template.html',
  'views/modal_view',
  'marionette',
  'handlebars'
], function(template, ModalView, Marionette, Handlebars){
  return Backbone.Marionette.ItemView.extend({
    tagName: 'li',
    className:'movieInfo',
    template: Handlebars.compile(template),

    initialize: function(){

    },

    ui: {
      cover: '#poster'
    },

    events: {
      'click @ui.cover': 'showModal',
      'click .overlay' : 'removeModal'
    },

    showModal: function(e){
      this.modal = new ModalView({model: this.model});
    },

    removeModal: function(e){
      this.modal.removeModal();
    }

  });
});
