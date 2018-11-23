import React, { Component } from 'react';


import Header from '../layout/Header'
import Sidebar from '../layout/Sidebar';
import Footer from '../layout/Footer';
class Main_Layout extends Component {
    state = {}
    render() {
        return (
            <div className="container body">
                <div className="main_container">
                    <div className="col-md-3 left_col">
                        <Sidebar />
                    </div>
                    <Header />
                    <div className="right_col" role="main">
                        {this.props.children}
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Main_Layout;