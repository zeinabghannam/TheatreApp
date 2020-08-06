import React, { Component } from 'react';
import AddScene from './addScene'

class addTheatre extends Component {
    state = {
        theatre: {
            title: "", date: "",
            number1: "1", script1: "", question1: '',
            number2: "2", script2: "", question2: '',
            number3: '3', script3: '', question3: '',
            number4: '4', script4: '', question4: '',
            number5: '5', script5: '', question5: '',
            number6: '6', script6: '', question6: '',
            number7: '7', script7: '', question7: '',
            number8: '8', script8: '', question8: '',
            number9: '9', script9: '', question9: '',
            number10: '10', script10: '', question10: ''
        }
    }
    constructor(props) {
        super(props)
    }
    //Handle Form submition:
    handleubmit = (e) => {
        e.preventDefault();
        console.log(this.state.theatre)
    }
    //handle change of the input field:
    handleChange = (e) => {
        var theatre = { ...this.state.theatre }
        theatre[e.currentTarget.name] = e.currentTarget.value
        this.setState({ theatre })
    }
    render() {
        var { theatre } = this.state
        var nums = Array.from({ length: 10 }, (v, k) => k + 1)
        var addScenesList = nums.map((number) =>
            <AddScene
                key={number}
                number={number}
            />
        )
        return (
            // Add new theatre form
            <div className="row">
                <div className="col-md-10 offset-md-1">
                    <div className="theatre">
                        <form onSubmit={this.handleubmit}>
                            <div className="theatre-title">
                                <input type="input" name="title" id="theatre_title" value={theatre.title} onChange={this.handleChange} placeholder="عنوان المسرح" className="form-control" />
                            </div>
                            <div className="theatre-date">
                                <input type="date" name="date" id="theatre_date" value={theatre.date} onChange={this.handleChange} placeholder=" 01/09/2020" className="form-control" />
                            </div>
                            {
                                nums.map((number) =>
                                    <AddScene
                                        key={number}
                                        theatre={this.state.theatre}
                                        number={number}
                                        onChange={this.handleChange}
                                    />
                                )
                            }
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