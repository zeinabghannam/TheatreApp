import React, { Component } from 'react';
import Scene from '../components/scene';
import http from '../services/httpService'
import config from '../config.json'
import GearIcons from './gearIcons'

class theatre extends Component {
    state = {
        theatre: {
            theatreId: "",
            title: "", date: "",
            scenes: []
            // number1: "1", script1: "", question1: '', subcategory1: '',
            // number2: "2", script2: "", question2: '', subcategory2: '',
            // number3: '3', script3: '', question3: '', subcategory3: '',
            // number4: '4', script4: '', question4: '', subcategory4: '',
            // number5: '5', script5: '', question5: '', subcategory5: '',
            // number6: '6', script6: '', question6: '', subcategory6: '',
            // number7: '7', script7: '', question7: '', subcategory7: '',
            // number8: '8', script8: '', question8: '', subcategory8: '',
            // number9: '9', script9: '', question9: '', subcategory9: '',
            // number10: '10', script10: '', question10: '', subcategory10: ''
        }
    }
    constructor(state) {
        super(state)
    }
    async componentDidMount() {
        var theatreId = this.props.match.params.theatreId
        this.handleGetTheatreDetails(theatreId)

    }
    //Handle Geting Edit data from the API:
    handleGetTheatreDetails = async (theatreId) => {
        const { data } = await http.get(config.API_EndPoint + 'theatre/edit/' + theatreId)
        //map the response object to the state.theatre:
        const response = {
            theatreId: data.theatre._id,
            title: data.theatre.title,
            date: data.theatre.date,
            scenes: data.theatre.scenes
        }
        // for (let i = 1; i <= data.theatre.scenes.length; i++) {
        // for (let scene of data.theatre.scenes) {
        //     //console.log(scene)
        //     let number = scene["number"]
        //     response["number" + number] = scene.number
        //     response["script" + number] = scene.script
        //     response["question" + number] = scene.question
        // }
        await this.setState({ theatre: response })
        document.title = this.state.theatre.title
    }
  
    render() {
        let sceneList = this.state.theatre.scenes.map((scene) =>
            <Scene
                key={scene.id}
                scene={scene}
            />);
        return (
            <div className="col-md-12">
                <div className="theatre">
                    <div className="theatre-title">
                        <h5> {this.state.theatre.title} </h5>
                    </div>
                    <div className="theatre-date">
                        <GearIcons theatreId={this.state.theatre.theatreId} />
                        <span className="fa fa-clock-o icon-span m-10"></span>
                        <span>{this.state.theatre.date}</span>
                    </div>
                    {sceneList}
                </div>
            </div>
            // end of theare
        );
    }
}

export default theatre;