import React, { Component } from 'react';
class Users extends Component {
    state = {}

    constructor(props){
        super(props);

        this.state = {
            usersList: [],
            errorMessage: null
        }
    }


    componentDidMount() {
        
        fetch('http://localhost:4500/users',{ method: 'GET'})
        .then((result) => {
            return  result.json();
        }).then((jsonResult) => {
            this.setState({ usersList: jsonResult.users });
        });
    }

    _renderObject(ObjectTest){

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
    
    render() {
        return (
            <div className="col-xl-12">         
                <div className="card">
                    <div className="card-header">
                        <h5>Users List</h5>
                        <span>use class <code>table</code> inside table element</span>
                        
                    </div>
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

export default Users;