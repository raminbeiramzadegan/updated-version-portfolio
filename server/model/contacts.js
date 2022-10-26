let mongoose = require('mongoose');
let contactModel = mongoose.Schema({
    cname: String,
    cnumber: Number,
    email: String

},

{
    collection:"contact"
});

module.exports = mongoose.model('contact',contactModel);