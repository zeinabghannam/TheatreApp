const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SceneSchema =new Schema({
    title:{
        type:String,
        reqquired:true
    },
    number:{
        type:String,
        reqquired:false
    },
    script:{
        type:String,
        reqquired:true
    },
    date:{
        type:Date,
        reqquire:false
    },
    question:{
        type:String,
        reqquired:true
    },
});

module.exports = mongoose.model('Scene',SceneSchema);