define([
    'backbone',
    'text!templates/defaultTemplate.html'
], function(Backbone, defaultTemplate){

    var DefaultView = Backbone.View.extend({
        el: '.content',
        initialize: function () {

        },
        render: function () {
            var that = this;
            $(this.el).html(defaultTemplate);

        }
    });
    return DefaultView;

});