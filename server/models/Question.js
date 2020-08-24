const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SceneSchema =new Schema({
    title:{
        type:String,
        reqquired:true
    },
    nid:{
        type:String,
        reqquired:true
    },
    vid:{
        type:String,
        reqquired:true
    },
    type:{
        type:String,
        reqquired:true
    },
    language:{
        type:String,
        reqquired:true
    },
    status:{
        type:String,
        reqquired:true
    },
    created:{
        type:String,
        reqquired:true
    },
    change:{
        type:String,
        reqquired:true
    },
    comment:{
        type:String,
        reqquired:true
    },
    promote:{
        type:String,
        reqquired:true
    },
    sticky:{
        type:String,
        reqquired:true
    },
    tnid:{
        type:String,
        reqquired:true
    },
    translate:{
        type:String,
        reqquired:true
    },
});

module.exports = mongoose.model('Question',SceneSchema, 'Question');