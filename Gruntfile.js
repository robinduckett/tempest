module.exports = function(grunt) {
    grunt.config.init({
        nodewebkit: {
            options: {
                platforms: ['osx'],
                buildDir: 'build',
                macCredits: 'src/credits.html',
                credits: 'src/credits.html',
                macIcns: 'assets/tempest.icns'
            },
            src: ['src/**/*']
        },

        watch: {
            webkit: {
                files: 'src/**/*.*',
                tasks: ['nodewebkit'],
                options: {
                    livereload: true
                }
            }
        }
    });

    var what = function() {

    }

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.loadNpmTasks('grunt-node-webkit-builder');

    grunt.registerTask('default', ['nodewebkit']);
};