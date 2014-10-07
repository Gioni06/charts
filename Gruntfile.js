// Generated on 2014-09-24 using generator-angular 0.9.8
'use strict';

module.exports = function (grunt) {

  // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      less: {
        development: {
          options: {
            paths: ["output/css"]
          },
          files: {
            "output/main.css": "styles/main.less"
          }
        },
        production: {
          options: {
            paths: ["output/css"],
            cleancss: false
          },
          files: {
            "output/main.css": "styles/main.less"
          }
        }
      },

      watch : {
          less: {
            files: 'styles/**/*.less',
            tasks: ['less']
          }
      }


    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.event.on('watch', function(action, filepath, target) {
      grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
    });

    grunt.registerTask('default', [
        'less:production'
      ]);



};
