define([
    'marionette',
    'router'
  ],
  function(Marionette, Router) {
    return Marionette.Application.extend({
      initialize: function(options){

        this.on('start', function(options){
          var router = new Router();
            Backbone.history.start();
        });
      }
    });
  });
