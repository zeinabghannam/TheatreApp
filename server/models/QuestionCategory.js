const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SceneSchema = new Schema({
    entity_id: {
        type: String,
        reqquired: true
    },
    field_question_category_tid: {
        type: String,
        reqquired: true
    },
});

module.exports = mongoose.model('QuestionCategory', SceneSchema, 'QuestionCategory');