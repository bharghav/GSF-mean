import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Main_Layout from '../layout/Main-Layout';
import Users from '../users/Users';

class MainLayoutRoute extends Component {
    state = {}
    render() {
        return (
            <Main_Layout>
                <Route path="/users" component={Users} />
            </Main_Layout>
        );
    }
}

export default MainLayoutRoute;