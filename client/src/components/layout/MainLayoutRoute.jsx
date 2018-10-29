import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import MainLayout from '../layout/Main-Layout';
import Users from '../users/Users';

class MainLayoutRoute extends Component {
    state = {}
    render() {
        return (
            <MainLayout>
                <Route path="/users" component={Users} />
            </MainLayout>
        );
    }
}

export default MainLayoutRoute;