const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TaskSchema = new Schema({
    name: {type: String, required: true, max: 100},
    desc: {type: String, required: false},
});

mongoose.set('useFindAndModify', false);

// Export the model
module.exports = mongoose.model('Task', TaskSchema);