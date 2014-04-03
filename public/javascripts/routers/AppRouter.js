define([
    'backbone',
    'views/DefaultView'
    ],
    function(Backbone, DefaultView) {

        var AppRouter = Backbone.Router.extend({
            routes: {
                "*actions": "defaultAction"
            },

            defaultAction: function(actions) {
                var defaultView = new DefaultView();
                defaultView.render();
            },

            initialize: function() {
                Backbone.history.start();
            }

        });

        return AppRouter;
    }
);