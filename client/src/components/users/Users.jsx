import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
export const FormErrors = ({ formErrors }) =>
    <div className='formErrors'>
        {Object.keys(formErrors).map((fieldName, i) => {
            if (formErrors[fieldName].length > 0) {
                return (
                    <p key={i}>{fieldName} {formErrors[fieldName]}</p>
                )
            } else {
                return '';
            }
        })}
    </div>

class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
            usersList: [],
            mode: 'list',
            name: '',
            city: '',
            amount: '',
            formErrors: { name: '', city: '', amount: '' },
            nameValid: false,
            cityValid: false,
            amountValid: false,
            formValid: false,
            redirect: false
        }

        this.showCreateCustomer = this.showCreateCustomer.bind(this);
        this.changeHandle = this.changeHandle.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
        this.getUsersList = this.getUsersList.bind(this);
    }

    formSubmit(e) {
        e.preventDefault();
        this.adduser();
    }

    adduser() {
        const reqData = {
            "name": this.state.name,
            "city": this.state.city,
            "amount": this.state.amount
        };
        fetch('http://localhost:4500/persons',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(reqData)
            })
            .then(this.getUsersList)
            .then((response) => {
                this.setState({
                    mode: 'list'
                });
            });
    }

    changeHandle(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value }, () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let nameValid = this.state.nameValid;
        let cityValid = this.state.cityValid;
        let amountValid = this.state.amountValid;

        switch (fieldName) {
            case 'name':
                nameValid = value.match(/^([a-zA-Z' ]+)$/);
                fieldValidationErrors.name = nameValid ? '' : ' is invalid';
                break;
            case 'city':
                cityValid = value.length >= 3;
                fieldValidationErrors.city = cityValid ? '' : ' is too short';
                break;
            case 'amount':
                amountValid = value.length >= 4;
                fieldValidationErrors.amount = amountValid ? '' : ' is too short';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            nameValid: nameValid,
            cityValid: cityValid,
            amountValid: amountValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({ formValid: this.state.nameValid && this.state.cityValid && this.state.amountValid });
    }

    showCreateCustomer() {
        this.setState({
            mode: 'add'
        });
    }

    componentDidMount() {
        if (localStorage.getItem('token')) {
            //console.log('storage checking')
        } else {
            this.setState({
                redirect: true
            });
        }
        this.getUsersList();
    }

    componentWillUnmount() {
        this.setState({ usersList: [] });
    }

    getUsersList() {
        fetch('http://localhost:4500/persons', { method: 'GET' })
            .then(response => response.json())
            .then(response => this.setState({ usersList: response.persons }))
            .catch(err => console.error(err));
    }

    _renderObject(ObjectTest) {

        return Object.entries(ObjectTest).map(([key, value], i) => {
            return (
                <tr key={key}>
                    <th>{++i}</th>
                    <th>{value.name}</th>
                    <th>{value.city}</th>
                    <th>{value.amount}</th>
                </tr>
            )
        })
    }
    errorClass(error) {
        return (error.length === 0 ? '' : 'alert alert-danger');
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/" />
        }

        if (this.state.mode === 'add') {
            return (
                <div className="col-sm-12">
                    <section className="login-block">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-sm-12">
                                    <form className="md-float-material form-material" name="createUserForm">
                                        <div className="auth-box card">
                                            <div className="card-block">
                                                <div className="row m-b-20">
                                                    <div className="col-md-12">
                                                        <h3 className="text-center txt-primary">Add User</h3>
                                                    </div>
                                                </div>
                                                <div className="panel panel-default">
                                                    <FormErrors formErrors={this.state.formErrors} />
                                                </div>
                                                <div className={`form-group ${this.errorClass(this.state.formErrors.name)}`}>
                                                    <input type="text" name="name" placeholder="Name" value={this.state.name} className="form-control" onChange={this.changeHandle} />
                                                    <span className="form-bar"></span>
                                                </div>
                                                <div className={`form-group ${this.errorClass(this.state.formErrors.city)}`}>
                                                    <input type="text" name="city" placeholder="Village/City" value={this.state.city} className="form-control" onChange={this.changeHandle} />
                                                    <span className="form-bar"></span>
                                                </div>
                                                <div className={`form-group ${this.errorClass(this.state.formErrors.amount)}`}>
                                                    <input type="text" name="amount" placeholder="Amount" value={this.state.amount} className="form-control" onChange={this.changeHandle} />
                                                    <span className="form-bar"></span>
                                                </div>
                                                <div className="row m-t-30">
                                                    <div className="col-md-12">
                                                        <button onClick={this.formSubmit} type="button" className="text-center" value="submit">SUBMIT</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            );
        } else {
            return (
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-header">
                            <h5>Users List</h5>
                            <button className="btn btn-primary pull-right" onClick={this.showCreateCustomer}>+Add</button>
                        </div>
                        <div className="clearfix"></div>
                        <div className="card-block table-border-style">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>S.No</th>
                                            <th>Name</th>
                                            <th>City/Village</th>
                                            <th>Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this._renderObject(this.state.usersList)}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Users;