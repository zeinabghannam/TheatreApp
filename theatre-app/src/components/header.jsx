import React, { Component } from 'react';
import Logo from '../img/logo.png'
import { Link } from 'react-router-dom';

class hello extends Component {
    render() {
        return (
            <div>
                {/* navbar component */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    {/* <Link className="navbar-brand" to="index.html"><img src={Logo} className="logo" alt="logo" /></Link> */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">الرئيسية <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/all">المسارح</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/add">اضافة مسرح</Link>
                            </li>
                        </ul>
                        {/* search */}
                        {/* <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                  </form> */}
                    </div>
                </nav>
                {/* end navbar component */}
            </div>
        );
    }
}

export default hello;