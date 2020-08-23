import React, { Component } from 'react';
import Theatre from './theatre';
import http from '../services/httpService'
import config from '../config.json'
import WithLoadingIcon from './../hoc/WithLoadingIcon';
import Loader from 'react-loader-spinner'


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
        document.title = "المسارح المتوفرة"
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
                        />) :
                   <div className="margin-auto">
                        <Loader
                        type="Bars"
                        color="#3973ac"
                        height={100}
                        width={100}
                    // timeout={30000} 
                    />
                   </div>
                }
            </div>
        );
    }
}

export default WithLoadingIcon(Theatres);