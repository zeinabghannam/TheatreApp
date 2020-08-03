import React, { Component } from 'react';
import BgVideo from '../img/bgvid.mp4'

class backgroundVideo extends Component {
    render() {
        return (
            <div>
                <video playsInline autoPlay muted loop poster="polina.jpg" id="bgvid">
                    <source src={BgVideo} type="video/mp4" />
                    <source src="polina.webm" type="video/webm" />
                </video>
            </div>
        );
    }
}

export default backgroundVideo;