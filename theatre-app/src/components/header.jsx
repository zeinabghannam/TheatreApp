import React, { Component } from 'react';
import Logo from '../img/logo.png'
import { NavLink } from 'react-router-dom';

class hello extends Component {
    render() {
        return (
            <div>
                {/* navbar component */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    {/* <NavLink className="navbar-brand" to="index.html"><img src={Logo} className="logo" alt="logo" /></NavLink> */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <NavLink className="nav-link" to="/" exact activeClassName="active-link">الرئيسية <span className="sr-only">(current)</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/all"  exact activeClassName="active-link">المسارح</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/add"  exact activeClassName="active-link">اضافة مسرح</NavLink>
                            </li>
                            <li className="nav-item active">
                                <NavLink className="nav-link" to="/about"  exact activeClassName="active-link">حول التطبيق <span className="sr-only">(current)</span></NavLink>
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