import React, { Component } from 'react';

class scene extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {/* scene block */}
        <div className="scene-block" scene-data={this.props.scene.id}>
          <div className="scene-title">
            <h5> {this.props.scene.title} </h5>
          </div>
          <div className=" scene-text">
            <p>  {this.props.scene.text}</p>
          </div>
          {/* qeustion 1 */}
          <div className="questions-table">
            <table className="table table-hover table-stripped">
              <tbody><tr>
                <td>سؤال1</td>
                <td> {this.props.scene.question} </td>
              </tr>
              </tbody></table>
          </div>
        </div>
      </div>
    );
  }
}

export default scene;