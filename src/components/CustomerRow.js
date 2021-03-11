import React ,{ Component } from 'react';

export default class CustomerRow extends Component {
    render(){
        let {id,Name,Gender,Address}=this.props.customer;
        return(
            <div>
                <span>{Name}</span>
                <span>{Gender}</span>
                <span>{Address}</span>
            </div>
        )
    }
}