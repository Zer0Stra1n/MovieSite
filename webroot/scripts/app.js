/**
 * This file is the top-level configuration and insertion point for require.js.
 * Please see the [RequireJS documentation page](http://requirejs.org/docs/api.html#config) for more details
 *
 */

require.config({
  baseUrl: './scripts',

  paths: {

    //Shortcuts
    'templates': '../templates',

    //Require text plug-in
    'text': './libs/requirejs-text/text',

    //Core libraries
    'backbone': './libs/backbone/backbone',
    'jquery': './libs/jquery/dist/jquery',
    'underscore': './libs/underscore/underscore',
    'marionette': './libs/marionette/lib/core/backbone.marionette',
    'backbone.wreqr': './libs/backbone.wreqr/lib/backbone.wreqr',
    'backbone.babysitter': './libs/backbone.babysitter/lib/backbone.babysitter',
    'handlebars': './libs/handlebars/handlebars'
  },

  shim: {

    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    }
  }
});

/* Bootstrapping the application and starting the router */
define([
  'marionette_setup',
], function(App) {

  app = new App();

  app.start();
});
