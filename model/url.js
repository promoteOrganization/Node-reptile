/**
 * Created by pc on 2017/3/30.
 */
var mongoose = require('../db/db');

var urlSchema = mongoose.Schema({
    url:String   // url，类型为String
})

var url = mongoose.model('url', urlSchema, 'url');

module.exports = url;