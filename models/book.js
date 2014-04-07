// The Book model

var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var bookSchema = new Schema({
    title:  {type: String, required: true},
    author: {type: String, required: true},
    description: {type: String, required: true},
    language: {type: String, required: true, enum: 'en fr'.split(' ') },
    release_date: {type: Date, required: true},
    ISBN_13: String,
    pages_count: Number,
    publisher: String,
    category: {type : Schema.ObjectId, ref : 'Category'},
    is_processed: {type: Boolean, default: false},
    content_filename: String,
    image_filename: String,
    words_processed: Number,
    lines_processed: Number,
    score: Number,
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now},
    is_active: {type: Boolean, default: false},
    is_deleted: {type: Boolean, default: false},
    user: {type : Schema.ObjectId, ref : 'User'}
}, { versionKey: false });

bookSchema.statics.findAllActive = function (search_params, cb) {
    var sort = {};
    if(search_params.sort != undefined)
    {
        sort[search_params.sort] = search_params.desc==1 ? -1 : 1;
    }
    else
    sort.created_at = 1;

    this.find({is_active:true}, {}, {
        category: search_params.category_id,
        skip: search_params.offset,
        limit: search_params.limit,
        sort:sort
    }, cb);
};


module.exports = mongoose.model('Book', bookSchema);