import Questions from './Questions.json'

// Get question based on a filter:

export default async function getMatchedQuestions(filter) {
    var result = []
    await Questions.forEach(item => {
        if (item.field_question_text_value.includes(filter)) {
            result.push(item)
        }
    });
    console.log(result)
    return result;
}
