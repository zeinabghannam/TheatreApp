import React, { Component } from 'react';
import Theatre from './theatre';

class Theatres extends Component {
    //this is dummy data:
    state = {
        theatres: [
            { id: 1, title: "title", date: "13/09/2020", scenes: [{ id: 1, title: "scene title", text: "scene text", question: "question text" }, { id: 1, title: "scene title", text: "scene text", question: "question text" }, { id: 1, title: "scene title", text: "scene text", question: "question text" }, { id: 1, title: "scene title", text: "scene text", question: "question text" }, { id: 1, title: "scene title", text: "scene text", question: "question text" }] },
            { id: 2, title: "title", date: "13/09/2020", scenes: [{ id: 1, title: "scene title", text: "scene text", question: "question text" }, { id: 1, title: "scene title", text: "scene text", question: "question text" }, { id: 1, title: "scene title", text: "scene text", question: "question text" }, { id: 1, title: "scene title", text: "scene text", question: "question text" }, { id: 1, title: "scene title", text: "scene text", question: "question text" }] },
            { id: 3, title: "title", date: "13/09/2020", scenes: [{ id: 1, title: "scene title", text: "scene text", question: "question text" }, { id: 1, title: "scene title", text: "scene text", question: "question text" }, { id: 1, title: "scene title", text: "scene text", question: "question text" }, { id: 1, title: "scene title", text: "scene text", question: "question text" }, { id: 1, title: "scene title", text: "scene text", question: "question text" }] },
            { id: 4, title: "title", date: "13/09/2020", scenes: [{ id: 1, title: "scene title", text: "scene text", question: "question text" }, { id: 1, title: "scene title", text: "scene text", question: "question text" }, { id: 1, title: "scene title", text: "scene text", question: "question text" }, { id: 1, title: "scene title", text: "scene text", question: "question text" }, { id: 1, title: "scene title", text: "scene text", question: "question text" }] },
            { id: 5, title: "title", date: "13/09/2020", scenes: [{ id: 1, title: "scene title", text: "scene text", question: "question text" }, { id: 1, title: "scene title", text: "scene text", question: "question text" }, { id: 1, title: "scene title", text: "scene text", question: "question text" }, { id: 1, title: "scene title", text: "scene text", question: "question text" }, { id: 1, title: "scene title", text: "scene text", question: "question text" }] },
            { id: 6, title: "title", date: "13/09/2020", scenes: [{ id: 1, title: "scene title", text: "scene text", question: "question text" }, { id: 1, title: "scene title", text: "scene text", question: "question text" }, { id: 1, title: "scene title", text: "scene text", question: "question text" }, { id: 1, title: "scene title", text: "scene text", question: "question text" }, { id: 1, title: "scene title", text: "scene text", question: "question text" }] },
            { id: 7, title: "title", date: "13/09/2020", scenes: [{ id: 1, title: "scene title", text: "scene text", question: "question text" }, { id: 1, title: "scene title", text: "scene text", question: "question text" }, { id: 1, title: "scene title", text: "scene text", question: "question text" }, { id: 1, title: "scene title", text: "scene text", question: "question text" }, { id: 1, title: "scene title", text: "scene text", question: "question text" }] },
            { id: 8, title: "title", date: "13/09/2020", scenes: [{ id: 1, title: "scene title", text: "scene text", question: "question text" }, { id: 1, title: "scene title", text: "scene text", question: "question text" }, { id: 1, title: "scene title", text: "scene text", question: "question text" }, { id: 1, title: "scene title", text: "scene text", question: "question text" }, { id: 1, title: "scene title", text: "scene text", question: "question text" }] },
            { id: 9, title: "title", date: "13/09/2020", scenes: [{ id: 1, title: "scene title", text: "scene text", question: "question text" }, { id: 1, title: "scene title", text: "scene text", question: "question text" }, { id: 1, title: "scene title", text: "scene text", question: "question text" }, { id: 1, title: "scene title", text: "scene text", question: "question text" }, { id: 1, title: "scene title", text: "scene text", question: "question text" }] },
            { id: 10, title: "title", date: "13/09/2020", scenes: [{ id: 1, title: "scene title", text: "scene text", question: "question text" }, { id: 1, title: "scene title", text: "scene text", question: "question text" }, { id: 1, title: "scene title", text: "scene text", question: "question text" }, { id: 1, title: "scene title", text: "scene text", question: "question text" }, { id: 1, title: "scene title", text: "scene text", question: "question text" }] },
        ]
    }
    constructor(props) {
        super(props);
    }

    render() {
        let theatreslist = this.state.theatres.map((theatre) =>
            <Theatre
                key={theatre.id}
                theatre={theatre}
                scenes ={theatre.scenes}
            />);
        return (
            <div className="row theatre-month">
                {theatreslist}
            </div>
        );
    }
}

export default Theatres;