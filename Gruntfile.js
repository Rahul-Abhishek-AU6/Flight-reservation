/**
*	Build config for BookFlight
*
*	@author Rahul Abhishek	
*/

module.exports = function( grunt ){
	grunt.initConfig({
		copy: {
			dist: {
				expand: true,
				cwd: 'app',
				src: '**',
				dest: 'public'			
			}		
		},

		requirejs: {
			compile: {
				options: {
					dir: 'public/modules',
					optimize: 'none',
					removeCombined: true,
					mainConfigFile: 'app/modules/main.js'				
				}
			}
		},

		esteWatch: {
			options: {
				dirs: ['app/**']
			},

			js: function(){
				return ['default'];
			},

			html: function(){
				return ['default'];
			},

			css: function(){
				return ['default'];
			}
		}
	});

	// Register default task
	grunt.registerTask('default', ['copy:dist', 'requirejs']);
	
	grunt.registerTask('watch', ['esteWatch']);

	// Load Task
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-este-watch');
}