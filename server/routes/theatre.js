var express = require('express');
var router = express.Router();
var TheatreController = require('../controllers/TheatreController');

/* GET :All theatres Available */
router.get('/', TheatreController.getAllTheatres);

/* GET :All Matched Questions accrding to the filter */
router.get('/matched_questions', TheatreController.getAllMatchedQuestions);

// /* Get: Add NEW theatre */
router.get('/add', TheatreController.getAddTheatre);

/* Post: Add New theatre */
router.post('/add', TheatreController.postAddTheatre);


// Get: Edit Theatre:
router.get('/edit/:theatreId', TheatreController.getEditTheatre)

/* Post: edit theatre */
router.post('/edit', TheatreController.postEditTheatre);


/* Delete Theatre */
router.post('/delete', TheatreController.postDeleteTheatre);

/* Delete All Theatres */
router.get('/deleteall', TheatreController.deleteAllTheatres);

module.exports = router;
