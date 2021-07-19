// ** delete-user.component.js ** //

import React, { Component } from 'react';
import axios from 'axios';

export default class DeleteUser extends Component {

    constructor(props) {
        super(props)
        this.onChangeUserID = this.onChangeUserID.bind(this);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onChangeUserPW = this.onChangeUserPW.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            id: '',
            name: '',
            email: '',
            password: '',
            
        }
    }

    onChangeUserID(e) {
        this.setState({ id: e.target.value })
    }
    onChangeUserName(e) {
        this.setState({ name: e.target.value })
    }

    onChangeUserEmail(e) {
        this.setState({ email: e.target.value })
    }
    onChangeUserPW(e) {
        this.setState({ password: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()

        const userObject = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        };

        axios.put(`http://localhost:4000/users/update/${this.state.id}`, userObject)
    
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
                        <label>Add User ID Of Account We Want To Update</label>
                        <input type="text" value={this.state.id} onChange={this.onChangeUserID} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Update Username</label>
                        <input type="text" value={this.state.name} onChange={this.onChangeUserName} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Update Email</label>
                        <input type="text" value={this.state.email} onChange={this.onChangeUserEmail} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Update Password</label>
                        <input type="text" value={this.state.password} onChange={this.onChangeUserPW} className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-success btn-block" />
                    </div>
                </form>
            </div>
        )
    }
}