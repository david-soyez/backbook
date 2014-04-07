// The Category model

var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var categorySchema = new Schema({
    name_en:  {type: String, required: true},
    name_fr:  {type: String, required: true},
    slug_en:  {type: String, required: true},
    slug_fr:  {type: String, required: true},
    is_active: {type: Boolean, default: false}
}, { versionKey: false });

categorySchema.statics.findAllActive = function (cb) {
    this.find({is_active:true}, cb);
}

module.exports = mongoose.model('Category', categorySchema);