'use strict';

exports = module.exports = {};

module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.initConfig({
    jshint: {
      dev: {
        src: ['Gruntfile.js', 'index.js', 'lib/**/*.js', 'test/**/*.js']
      },

      options: {
        shintrc: '.jshintrc'
      }
    }
  });
  grunt.registerTask('test', ['jshint:dev']);
  grunt.registerTask('default', ['test']);
};
