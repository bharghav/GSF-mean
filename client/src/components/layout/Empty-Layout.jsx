import React, { Component } from 'react';
class EmptyLayout extends Component {
    state = {}
    render() {
        return (
            <div className="login_wrapper">
                {this.props.children}
            </div>
        );
    }
}

export default EmptyLayout;