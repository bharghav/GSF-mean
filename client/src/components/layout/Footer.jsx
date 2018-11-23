import React, { Component } from 'react';
class Footer extends Component {

    render() {
        return (
            <footer>
                <div className="pull-right">
                    Copyright &copy;
                    {(new Date().getFullYear())} All rights reserved
                </div>
                <div className="clearfix"></div>
            </footer>
        );
    }
}

export default Footer;