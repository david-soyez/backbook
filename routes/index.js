var Category = require('../models/category.js');

/*
 * GET home page.
 */
exports.index = function(req, res){

    Category.findAllActive(function(err, categories) {
        res.render('index', {categories: categories});
    })

};