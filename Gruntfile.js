module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'comverse/<%= pkg.name %>.js',
        dest: 'comverse/<%= pkg.name %>.min.js'
      }
    },

    md2html: {
      one_file: {
        options: {},
        files: [{
          src: ['index1.md'],
          dest: 'outline1.html'
        }]
      }
    },
    
    watch: {
      options:{livereload:true},
      files: ['*.js','*.html','*.css'],
      tasks: ['uglify']
    },

    express: {
      all:{
        options: {
          port:9000,
          hostname:'localhost',
          bases:['.'],
          livereload:true
        }
      }
    }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-md2html');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);
  grunt.registerTask('server', ['express' ,'watch']);

};