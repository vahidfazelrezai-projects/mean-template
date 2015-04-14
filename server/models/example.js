var mongoose = require('mongoose');

// define schema for model
var exampleSchema = mongoose.Schema({
    exampleNumber: Number,
    exampleString: String
});

// export model
module.exports = mongoose.model('Example', exampleSchema);