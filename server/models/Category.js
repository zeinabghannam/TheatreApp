const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SceneSchema = new Schema({
    tid: {
        type: String,
        reqquired: true
    },
    name: {
        type: String,
        reqquired: true
    },
    ndepth: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Category', SceneSchema, 'Category')