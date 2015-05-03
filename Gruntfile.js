'use strict';

exports = module.exports = {};

module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks("grunt-simple-mocha");

  // initialize grunt
  grunt.initConfig({
    // create jshint task
    jshint: {
      dev: {
        src: ['Gruntfile.js', 'index.js', 'lib/**/*.js', 'test/**/*.js']
      },
      // bring in options from .jshintrc
      options: {
        shintrc: '.jshintrc'
      }
    }
  });
  grunt.registerTask('test', ['jshint:dev']);
  grunt.registerTask('default', ['test']);
};
