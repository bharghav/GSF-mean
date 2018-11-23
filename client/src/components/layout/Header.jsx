import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
    }
    logout() {
        localStorage.setItem('token', '')
        localStorage.clear();
        this.setState({
            redirect: true
        });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/" />
        }
        return (

            <div className="top_nav">
                <div className="nav_menu">
                    <nav>
                        <div className="nav toggle">
                            <Link to="#" id="menu_toggle"><i className="fa fa-bars"></i></Link>
                        </div>
                        <ul className="nav navbar-nav navbar-right">
                            <li className="">
                                <Link to="#" className="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                    <img src="assets/images/avatar.png" alt="" />
                                    <span className=" fa fa-angle-down"></span>
                                </Link>
                                <ul className="dropdown-menu dropdown-usermenu pull-right">
                                    <li><Link to="#" onClick={this.logout.bind(this)}><i className="fa fa-sign-out pull-right"></i> Log Out</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

        );
    }
}

export default Header;