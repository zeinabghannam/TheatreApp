import React, { Component } from 'react';
import Scene from '../components/scene';

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
                    <div className="theatre-title">
                        <h4> {this.props.theatre.title} </h4>
                    </div>
                    <div className="theatre-date"><span>{this.props.theatre.date}</span></div>
                    {sceneList}
                </div>
            </div>
            // end of theare
        );
    }
}

export default theatre;