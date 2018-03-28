'use strict';

module.exports = function (grunt) {

    grunt.initConfig({
        uglify: {
            dist: {
                options: {
                    mangle: true,
                    report: 'gzip'
                },
                files: {
                    'dist/javascripts/script.min.js': 'assets/javascripts/script.js'
                }
            }
        },
        less: {
            dist: {
                options: {
                    compress: true,
                    sourceMap: true
                },
                src: 'assets/less/styles.less',
                dest: 'dist/css/styles.min.css'
            }
        },
        watch: {
            styles: {
                files: ['assets/less/*.less'],
                tasks: ['less'],
                options: {
                    spawn: false
                }
            },
            scripts: {
                files: 'assets/javascripts/script.js',
                tasks: ['uglify'],
                options: {
                    spawn: false
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ['> 1%', 'ie > 8']
            },
            "dist/css/styles.min.css": "dist/css/styles.min.css"
        },
        copy: {
            docs: {
                expand: true,
                cwd: 'assets/images/',
                src: [
                    'ODS_logo_header.svg',
                    'ODS_picto_platform.svg',
                    'ODS_picto_discovery.svg',
                    'ODS_picto_faq.svg',
                    'ODS_picto_widget.svg',
                    'ODS_picto_tuto.svg',
                    'ODS_picto_api.svg',
                    'ODS_favicon.ico',
                    'ODS_logo_footer.svg'
                ],
                dest: 'dist/images/'
            }
        },
        connect: {
            options: {
                port: 9001
            },
            server: {
                options: {
                    keepalive: false,
                    middleware: function (connect, options, middlewares) {
                        middlewares.unshift(function (req, res, next) {
                            res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
                            res.setHeader('Access-Control-Allow-Methods', 'GET');
                            res.setHeader('Access-Control-Allow-Origin', '*');
                            next();
                        });

                        return middlewares;
                    }
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-autoprefixer');

    // Default task(s).
    grunt.registerTask('default', ['dist']);
    grunt.registerTask('dist', ['uglify', 'less', 'autoprefixer', 'copy']);
    grunt.registerTask('server', ['default', 'connect', 'watch']);
};
