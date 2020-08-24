var express = require('express')
var router = express.Router()
var QuestionController = require('../controllers/QuestionController')

/* GET :All questions  Available based on the passed filter/querysting filter called filter */
router.get('/getMatchedQuestions', QuestionController.getAllQuestions)

//Get all subCategories based on the parent category id as querysting called categoryParentId
router.get('/getSubCategories', QuestionController.GetSubCategoriesByParentCategoryId)

//GET: Get QUSTIONS BY FILTER AND SUBCATEGORY ID:
router.get('/getQuestionsBySubCategory', QuestionController.GetQuestionsBySubcategory)

module.exports = router
