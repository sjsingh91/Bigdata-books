var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    thumbnailUrl: {type: String, required: true},
    title: {type: String, required: true},
    shortDescription: {type: String, required: true},
    longDescription: {type: String, required: true},
    price: {type: Number, required: true},
    authors:{type:String, required: true},
    _id: {type: Number, required: true},
    isbn: {type:String, required: true},
    status: {type:String, required: true},
    categories: {type:String, required: true}
    });

module.exports = mongoose.model('Product', schema);