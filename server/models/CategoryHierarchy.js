const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SceneSchema = new Schema({
    tid: {
        type: String,
        reqquired: true
    },
    parent: {
        type: String,
        reqquired: true
    },
});

module.exports = mongoose.model('CategoryHierarchy', SceneSchema, 'CategoryHierarchy');