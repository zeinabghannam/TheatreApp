import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import GearIcons from './gearIcons'

class BriefTheatre extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="col-md-3">
                <div className="theatre">

                    <div className="theatre-title">
                        <h5>
                            <Link to={`/theatre/${this.props.theatre._id}`} > {this.props.theatre.title}</Link>
                        </h5>
                    </div>
                    <div className="theatre-date">
                        <GearIcons theatreId={this.props.theatre._id} />
                        <span className="fa fa-clock-o icon-span m-10"></span><span>{this.props.theatre.date}</span></div>
                </div>
            </div>
        );
    }
}

export default BriefTheatre;