const Scene = require('../models/Scene');
const Theatre = require('../models/Theatre');
var moment = require('moment');
const TheatreTitls = require('../services/TheatreTitles')
var helpers = require("../helpers")
const Questions = require('../services/Questions.json');
const { json } = require('express');


//Get all theatrs
exports.getAllTheatres = (req, res, nex) => {
    Theatre.find()
    .sort({'date':1})
        .then(theatres => {
            // console.log('THEATRES : ', theatres)
            res.status(200).json({
                theatres
            })
        })
        .catch(error => { return res.status(500).json({ message: error }) })
}

//GET: Add new theatre:
exports.getAddTheatre = (req, res, nex) => {
    //Theatre title will be recieved from Contest Portal API
    var titles = TheatreTitls
    //var questions = Questions

    //Date will be generated according to the last theatre insertion; each date is 7-day shift from the previous one.
    var date = Date.now()

    res.status(200).json({ titles, date })
}

//POST: Add new theatre:
exports.postAddTheatre = (req, res, nex) => {
    // Recieve Data from submit:
    var title = req.body.title || "غير مدخل"
    var date = req.body.date || new Date.now()
    var theatre

    helpers.getScenesFromRequest(req, (scenes) => {
        theatre = new Theatre(
            {
                title, date, scenes
            });
        // Save object to the database:
        theatre.save()
            .then(result => { res.status(201).json({ theatre, message: result }); return; })
            .catch(err => { res.status(500).json({ message: err }); return; });
    })
}

//Get: Edit a theatre: by id;
exports.getEditTheatre = (req, res, nex) => {
    var theatreId = req.params.theatreId
    if (!theatreId) {
        res.json({ message: "MISSING THEATRE ID!!!" })
        return
    }
    Theatre.findById(theatreId)
        .then(theatre => {
            if (!theatre) {
                res.status(404).json({ message: "TEHATRE NOT FOUND" })
                return
            }
            console.log("success getting theatre by id ")
            res.status(200).json({ theatre })
            return
        })
        .catch(err => { res.status(500).json({ "message": err }); return })
}

//Post: Edit Theatre:
exports.postEditTheatre = (req, res, next) => {
    console.log("-----------------")
    var theatreId = req.body.theatreId
    console.log(req.body)
    var { title, date } = req.body
    if (!theatreId) {
        res.status(404).json({ message: "TEHATRE ID NOT FOUND" })
        return
    }
    //Get all scenes from request as an array of objects:
    helpers.getScenesFromRequest(req, (_scenes) => {
        Theatre.findById(theatreId)
            .then(theatre => {
                if (!theatre) {
                    res.status(404).json({ message: "TEHATRE  NOT FOUND" })
                    return
                }
                theatre.title = title
                theatre.date = date
                console.log(_scenes)
                theatre.scenes = _scenes
                return theatre.save();
            })
            .then(result => {
                res.status(200).json({ message: "tehatre editted successfully" })
                return
            })
            .catch(err => { res.status(500).json({ message: "ERROR EDITTING THEATRE " }); return })
    })
}

//Post: Delete Theatre By Id
exports.postDeleteTheatre = (req, res, next) => {
    var theatreId = req.body.theatreId;
    if (!theatreId) {
        res.status(404).json({ message: "NO THEATRE ID PROVIDED!" })
        return
    }
    Theatre.findByIdAndRemove(theatreId)
        .then(() => { res.status(200).json({ message: "theatre deleted succesfully" }); return; })
        .catch(err => { res.status(500).json({ message: "error deleting theatre " }); return; })
}
//Get: Delete All Theatres:
exports.deleteAllTheatres = (req, res, next) => {
    Theatre.remove()
        .then(result => { res.status(200).json({ message: result }); return })
        .catch(err => { res.status(500).json({ message: err }); return })
}

//Get All mached questions accrding to the user's input filter
//The questions to be searched for are located, termorarly in the Questions.json file
//These questions should be retrieved from an endpoint exposed from the questions_portal app which is a Drupal version 7 web app.
exports.getAllMatchedQuestions = async (req, res, next) => {
    var filter = req.query.filter
    var result = []
    if (!filter || filter.length <= 3)
        return res.json({ result })
    await Questions.forEach(item => {
        if (item.title.includes(filter))
            result.push({ name: item.title, id: item.nid })
    })
    return res.json(result)
}