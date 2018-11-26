import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class Clients extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            clients: []
        }

    }

    loadData() {
        fetch('http://localhost:4500/clients', { method: 'GET' })
            .then(response => response.json())
            .then(response => this.setState({ clients: response.clients, isLoaded: true }))
            .catch(err => console.error(err));
    }

    componentDidMount() {
        this.loadData();
    }

    componentWillUnmount() {
        this.setState({ clients: [] });
    }


    render() {
        const options = {
            sizePerPage: 10,  // which size per page you want to locate as default
            pageStartIndex: 1, // where to start counting the pages
            paginationSize: 3,  // the pagination bar size.
            prePage: 'Prev', // Previous page button text
            nextPage: 'Next', // Next page button text
            firstPage: 'First', // First page button text
            lastPage: 'Last', // Last page button text
            //paginationShowsTotal: this.renderShowsTotal,  // Accept bool or function
            paginationShowsTotal: true,
            hideSizePerPage: true// > You can hide the dropdown for sizePerPage
            // alwaysShowAllBtns: true // Always show next and previous button
            // withFirstAndLast: false > Hide the going to First and Last page button
        };
        return (
            <div>
                <div className="page-title">
                    <div className="title_left">
                        <h3>Clients List</h3>
                    </div>
                </div>
                <div className="clearfix"></div>
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="x_panel">
                            <div className="x_content">
                                {
                                    (this.state.isLoaded) ? (
                                        <BootstrapTable data={this.state.clients}
                                            options={options} pagination={true} striped
                                            hover >
                                            <TableHeaderColumn dataField='id' headerAlign='center' expandable={false} isKey width='180'> ID</TableHeaderColumn>
                                            <TableHeaderColumn dataField='clientId' dataSort={true} width='300'>ClientId</TableHeaderColumn>
                                            <TableHeaderColumn dataField='clientName' dataSort={true} expandable={false} >Client Name</TableHeaderColumn>
                                        </BootstrapTable>
                                    ) : (
                                            <div>loading...</div>
                                        )
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }


}

export default Clients;