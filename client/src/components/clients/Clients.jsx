import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class Clients extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            clients: [],
            clientId: '',
            clientName: ''
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

    onChangeClientId(evt) {
        //const value = evt.target.value.trim();
        this.setState({ clientId: evt.target.value });
    }

    onChangeClientName(evt) {
        //const value = evt.target.value.trim();
        this.setState({ clientName: evt.target.value });
    }

    handleSubmit(event) {
        event.persist();
        const { clientId, clientName } = this.state;
        this.addClient(clientId, clientName);
    }

    addClient(clientId, clientName) {
        const reqData = {
            "clientId": clientId,
            "clientName": clientName
        };
        fetch('http://localhost:4500/clients/add',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(reqData)
            })
            .then((response) => {
                this.closePopUp();
                this.loadData();
            });
    }
    closePopUp() {
        document.getElementById("hidePopUpBtn").click();
    }

    render() {

        const options = {
            //insertBtn: this.createCustomInsertButton,
            //insertModalHeader: this.createCustomModalHeader,
            // insertModalFooter: this.createCustomModalFooter,
            //deleteBtn: this.createCustomDeleteButton,
            sizePerPage: 5,  // which size per page you want to locate as default
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
                                <button id="hidePopUpBtn" type="button" className="btn btn-primary" data-toggle="modal" data-target="#clientModal">
                                    +Add Client
                                </button>
                                {
                                    (this.state.isLoaded) ? (
                                        <BootstrapTable data={this.state.clients}
                                            options={options} pagination={true} striped
                                            hover insertRow={false} noDataIndication="Table is Empty">
                                            <TableHeaderColumn dataField='id' headerAlign='center' expandable={false} isKey width='180' hiddenOnInsert> ID</TableHeaderColumn>
                                            <TableHeaderColumn dataField='clientId' dataSort={true} width='300' >Client Id</TableHeaderColumn>
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
                <div className="modal fade" id="clientModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">Add/Edit Client</h4>
                            </div>
                            <form className="form-horizontal" name="frm" onSubmit={this.props.handleSubmit}>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label className="control-label col-sm-3" htmlFor="clientId">Client Id:</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="clientId" placeholder="Client Id" onChange={this.onChangeClientId.bind(this)} value={this.props.clientId} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-sm-3" htmlFor="clientName">Client Name:</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="clientName" placeholder="Client Name" onChange={this.onChangeClientName.bind(this)} value={this.props.clientName} />
                                        </div>
                                    </div>

                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary" onClick={(evt) => {
                                        if (evt !== undefined && evt.preventDefault) { evt.preventDefault(); }
                                        this.setState({
                                            has_error: false,
                                            error: null,
                                            error_msg: ''
                                        }, () => {
                                            this.handleSubmit(evt);
                                        });
                                    }} >Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >


        );
    }


}

export default Clients;