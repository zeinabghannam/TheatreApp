const Question = require('../models/Question');
const QuestionCategory = require('../models/QuestionCategory');
const Category = require('../models/Category');
const CategoryHierarchy = require('../models/CategoryHierarchy');
const _ = require('lodash')

//Get All Questions of a specific category id and subcategory id:
exports.getAllQuestions = (req, res, nex) => {
    var filter = req.query.filter

    filter = filter.trim()
    if (!filter || filter.length <= 2) {
        return res.status(404).json({})
    }
    Question.find({ title: { $regex: '.*' + filter + '.*' } })
        .then(questions => {
            return res.status(200).json(questions)
        })
        .catch(error => { return res.status(500).json({ message: error }) })
}

//GET: GET ALL SUBCATEGORIES BASED ON THE PARENT CATEGORY ID:
exports.GetSubCategoriesByParentCategoryId = (req, res, next) => {
    var categoryParentId = req.query.categoryParentId
    CategoryHierarchy.find({ parent: categoryParentId }, 'tid')
        .then((subcategoriesIds) => {
            subcategoriesIds = _.map(subcategoriesIds, 'tid')
            Category.find({ tid: { $in: subcategoriesIds } }, 'tid name -_id')
                .then((subCategories) => {
                    return res.status(200).json(subCategories)
                })
                .catch((error) => { res.status(500).json(error) })
        })
        .catch(error => { return res.status(500).json({ message: error }) })

}

exports.GetQuestionsBySubcategory = (req, res, next) => {
    var { filter, id } = req.query
    QuestionCategory.find({ field_question_category_tid: id })
        .then(questionCategories => {
            var questionCategories = _.map(questionCategories, 'entity_id')
            Question.find({ nid: { $in: questionCategories }, title: { $regex: '.*' + filter + '.*' } }, 'title -_id')
                .then(questions => {
                    return res.status(200).json(questions)
                })
        })
        .catch(error => { return res.status(500).json(error) })


}