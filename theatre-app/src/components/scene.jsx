import React, { Component } from 'react';

class scene extends Component {
    render() {
        return (
            <div>
                {/* scene block */}
      <div className="scene-block">
        <div className="scene-title">
          <h5>المشهد الاول</h5>
        </div>
        <div className=" scene-text">
          <p>نص المشهد</p>
        </div>
        {/* qeustion 1 */}
        <div className="questions-table">
          <table className="table table-hover table-stripped">
            <tbody><tr>
                <td>سؤال1</td>
                <td>نص السؤال </td>
              </tr>
              <tr>
                <td> سؤال2</td>
                <td>نص السؤال </td>
              </tr>
            </tbody></table>
        </div>
      </div>
            </div>
        );
    }
}

export default scene;