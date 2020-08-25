import React, { Component } from 'react';
import util from '../utils.js'
import Autosuggest from "react-autosuggest"
import http from '../services/httpService'
import config from '../config.json'

export default function AddScene(props) {

    const [suggestions, setSuggestions] = React.useState([])

    var { number, theatre, subcategories, onChange, asendToParent } = props
    let num = parseInt(number)
    let sceneTitile = util.SCENES_TITLES[num - 1] + " - " + util.Art_SUBCATEGORIES[number - 1]
    var sceneNo = "number" + number
    var SubcategoryNo = "subcategory" + number
    var scriptNo = "script" + number
    var questionNo = "question" + number
    var subcategory = subcategories[num - 1]
    return (
        <div>
            {/* scene block */}
            <div className="scene-block">
                <div className="scene-title">
                    <input type="hidden" name={sceneNo} value={number} />
                    <input type="hidden" name={SubcategoryNo} value={subcategory} />
                    <h5> {sceneTitile}</h5>
                </div>
                <div className=" scene-text">
                    <textarea name={scriptNo} onChange={onChange} className="form-control" placeholder="نص المشهد" rows={3} defaultValue={theatre[scriptNo]} />
                </div>
                {/* qeustion  */}
                <div className="questions-table">
                    <table className="table table-hover table-stripped">
                        <tbody><tr>
                            <td>سؤال1</td>
                            {/* <td><input type="input" name={questionNo} value={theatre[questionNo]} onChange={onChange} placeholder=" نص السؤال" className="form-control" /></td> */}
                            <td>
                                <Autosuggest
                                    suggestions={suggestions}
                                    onSuggestionsFetchRequested={async ({ value }) => {
                                        if (!value) {
                                            setSuggestions([]);
                                            return;
                                        }

                                        try {
                                            const response = await http.get(config.API_EndPoint + `question/getQuestionsBySubCategory?filter=${value}&id=${subcategory}`)
                                            console.log("response", response.data)
                                            setSuggestions(
                                                response.data.map(row => ({
                                                    title: row.title,
                                                    // id: row.id
                                                }))
                                            )
                                        } catch (e) {
                                            setSuggestions([]);
                                        }
                                    }}

                                    onSuggestionsClearRequested={() => {
                                        setSuggestions([]);
                                    }}

                                    getSuggestionValue={suggestion => suggestion.title}

                                    renderSuggestion={suggestion => (
                                        <div>
                                            {suggestion.title}
                                        </div>
                                    )}

                                    onSuggestionSelected={(event, { suggestion, method }) => {
                                        console.log(suggestion)
                                        if (method === "enter") {
                                            event.preventDefault();
                                        }
                                        // event.preventDefault();
                                        // setCountry(suggestion.title);
                                        //   setFieldValue(theatre[questionNo], suggestion.title)
                                        //  event.target[questionNo].value = suggestions.name
                                        asendToParent(number, suggestion.title)
                                        // event.currentTarget.value = suggestion.title
                                    }}
                                    inputProps={{
                                        placeholder: " ",
                                        autoComplete: "abcd",
                                        name: questionNo,
                                        value: theatre[questionNo],
                                        onChange: onChange,
                                        className: "form-control",
                                        ref: questionNo
                                    }}
                                />
                            </td>
                        </tr>
                        </tbody></table>
                </div>
            </div>
            {/* end scene block */}
        </div>
    );
}


