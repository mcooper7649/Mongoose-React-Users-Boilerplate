// ** delete-user.component.js ** //

import React, { Component } from 'react';
import axios from 'axios';

export default class DeleteUser extends Component {

    constructor(props) {
        super(props)
        this.onChangeUserID = this.onChangeUserID.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            id: ''
        }
    }
    onChangeUserID(e) {
        this.setState({ id: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const userObject = {
            id: this.state.id
        };

        axios.delete(`http://localhost:4000/users/delete/${userObject.id}`)
        
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });

        this.setState({ id: ''})
    }


    render() {
        return (
            <div className="wrapper">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add User ID Of Account We Want To Delete</label>
                        <input type="text" value={this.state.id} onChange={this.onChangeUserID} className="form-control" />
                    </div>
                    {/* <div className="form-group">
                        <label>Add User Email</label>
                        <input type="text" value={this.state.email} onChange={this.onChangeUserEmail} className="form-control" />
                    </div> */}
                    <div className="form-group">
                        <input type="submit" value="Delete User" className="btn btn-success btn-block" />
                    </div>
                </form>
            </div>
        )
    }
}