import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Modal } from 'react-bootstrap';


class Clients extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            clients: [],
            clientId: '',
            clientName: '',
            showModal: false,
            id: '',
            message: '',
            statusCode: '',
            msgClass: ''
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
        this.setState({ clientId: evt.target.value });
    }

    onChangeClientName(evt) {
        this.setState({ clientName: evt.target.value });
    }

    handleSubmit(event) {
        event.persist();
        const { id, clientId, clientName } = this.state;
        this.addClient(id, clientId, clientName);
    }

    addClient(id, clientId, clientName) {
        const reqData = {
            "clientId": clientId,
            "clientName": clientName
        };
        const updateData = {
            "id": id,
            "clientId": clientId,
            "clientName": clientName
        }
        if (id) {
            fetch('http://localhost:4500/clients/update',
                {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(updateData)
                })
                .then(response => response.json())
                .then((response) => {
                    if (response.statusCode === 200) {
                        this.setState({ message: response.message, statusCode: response.statusCode, msgClass: 'alert alert-success' });
                        this.modalPopupClose();
                        this.loadData();
                    } else {
                        this.setState({ message: response.message, statusCode: response.statusCode, msgClass: 'alert alert-danger' });
                    }
                });

        } else {
            fetch('http://localhost:4500/clients/add',
                {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(reqData)
                })
                .then(response => response.json())
                .then((response) => {
                    if (response.statusCode === 200) {
                        this.setState({ message: response.message, statusCode: response.statusCode, msgClass: 'alert alert-danger' });
                        this.modalPopupClose();
                        this.loadData();
                    } else {
                        this.setState({ message: response.message, statusCode: response.statusCode, msgClass: 'alert alert-danger' });
                    }
                });
        }

    }

    actionLinks = (cell, row, enumObject, rowIndex) => {
        return (
            <div>
                <a href="#" title={'Edit'} onClick={() => this.clientEdit(cell, row, rowIndex)}>
                    <i className="fa fa-pencil" aria-hidden="true"></i>
                    <span> Edit</span>
                </a>
                <span className="btn-space"><a href="#" title={'Delete'} onClick={() => this.clientDelete(cell, row, rowIndex)}>
                    <i className="fa fa-trash" aria-hidden="true"></i>
                    <span> Delete</span>
                </a></span>
            </div>
        )

            ;
    }

    modalPopupClose() {
        this.setState({ showModal: false, id: '', clientId: '', clientName: '' });
    }

    modalPopupOpen() {
        this.setState({ showModal: true, id: '', clientId: '', clientName: '' });
    }


    clientEdit = (cell, row, rowIndex) => {
        const clientId = row.clientId;
        const Id = row.id;
        const clientName = row.clientName;
        this.setState({ showModal: true, clientId: clientId, clientName: clientName, id: Id });
    }

    clientDelete = (cell, row, rowIndex) => {
        if (window.confirm('Are you sure you wish to delete this item?')) {
            const Id = row.id;
            if (Id !== null && Id !== '') {
                this.deleteClient(Id);
            }
        }
    }

    // delete client
    deleteClient(id) {
        const reqData = {
            "_id": id
        };
        fetch('http://localhost:4500/clients/delete',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(reqData)
            })
            .then(response => response.json())
            .then((response) => {
                if (response.statusCode === 200) {
                    this.setState({ id: '', message: response.message, statusCode: response.statusCode, msgClass: 'alert alert-success' });
                    this.loadData();
                } else {
                    this.setState({ id: '', message: response.message, statusCode: response.statusCode, msgClass: 'alert alert-danger' });
                }
            });
    }


    render() {
        let errormsg;

        if (this.state.message && this.state.statusCode === 400) {
            errormsg = <div className="col-sm-12"><span className="failure_msg">{this.state.message}</span></div>
        } else {
            errormsg = <div className="col-sm-12"><span className="success_msg">{this.state.message}</span></div>
        }
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
                                {errormsg}
                                <button onClick={this.modalPopupOpen.bind(this)} type="button" className="btn btn-primary" data-toggle="modal" data-target="#clientModal">
                                    +Add Client
                                </button>
                                {
                                    (this.state.isLoaded) ? (
                                        <BootstrapTable data={this.state.clients}
                                            options={options} pagination={true} striped
                                            hover noDataIndication="Table is Empty">
                                            <TableHeaderColumn dataField='id' headerAlign='center' expandable={false} isKey width='180' hiddenOnInsert> ID</TableHeaderColumn>
                                            <TableHeaderColumn dataField='clientId' dataSort={true} width='300' >Client Id</TableHeaderColumn>
                                            <TableHeaderColumn dataField='clientName' dataSort={true} expandable={false} width='300'>Client Name</TableHeaderColumn>
                                            <TableHeaderColumn dataField='edit' dataFormat={this.actionLinks.bind(this)}>Actions</TableHeaderColumn>
                                        </BootstrapTable>
                                    ) : (
                                            <div>loading...</div>
                                        )
                                }

                            </div>
                        </div>
                    </div>
                </div>
                <Modal show={this.state.showModal} onHide={this.modalPopupClose.bind(this)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add/Edit Client</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form className="form-horizontal" name="frm" onSubmit={this.props.handleSubmit}>
                            <input type="hidden" name="id" id="id" value={this.state.id} />
                            <div className="modal-body">
                                <div className="form-group">
                                    <label className="control-label col-sm-3" htmlFor="clientId">Client Id:</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" id="clientId" placeholder="Client Id" onChange={this.onChangeClientId.bind(this)} value={this.state.clientId} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-3" htmlFor="clientName">Client Name:</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" id="clientName" placeholder="Client Name" onChange={this.onChangeClientName.bind(this)} value={this.state.clientName} />
                                    </div>
                                </div>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.modalPopupClose.bind(this)}>Close</button>
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
                    </Modal.Body>
                </Modal>

            </div>


        );
    }


}

export default Clients;