import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class footer extends Component {
    render() {
        return (
            <div>
                {/* footer */}
                <footer className="page-footer font-small blue">
                    {/* Copyright */}
                    <div className="footer-copyright text-center py-3">جميع الحقوق محفوظة @2020
          <Link to="/"> مسرح    عشرة على عشرة</Link>
                    </div>
                    {/* Copyright */}
                </footer>
                {/* end footer */}
            </div>
        );
    }
}

export default footer;