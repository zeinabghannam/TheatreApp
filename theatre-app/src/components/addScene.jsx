import React, { Component } from 'react';
import util from '../utils.js'
import Autosuggest from "react-autosuggest"
import http from '../services/httpService'
import config from '../config.json'

export default function AddScene(props) {

    const [suggestions, setSuggestions] = React.useState([])

    var { number, theatre, onChange, asendToParent } = props
    let num = parseInt(number)
    let sceneTitile = util.SCENES_TITLES[num - 1] + " - " + util.Art_SUBCATEGORIES[number - 1]
    var sceneNo = "number" + number
    var scriptNo = "script" + number
    var questionNo = "question" + number
    return (
        <div>
            {/* scene block */}
            <div className="scene-block">
                <div className="scene-title">
                    <input type="hidden" name={sceneNo} value={number} />
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
                                            const response = await http.get(config.API_EndPoint + `matched_questions?filter=${value}`)
                                            console.log("response", response.data)
                                            setSuggestions(
                                                response.data.map(row => ({
                                                    name: row.name,
                                                    id: row.id
                                                }))
                                            )
                                        } catch (e) {
                                            setSuggestions([]);
                                        }
                                    }}

                                    onSuggestionsClearRequested={() => {
                                        setSuggestions([]);
                                    }}

                                    getSuggestionValue={suggestion => suggestion.name}

                                    renderSuggestion={suggestion => (
                                        <div>
                                            {suggestion.name}
                                        </div>
                                    )}

                                    onSuggestionSelected={(event, { suggestion, method }) => {
                                        console.log(suggestion)
                                        if (method === "enter") {
                                            event.preventDefault();
                                        }
                                        // event.preventDefault();
                                        // setCountry(suggestion.name);
                                        //   setFieldValue(theatre[questionNo], suggestion.name)
                                        //  event.target[questionNo].value = suggestions.name
                                        asendToParent(number, suggestion.name)
                                        // event.currentTarget.value = suggestion.name
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


