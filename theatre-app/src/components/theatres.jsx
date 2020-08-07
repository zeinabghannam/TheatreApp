import React, { Component } from 'react';
import Theatre from './theatre';
import http from '../services/httpService'
import config from '../config.json'


class Theatres extends Component {
    //this is dummy data:
    state = {
        theatres: []
    }
    constructor(props) {
        super(props)
        this.state = { theatres: [] }
    }

    //When component is mounted:
    async componentDidMount() {
        const { data } = await http.get(config.API_EndPoint)
        this.setState({ theatres: data.theatres })
    }
    render() {
        var { theatres } = this.state

        return (
            <div className="row theatre-month">
                {theatres.length ?
                    theatres.map((theatre) =>
                        <Theatre
                            key={theatre.id}
                            theatre={theatre}
                            scenes={theatre.scenes}
                        />) : <h1>NO THEATRES</h1>}
            </div>
        );
    }
}

export default Theatres;