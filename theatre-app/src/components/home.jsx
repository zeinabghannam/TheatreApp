import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class home extends Component {
    render() {
        return (
            <div>
                {/* begin jumbotron */}
                <div className="jumbotron theatre-jumbo">
                    <h1 className="display-4">مرحبا في  <i className="brand-text">مسرح عشرة على عشرة</i> !</h1>
                    <p className="lead">من خلال هذا الموقع سيتم ادارة جميع المسارح التي تقام شهريا بما فيها المشاهد والاسئلة المتعلقة بكل
          مشهد </p>
                    <hr className="my-4" />
                    <div className="row">
                        <div className="col-md-3 offset-md-3">
                            <Link className="btn btn-primary btn-lg btn-theatre" to="all" role="button">المسارح المتاحة حاليا </Link>
                        </div>
                        <div className="col-md-3">
                            <Link className="btn btn-primary btn-lg btn-theatre btn-add-theatre" to="add" role="button"> اضافة مسرح
              جديد </Link>
                        </div>
                    </div>
                </div>
                {/* end jumbotron */}
            </div>
        );
    }
}

export default home;