const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Scene = require('./Scene').schema;

const TheatreSchema = new Schema({
    title:{
        type:String,
        reqquired:true
    },
    date:{
        type:String,
        reqquire:false
    },
    scenes: [Scene]
});

module.exports = mongoose.model('Theatre',TheatreSchema);