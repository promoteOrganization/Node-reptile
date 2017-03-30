/**
 * Created by pc on 2017/3/30.
 */
var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/reptitle');

module.exports = mongoose;