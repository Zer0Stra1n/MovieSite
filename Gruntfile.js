module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    express: {
      development :{
        options: {
          port: 9000,
          bases: 'webroot'
        }
      }
    },

    watch:{}
  });

  require('matchdep').filterDev(['grunt-*', '!grunt-cli']).forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', ['express:development','watch']);
};
