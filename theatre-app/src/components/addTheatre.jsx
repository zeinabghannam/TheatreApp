import React, { Component } from 'react';
import AddScene from './addScene'
import http from '../services/httpService'
import config from '../config.json'

class addTheatre extends Component {
    state = {
        theatre: {
            theatreId: "",
            title: "", date: "",
            number1: "1", script1: "", question1: '', subcategory1: '',
            number2: "2", script2: "", question2: '', subcategory2: '',
            number3: '3', script3: '', question3: '', subcategory3: '',
            number4: '4', script4: '', question4: '', subcategory4: '',
            number5: '5', script5: '', question5: '', subcategory5: '',
            number6: '6', script6: '', question6: '', subcategory6: '',
            number7: '7', script7: '', question7: '', subcategory7: '',
            number8: '8', script8: '', question8: '', subcategory8: '',
            number9: '9', script9: '', question9: '', subcategory9: '',
            number10: '10', script10: '', question10: '', subcategory10: ''
        },
        IsEditting: null,
        TheatreTitles: [],
        date: "",
        subCategoriesIds: []
    }


    constructor(props) {
        super(props)

    }

    async componentDidMount() {
        const editting = (this.props.IsEditting === "true")
        await this.setState({ IsEditting: editting })

        //if the page is edit, then display old theatre data in the input fields.
        if (this.state.IsEditting) {
            document.title = "تعديل مسرح"
            var theatreId = this.props.match.params.theatreId
            this.handleGetEditTheatre(theatreId)
        }
        else {
            document.title = "إضافة مسرح"
            this.handleGetAddTheatre()
        }
        //Get subcategories ids and send it to addSence:
        //Get theatres from database
        const { data: subids } = await http.get(config.API_EndPoint + `question/getsubcategories?categoryParentId=${config.Arts_Category_Id}`)
        this.setState({ subCategoriesIds: subids })
    }
    //Hangle Adding New Theatre:
    handleAddTheatre = async () => {
        const { data: theatre } = await http.post(config.API_EndPoint + 'theatre/add', this.state.theatre)
        //console.log(theatre)
    }

    //Hangle updating a theatre:
    handleUpdateTheatre = async () => {
        var theatreId = this.props.match.params.theatreId
        var theatre = { ...this.state.theatre }
        theatre["theatreId"] = theatreId
        this.setState({ theatre });
        const { data: edited_theatre } = await http.post(config.API_EndPoint + 'theatre/edit/', this.state.theatre)

    }

    //Handle Form submition:
    handleSubmit = (e) => {
        e.preventDefault();
        //if submitting new tehatre <=>post add:
        if (!this.state.IsEditting)
            this.handleAddTheatre()
        else
            this.handleUpdateTheatre()
        var x = "http://" + window.location.hostname + ":" + window.location.port + "/all"
        window.location.assign(x)
    }

    //Handle Get Add Theatre:
    handleGetAddTheatre = async () => {
        const { data } = await http.get(config.API_EndPoint + 'theatre/add/')
        this.setState({ TheatreTitles: data.titles })
    }
    //Handle Geting Edit data from the API:
    handleGetEditTheatre = async (theatreId) => {
        const { data } = await http.get(config.API_EndPoint + 'theatre/edit/' + theatreId)
        //map the response object to the state.theatre:
        const response = {
            theatreId: data.theatre._id,
            title: data.theatre.title,
            date: data.theatre.date
        }
        // for (let i = 1; i <= data.theatre.scenes.length; i++) {
        for (let scene of data.theatre.scenes) {
            console.log(scene)
            let number = scene["number"]
            response["number" + number] = scene.number
            response["script" + number] = scene.script
            response["question" + number] = scene.question
        }
        await this.setState({ theatre: response })
    }

    //handle change of the input field:
    handleChange = (e) => {
        var theatre = { ...this.state.theatre }
        theatre[e.currentTarget.name] = e.currentTarget.value
        this.setState({ theatre })
    }
    UpdateSelectedQuestion = (qno, val) => {
        var theatre = { ...this.state.theatre }
        var questionNo = "question" + qno
        theatre[questionNo] = val
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
                        <form onSubmit={this.handleSubmit}>
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
                                        subcategories={this.state.subCategoriesIds}
                                        theatre={this.state.theatre}
                                        number={number}
                                        onChange={this.handleChange}
                                        asendToParent={this.UpdateSelectedQuestion}
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