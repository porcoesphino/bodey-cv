/*jslint node: true */
'use strict';

//Using exclusion patterns slows down Grunt significantly
//instead of creating a set of patterns like '**/*.js' and '!**/node_modules/**'
//this method is used to create a set of inclusive patterns for all subdirectories
//skipping node_modules, bower_components, dist, and any .dirs
//This enables users to create any directory structure they desire.
var createFolderGlobs = function(fileTypePatterns) {
  fileTypePatterns = Array.isArray(fileTypePatterns) ? fileTypePatterns : [fileTypePatterns];
  var ignore = ['node_modules','bower_components','dist','.tmp'];
  var fs = require('fs');
  return fs.readdirSync(process.cwd())
          .map(function(file){
            if (ignore.indexOf(file) !== -1 ||
                file.indexOf('.') === 0 ||
                !fs.lstatSync(file).isDirectory()) {
              return null;
            } else {
              return fileTypePatterns.map(function(pattern) {
                return file + '/**/' + pattern;
              });
            }
          })
          .filter(function(patterns){
            return patterns;
          })
          .concat(fileTypePatterns);
};

module.exports = function(grunt) {

  // Load all NPM tasks
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    htmlhint: {
      build: {
        options: {
          'tag-pair': true,
          'tagname-lowercase': true,
          'attr-lowercase': true,
          'attr-value-double-quotes': true,
          'doctype-first': true,
          'spec-char-escape': true,
          'id-unique': true,
          'head-script-disabled': true,
          'style-disabled': true
        },
        src: ['index.html']
      }
    },
    jshint: {
      main: {
        options: {
            jshintrc: '.jshintrc'
        },
        src: createFolderGlobs('*.js')
      }
    },
    clean: {
      before:{
        src:['dist','.tmp']
      },
      after: {
        src:['.tmp']
      }
    },
    less: {
      production: {
        options: {
        },
        files: {
          '.tmp/bootstrap-overrides.css': 'src/styles/bootstrap-overrides.less'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-install-dependencies');
  grunt.registerTask('lint' , ['htmlhint']);
  grunt.registerTask('build',[
    'jshint',
    'clean:before',
    'less',
  ]);
  grunt.registerTask('serve', []);
  grunt.registerTask('test',[]);

  grunt.registerTask('default', [
    'install-dependencies',
    'lint',
    'test',
    'build',
    'serve'
  ]);

};
