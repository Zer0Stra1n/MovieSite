define(['backbone',],
  function(Backbone) {
    return Backbone.Collection.extend({
      url: 'static-data/Movie_fake.json',

      parse: function(data){
        return data.movies;
      }
    });
  });
