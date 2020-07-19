import React, { Component } from 'react';
import Scene from '../components/scene';
class theatre extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "THEATRE TITLE",
            date: "5/9/2020"
        }
    }

    render() {
        return (
            <div className="col-md-2">
                <div className="theatre">
                    <div className="theatre-title">
                        <h4>مسرح الفنون </h4>
                    </div>
                    <div className="theatre-date"><span>15/5/2020</span></div>
                    <Scene />
                </div>
            </div>
            // end of theare
        );
    }
}

export default theatre;