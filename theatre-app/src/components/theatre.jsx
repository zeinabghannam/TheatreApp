import React, { Component } from 'react';
import Scene from '../components/scene';
import {Link} from 'react-router-dom'

class theatre extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let sceneList = this.props.scenes.map((scene) =>
            <Scene
                key={scene.id}
                scene={scene}
            />);
        return (
            <div className="col-md-3">
                <div className="theatre">
                    <div className="gears-icons">
                        <Link to="add"> <span className="fa fa-trash m-10 float-left"></span> </Link>
                        <Link to="add"> <span className="fa fa-edit m-10 float-left"></span></Link>
                    </div>
                    <div className="theatre-title">
                        <h4> {this.props.theatre.title} </h4>
                    </div>
                    <div className="theatre-date"><span className="fa fa-clock-o icon-span m-10"></span><span>{this.props.theatre.date}</span></div>
                    {sceneList}
                </div>
            </div>
            // end of theare
        );
    }
}

export default theatre;