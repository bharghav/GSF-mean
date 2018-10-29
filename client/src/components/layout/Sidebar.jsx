import React, { Component } from 'react';
class Sidebar extends Component {
    state = {}
    render() {
        return (
            <nav className="pcoded-navbar">
                <div className="nav-list">
                    <div className="pcoded-inner-navbar main-menu">
                        <div className="pcoded-navigation-label">Navigation</div>
                        <ul className="pcoded-item pcoded-left-item">
                            <li className="pcoded-hasmenu active pcoded-trigger">
                                <a href="javascript:void(0)" className="waves-effect waves-dark">
                                    <span className="pcoded-micon"><i className="feather icon-home"></i></span>
                                    <span className="pcoded-mtext">Dashboard</span>
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className="active">
                                        <a href="addUser" className="waves-effect waves-dark">
                                            <span className="pcoded-mtext">Add User</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a href="users" className="waves-effect waves-dark">
                                            <span className="pcoded-mtext">User List</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a href="dashboard-analytics.html" className="waves-effect waves-dark">
                                            <span className="pcoded-mtext">Analytics</span>
                                            <span className="pcoded-badge label label-info ">NEW</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>






                        </ul>








                    </div>
                </div>
            </nav>
        );
    }
}

export default Sidebar;