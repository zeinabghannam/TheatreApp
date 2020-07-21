import React, { Component } from 'react';

class addTheatre extends Component {
    render() {
        return (
            // Add new theatre form
            <div className="row">
                <div className="col-md-10 offset-md-1">
                    <div className="theatre">
                        <form>
                            <div className="theatre-title">
                                <input type="input" id="theatre_title" placeholder="عنوان المسرح" className="form-control" />
                            </div>
                            <div className="theatre-date">
                                <input type="date" id="theatre_date" placeholder=" 01/09/2020" className="form-control" />
                            </div>
                            {/* scene block */}
                            <div className="scene-block">
                                <div className="scene-title">
                                    <h5>المشهد الاول</h5>
                                </div>
                                <div className=" scene-text">
                                    <textarea className="form-control" id="scene1_text" placeholder="نص المشهد" rows={3} defaultValue={""} />
                                </div>
                                {/* qeustion  */}
                                <div className="questions-table">
                                    <table className="table table-hover table-stripped">
                                        <tbody><tr>
                                            <td>سؤال1</td>
                                            <td><input type="input" id="scene1_q1_text" placeholder=" نص السؤال" className="form-control" /></td>
                                        </tr>
                                        </tbody></table>
                                </div>
                            </div>
                            {/* end scene block */}
                            {/* scene block */}
                            <div className="scene-block">
                                <div className="scene-title">
                                    <h5>المشهد الثاني</h5>
                                </div>
                                <div className=" scene-text">
                                    <textarea className="form-control" id="scene1_text" placeholder="نص المشهد" rows={3} defaultValue={""} />
                                </div>
                                {/* qeustion  */}
                                <div className="questions-table">
                                    <table className="table table-hover table-stripped">
                                        <tbody><tr>
                                            <td>سؤال2</td>
                                            <td><input type="input" id="scene1_q1_text" placeholder=" نص السؤال" className="form-control" /></td>
                                        </tr>
                                        </tbody></table>
                                </div>
                            </div>
                            {/* end scene block */}
                            {/* scene block */}
                            <div className="scene-block">
                                <div className="scene-title">
                                    <h5>المشهد الثالث</h5>
                                </div>
                                <div className=" scene-text">
                                    <textarea className="form-control" id="scene1_text" placeholder="نص المشهد" rows={3} defaultValue={""} />
                                </div>
                                {/* qeustion  */}
                                <div className="questions-table">
                                    <table className="table table-hover table-stripped">
                                        <tbody><tr>
                                            <td>سؤال3</td>
                                            <td><input type="input" id="scene1_q1_text" placeholder=" نص السؤال" className="form-control" /></td>
                                        </tr>
                                        </tbody></table>
                                </div>
                            </div>
                            {/* end scene block */}
                            {/* scene block */}
                            <div className="scene-block">
                                <div className="scene-title">
                                    <h5>المشهد الرابع</h5>
                                </div>
                                <div className=" scene-text">
                                    <textarea className="form-control" id="scene1_text" placeholder="نص المشهد" rows={3} defaultValue={""} />
                                </div>
                                {/* qeustion  */}
                                <div className="questions-table">
                                    <table className="table table-hover table-stripped">
                                        <tbody><tr>
                                            <td>سؤال4</td>
                                            <td><input type="input" id="scene1_q1_text" placeholder=" نص السؤال" className="form-control" /></td>
                                        </tr>
                                        </tbody></table>
                                </div>
                            </div>
                            {/* end scene block */}
                            {/* scene block */}
                            <div className="scene-block">
                                <div className="scene-title">
                                    <h5>المشهد الخامس</h5>
                                </div>
                                <div className=" scene-text">
                                    <textarea className="form-control" id="scene1_text" placeholder="نص المشهد" rows={3} defaultValue={""} />
                                </div>
                                {/* qeustion  */}
                                <div className="questions-table">
                                    <table className="table table-hover table-stripped">
                                        <tbody><tr>
                                            <td>سؤال5</td>
                                            <td><input type="input" id="scene1_q1_text" placeholder=" نص السؤال" className="form-control" /></td>
                                        </tr>
                                        </tbody></table>
                                </div>
                            </div>
                            {/* end scene block */}
                            {/* scene block */}
                            <div className="scene-block">
                                <div className="scene-title">
                                    <h5>المشهد السادس</h5>
                                </div>
                                <div className=" scene-text">
                                    <textarea className="form-control" id="scene1_text" placeholder="نص المشهد" rows={3} defaultValue={""} />
                                </div>
                                {/* qeustion  */}
                                <div className="questions-table">
                                    <table className="table table-hover table-stripped">
                                        <tbody><tr>
                                            <td>سؤال6</td>
                                            <td><input type="input" id="scene1_q1_text" placeholder=" نص السؤال" className="form-control" /></td>
                                        </tr>
                                        </tbody></table>
                                </div>
                            </div>
                            {/* end scene block */}
                            {/* scene block */}
                            <div className="scene-block">
                                <div className="scene-title">
                                    <h5>المشهد السابع</h5>
                                </div>
                                <div className=" scene-text">
                                    <textarea className="form-co" id="scene1_text" placeholder="نص المشهد" rows={3} defaultValue={""} />
                                </div>
                                {/* qeustion  */}
                                <div className="questions-table">
                                    <table className="table table-hover table-stripped">
                                        <tbody><tr>
                                            <td>سؤال7</td>
                                            <td><input type="input" id="scene1_q1_text" placeholder=" نص السؤال" className="form-control" /></td>
                                        </tr>
                                        </tbody></table>
                                </div>
                            </div>
                            {/* end scene block */}
                            {/* scene block */}
                            <div className="scene-block">
                                <div className="scene-title">
                                    <h5>المشهد الثامن</h5>
                                </div>
                                <div className=" scene-text">
                                    <textarea className="form-control" id="scene1_text" placeholder="نص المشهد" rows={3} defaultValue={""} />
                                </div>
                                {/* qeustion  */}
                                <div className="questions-table">
                                    <table className="table table-hover table-stripped">
                                        <tbody><tr>
                                            <td>سؤال8</td>
                                            <td><input type="input" id="scene1_q1_text" placeholder=" نص السؤال" className="form-control" /></td>
                                        </tr>
                                        </tbody></table>
                                </div>
                            </div>
                            {/* end scene block */}
                            {/* scene block */}
                            <div className="scene-block">
                                <div className="scene-title">
                                    <h5>المشهد التاسع</h5>
                                </div>
                                <div className=" scene-text">
                                    <textarea className="form-control" id="scene1_text" placeholder="نص المشهد" rows={3} defaultValue={""} />
                                </div>
                                {/* qeustion  */}
                                <div className="questions-table">
                                    <table className="table table-hover table-stripped">
                                        <tbody><tr>
                                            <td>سؤال9</td>
                                            <td><input type="input" id="scene1_q1_text" placeholder=" نص السؤال" className="form-control" /></td>
                                        </tr>
                                        </tbody></table>
                                </div>
                            </div>
                            {/* end scene block */}
                            {/* scene block */}
                            <div className="scene-block">
                                <div className="scene-title">
                                    <h5>المشهد العاشر</h5>
                                </div>
                                <div className=" scene-text">
                                    <textarea className="form-control" id="scene1_text" placeholder="نص المشهد" rows={3} defaultValue={""} />
                                </div>
                                {/* qeustion  */}
                                <div className="questions-table">
                                    <table className="table table-hover table-stripped">
                                        <tbody><tr>
                                            <td>سؤال10</td>
                                            <td><input type="input" id="scene1_q1_text" placeholder=" نص السؤال" className="form-control" /></td>
                                        </tr>
                                        </tbody></table>
                                </div>
                            </div>
                            {/* end scene block */}
                            {/* submit button */}
                            <div className="row">
                                <button type="submit" className="btn btn-success btn-lg btn-fluid">حفظ</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            //end of add new thatre form
        );
    }
}

export default addTheatre;