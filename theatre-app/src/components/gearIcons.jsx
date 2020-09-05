import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import http from '../services/httpService'
import config from '../config.json'

class GearIcons extends Component {
    constructor(props) {
        super(props)
    }

    //Handle on delete:
    handleDelete = async (theatreId) => {
        const { data } = await http.post(config.API_EndPoint + 'theatre/delete', { theatreId })
        // this.props.history.push("/all")
        var x = "http://" + window.location.hostname + ":" + window.location.port + "/all"
        window.location.assign(x)
    }

    render() {
        return (
            <div className="gears-icons">
                <Link to="all" onClick={() => { this.handleDelete(this.props.theatreId) }}> <span className="fa fa-trash m-10 float-left"></span> </Link>
                <Link to={`/edit/${this.props.theatreId}`}> <span className="fa fa-edit m-10 float-left"></span></Link>
            </div>
        );
    }
}

export default GearIcons;