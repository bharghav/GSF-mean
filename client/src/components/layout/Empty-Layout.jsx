import React, { Component } from 'react';
class EmptyLayout extends Component {
    state = {}
    render() {
        return (
            <div className="container">
                {this.props.children}
            </div>
        );
    }
}

export default EmptyLayout;