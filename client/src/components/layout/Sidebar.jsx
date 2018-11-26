import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
    state = {}
    render() {
        return (
            <div className="left_col scroll-view">
                <div className="navbar nav_title" style={{ border: 0 }}>
                    <Link to="/" className="site_title"><i className="fa fa-paw"></i> <span>React Application</span></Link>
                </div>
                <div className="clearfix"></div>
                <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
                    <div className="menu_section">
                        <ul className="nav side-menu">
                            <li><Link to="/users"><i className="fa fa-user"></i> User List </Link></li>
                            <li><Link to="/clients"><i className="fa fa-table"></i> Client List </Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;