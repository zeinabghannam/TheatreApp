import React, { Component } from 'react';
import util from '../utils.js'

class addScene extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        var { number, theatre, onChange } = this.props
        let num = parseInt(number)
        let sceneTitile = util.SCENES_TITLES[num - 1]
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
                                <td><input type="input" name={questionNo} value={theatre[questionNo]} onChange={onChange} placeholder=" نص السؤال" className="form-control" /></td>
                            </tr>
                            </tbody></table>
                    </div>
                </div>
                {/* end scene block */}
            </div>
        );
    }
}

export default addScene;