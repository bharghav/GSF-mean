import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import MainLayout from '../layout/Main-Layout';
import Users from '../users/Users';
import Clients from '../clients/Clients';


class MainLayoutRoute extends Component {

    render() {
        return (
            <MainLayout>
                <Route path="/users" component={Users} />
                <Route path="/clients" component={Clients} />
            </MainLayout>
        );
    }
}

export default MainLayoutRoute;