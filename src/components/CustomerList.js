import React, { Component } from 'react'
import customers from './data';
import Filter from './Filter';
import CustomerRow from './CustomerRow';

export default class CustomerList extends Component {
    state={
            "customers":customers
    };
    render() {
        return (
            <div>
                <Filter/>
                <h1> Customer List</h1>
                {
                    this.state.customers.customers.map(c=><CustomerRow customer={c} key={c.id}/>)
                }
            </div>
        )
    }
}
