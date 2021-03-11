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
                    this.state.customers.map(c=><CustomerRow customer={c} key={c.id} delEvent ={(id)=> this.deleteCustomer(id) }/>)
                }
            </div>
        )
    }
deleteCustomer(custId){

    console.log("Delete customer id"+custId+" in customer list")
    //arr.filter(condition)==> returns another array
    let custs= this.state.customers.filter(c=>c.id!=custId);
    this.setState({"customers":custs});
}
}
