
require.config({
    paths: {
        jquery: 'lib/jquery/jquery-1.11.0',
        underscore: 'lib/underscore/underscore',
        backbone: 'lib/backbone/backbone',
        bootstrap: 'lib/bootstrap/bootstrap',

        text: 'lib/require/text',

        templates: '../templates'
    },

    shim : {
        "backbone": {
            deps: ["underscore", "jquery", "bootstrap", "text"],
            exports: "Backbone"
        },
        "bootstrap": {
            deps: ["jquery"],
            exports: "$"
        },
        "underscore": {
            exports: "_"
        }
    },

    urlArgs: "_=" + (new Date()).getTime()

});


require([
    'backbone',
    'routers/AppRouter'
], function(Backbone, AppRouter){

    window.appRouter = new AppRouter();

});