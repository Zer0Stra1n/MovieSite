define([
  'backbone',
  'models/comment_model'
  ],
  function(Backbone, comment) {
    return Backbone.Collection.extend({
      url: 'static-data/Comments_fake.json',
      model: comment,

      initialize: function(){

      },

      parse: function(data) {
        var comments = data.comments;

        return comments;
      },

      saveModel: function(text){
        var input = text,
            encoded = _.escape(input),
            tempModel = new comment({'text': encoded});

        this.add(tempModel);
      }
    });
  });
