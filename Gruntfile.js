/*jslint node: true */
'use strict';

//Using exclusion patterns slows down Grunt significantly
//instead of creating a set of patterns like '**/*.js' and '!**/node_modules/**'
//this method is used to create a set of inclusive patterns for all subdirectories
//skipping node_modules, bower_components, dist, and any .dirs
//This enables users to create any directory structure they desire.
var createFolderGlobs = function(fileTypePatterns) {
  fileTypePatterns = Array.isArray(fileTypePatterns) ? fileTypePatterns : [fileTypePatterns];
  var ignore = ['node_modules','bower_components','<%= config.dist %>','<%= config.temp %>'];
  var fs = require('fs');
  return fs.readdirSync(process.cwd()).map(function(file){
    if (ignore.indexOf(file) !== -1 ||
        file.indexOf('.') === 0 ||
        !fs.lstatSync(file).isDirectory()) {
      return null;
    } else {
      return fileTypePatterns.map(function(pattern) {
        return file + '/**/' + pattern;
      });
    }
  }).filter(function(patterns){
    return patterns;
  }).concat(fileTypePatterns);
};

module.exports = function(grunt) {

  // Load all NPM tasks
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    config: {
      temp: '.tmp',
      src: 'src',
      dist: 'dist',
      compiledjs: 'compiled.js',
      compiledcss: 'compiled.css'
    },
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
        src: ['<%= config.temp %>/bodey_baker-cv.html']
      }
    },
    jshint: {
      main: {
        options: {
            jshintrc: '.jshintrc'
        },
        src: createFolderGlobs(['Gruntfile.js', 'src/*.js'])
      }
    },
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      strict: {
        src: ['<%= config.src %>/**/*.css']
      }
    },
    lesslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      src: ['<%= config.src %>/**/*.less']
    },
    clean: {
      before:{
        src:['<%= config.dist %>','<%= config.temp %>']
      },
      after: {
        src:['<%= config.temp %>']
      }
    },
    less: {
      production: {
        options: {
        },
        files: {
          '<%= config.temp %>/bootstrap-overrides.css': '<%= config.src %>/styles/bootstrap-overrides.less'
        }
      }
    },
    assemble: {
      pages: {
        options: {
          flatten: true,
          assets: '<%= config.dist %>/assets',
          layout: '<%= config.src %>/templates/layouts/default.hbs',
          data: '<%= config.src %>/data/*.{json,yml}',
          partials: '<%= config.src %>/templates/partials/*.hbs'
        },
        files: {
          '<%= config.temp %>/': ['<%= config.src %>/templates/pages/*.hbs']
        }
      }
    },
    dom_munger:{
      read: {
        options: {
          read:[
            {selector:'script[data-concat!="false"]',attribute:'src',writeto:'inputjs'},
          ]
        },
        src: '<%= config.temp %>/bodey_baker-cv.html'
      }
    },
    imageEmbed: {
      dist: {
        src: [ "<%= config.src %>/styles/images.css", "<%= config.src %>/styles/fonts.css" ],
        dest: "<%= config.temp %>/images-fonts-embedded.css"
      }
    },
    cssmin: {
      main: {
        src:['<%= config.temp %>/images-fonts-embedded.css', '<%= config.temp %>/bootstrap-overrides.css'],
        dest:'<%= config.temp %>/<%= config.compiledcss %>'
      }
    },
    processhtml: {
      dist: {
        files: {
          '<%= config.dist %>/bodey_baker-cv.html': ['<%= config.temp %>/bodey_baker-cv.html']
        }
      }
    },
    uglify: {
      dist: {
        files: {
          '<%= config.temp %>/<%= config.compiledjs %>': [
            '<%= dom_munger.data.inputjs %>'
          ]
        }
      }
    },

    watch: {
      html: {
        files: ['src/**/*'],
        tasks: ['lint', 'build:preview']
      }
    },
    browserSync: {
      options: {
        notify: false,
        background: true
      },
      livereload: {
        options: {
          files: [
            '<%= config.temp %>/{,*/}*.html',
            '<%= config.temp %>/{,*/}*.css',
            '<%= config.temp %>/{,*/}*.js'
          ],
          port: 9000,
          server: {
            baseDir: '<%= config.temp %>',
            index: 'bodey_baker-cv.html',
            routes: {
              '/bower_components': './bower_components',
              '/styles': './src/styles',
              '/images': './src/images',
              '/scripts': './src/scripts',
              '/src': './src'
            }
          }
        }
      },
      dist: {
        options: {
          background: false,
          server: '<%= config.dist %>'
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-install-dependencies');
  grunt.registerTask('lint' , ['jshint', 'csslint', 'lesslint', 'htmlhint']);
  grunt.registerTask('build:preview' , ['assemble']);
  grunt.registerTask('build:dist' , [
    'less',
    'dom_munger',
    'imageEmbed',
    'cssmin',
    'uglify',
    'processhtml']);
  grunt.registerTask('serve', ['browserSync:livereload', 'watch']);
  grunt.registerTask('test',[]);

  grunt.registerTask('default', [
    'clean:before',
    'install-dependencies',
    'build:preview',
    'lint',
    'test',
    'build:dist',
    'serve',
    'clean:after'
  ]);

};
