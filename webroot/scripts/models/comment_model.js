define([
  'backbone'
], function(Backbone){
  return Backbone.Model.extend({
    defaults: {
      'author':'Test'
    },

    parse: function(data){
      var newData = {};

      newData.author = data.author;
      newData.text = _.unescape(data.text);

      return newData;
    }
  });
});
