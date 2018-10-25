import React, { Component } from 'react';
class Users extends Component {
    state = {}
    render() {
        return (
            <div className="col-xl-12">

                <div className="card">
                    <div className="card-header">
                        <h5>Basic Table</h5>
                        <span>use class <code>table</code> inside table element</span>
                        <div className="card-header-right">                                                             <ul className="list-unstyled card-option">                                                                 <li className="first-opt"><i className="feather icon-chevron-left open-card-option"></i></li>                                                                 <li><i className="feather icon-maximize full-card"></i></li>                                                                 <li><i className="feather icon-minus minimize-card"></i></li>                                                                 <li><i className="feather icon-refresh-cw reload-card"></i></li>                                                                 <li><i className="feather icon-trash close-card"></i></li>                                                                 <li><i className="feather icon-chevron-left open-card-option"></i></li>                                                             </ul>                                                         </div>
                    </div>
                    <div className="card-block table-border-style">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
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