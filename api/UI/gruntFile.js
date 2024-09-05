module.exports = function (grunt) {
    
    var _type = grunt.option('type');
    console.log(_type)
    var cacheBustConst = '-' + new Date().getTime();
    var jsFiles=[];
    var cssFiles=[];

    
    if(_type==='widgets'){
        //Below js and css set of files will be used to minify widgets only sdk 
        jsFiles=[
            'libs/kore-no-conflict-start.js',
            'libs/jquery.js',
            'libs/jquery.tmpl.min.js',
            'libs/Jquery-ui.min.js',
            '../libs/jstz.js',
            '../libs/Perfect-scrollbar.js',
            'Kore-widgets.js',
            'kore-widgets-config.js',
            'kore-widgets-main.js',
            '../libs/ie11CustomProperties.js',
            'libs/kore-no-conflict-end.js'
        ];
        cssFiles=[
            'libs/jquery-ui.min.css',
            '../libs/prefect-scrollbar.css',
            'kore-widgets.css'
        ]

    }else if(_type==='widgets_chat'){
         //Below js and css set of files will be used to minify Widgets with chat window sdk 
        jsFiles=[
            'libs/kore-no-conflict-start.js',
            'libs/jquery.js',
            'libs/jquery.tmpl.min.js',
            'libs/Jquery-ui.min.js',
            'libs/dompurify.js',
            '../libs/lodash.min.js',
            '../libs/d3.v4.min.js',
            '../libs/KoreGraphAdapter.js',
            '../libs/anonymousassertion.js',
            '../kore-bot-sdk-client.js',
            '../libs/Perfect-scrollbar.js',
            'Kore-widgets.js',
            'ChatWindow.js',
            '../libs/emoji.js',
            '../libs/recorder.js',
            '../libs/recorderWorker.js',
            '../libs/purejsCarousel.js',
            'custom/CustomTemplate.js',
            '../libs/ie11CustomProperties.js',
            '../libs/speech/app.js',
            '../libs/speech/key.js',
            '../libs/client_api.js',
            'kore-config.js',
            'kore-widgets-config.js',
            'kore-widgets-chat-main.js',
            'libs/kore-no-conflict-end.js'
        ];
        cssFiles=[
            'libs/jquery-ui.min.css',
            'libs/emojione.sprites.css',
            '../libs/purejscarousel.css',
            'chatWindow.css',
            'custom/customTemplate.css',
            '../libs/prefect-scrollbar.css',
            'kore-widgets.css'
        ]

    }else{
        //Below js and css set of files will be used to minify chatwindow sdk  
        jsFiles=[
            'libs/kore-no-conflict-start.js',
            'libs/jquery.js',
            'libs/jquery.tmpl.min.js',
            'libs/Jquery-ui.min.js',
            'libs/dompurify.js',
            '../libs/lodash.min.js',
            '../libs/d3.v4.min.js',
            '../libs/KoreGraphAdapter.js',
            '../libs/anonymousassertion.js',
            '../kore-bot-sdk-client.js',
            '../libs/Perfect-scrollbar.js',
            
            //  Uncomment below lines for AgentDestop plugin
            // '../plugins/agentdestop/libs/ac_webrtc.min.js',
            // '../plugins/agentdestop/libs/audio_player.js',
            // '../plugins/agentdestop/config.js',
            // '../plugins/agentdestop/libs/c2c.js',
            // '../plugins/agentdestop/agentdesktop.js',

            '../libs/emoji.js',
            '../libs/purejsCarousel.js',
            'ChatWindow.js',
            'custom/CustomTemplate.js',
            '../libs/ie11CustomProperties.js',
            '../libs/recorder.js',
            '../libs/recorderWorker.js',
            '../libs/speech/app.js',
            '../libs/speech/key.js',
            '../libs/client_api.js',
            'kore-config.js',
            'kore-main.js',
            'libs/kore-no-conflict-end.js'
        ];
        cssFiles=[
            'libs/jquery-ui.min.css',
            'libs/emojione.sprites.css',
            '../libs/purejscarousel.css',
            '../libs/prefect-scrollbar.css',
            'chatWindow.css',
            'custom/customTemplate.css',

            //  Uncomment below lines for AgentDestop plugin
            // '../plugins/agentdestop/agentdesktop.css'

        ]
    }

    // Project configuration.
    grunt.initConfig({

        //uglify task definition
        uglify: {
            options:{
                maxLineLen:320000000000000
            },
            js: {
                src: jsFiles,
                dest: 'dist/kore-ai-sdk' + '.min.js'
            }
        },
        cssmin: {
            options: {
              mergeIntoShorthands: false,
              roundingPrecision: -1
            },
            target: {
              files: {
                'dist/kore-ai-sdk.min.css':cssFiles 
              }
            }
          }, 

        //clean task definition
        clean: {
            dist: {
                options: {
                    force: true
                },
                src: ['dist']
            }
        },
    });


    // Load the plugin that provides the "clean" task.
    grunt.loadNpmTasks('grunt-contrib-clean');

    // Load the plugin that provides the "concat" task.
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // the default task can be run just by typing "grunt" on the command line
    grunt.registerTask('default', ['clean', 'uglify','cssmin']);

};
