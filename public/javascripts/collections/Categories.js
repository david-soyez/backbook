define(["backbone", "models/Category"], function(Backbone, Category) {
    return Backbone.Collection.extend({
        model: Category,
        url: "/categories"
    });
});