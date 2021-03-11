import React ,{ Component } from 'react';

export default class CustomerRow extends Component {
    render(){
        let {id,Name,Gender,Address}=this.props.customer;
        return(
            <div>
                <span>{Name}</span>
                <span>{Gender}</span>
                <span>{Address}</span>
                <button type="button" onClick={()=>this.deleteRow(id)}>&times;</button>
            </div>
        )
    }
    deleteRow(id){
        console.log("deleting row "+id)
        this.props.delEvent(id);
    }
}