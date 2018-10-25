import React, { Component } from 'react';


import Header from '../layout/Header'
import Sidebar from '../layout/Sidebar';
class MainLayout extends Component {
    state = {}
    render() {
        return (

            <div id="pcoded" className="pcoded">
                <div className="pcoded-overlay-box"></div>
                <div className="pcoded-container navbar-wrapper">
                    <Header />
                    <Sidebar />
                    <div className="pcoded-main-container">
                        <div className="pcoded-wrapper">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default MainLayout;