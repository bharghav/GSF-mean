import React, { Component } from 'react';

const $ = require('jquery');
$.DataTable = require('datatables.net');
class Tbl extends Component {
    componentDidMount() {

        this.$el = $(this.el);
        this.$el.DataTable(
            {
                data: this.props.data,
                columns: [
                    { title: "Name" },
                    { title: "Position" },
                    { title: "Office" },
                    { title: "Extn." },
                    { title: "Start date" },
                    { title: "Salary" },
                ]
            }
        )
    }

    componentWillUnmount() {

    }
    render() {
        return (
            <div>
                <table id="example" className="display" width="100%" ref={el => this.el = el}></table>
            </div>
        );
    }
}

export default Tbl;