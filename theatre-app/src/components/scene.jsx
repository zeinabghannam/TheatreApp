import React, { Component } from 'react';
import util from '../utils.js'

class scene extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let number = parseInt(this.props.scene.number)
    let sceneTitile = util.SCENES_TITLES[number - 1] + " - " + util.Art_SUBCATEGORIES[number - 1]
    return (
      <div>
        {/* scene block */}
        <div className="scene-block" scene-data={this.props.scene.id}>
          <div className="scene-title">
            <h5> {sceneTitile} </h5>
          </div>
          <div className=" scene-text">
            <p>  {this.props.scene.script}</p>
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