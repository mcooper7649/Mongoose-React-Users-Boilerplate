import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreateUser from "./components/create-user.component";
import DeleteUser from "./components/delete-user-component";
import UpdateUser from "./components/update-user-component";
import Users from "./components/users.component";

function App() {
  return (<Router>
    <div className="App">
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a className="navbar-brand">React Axios Tutorial</a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to={"/create-user"}>Create User</Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to={"/delete-user"}>Delete User</Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to={"/update-user"}>Update User</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/users"}>Users List</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Switch>
              <Route exact path='/' component={CreateUser} />
              <Route path="/create-user" component={CreateUser} />
              <Route path="/delete-user" component={DeleteUser} />
              <Route path="/update-user" component={UpdateUser} />
              <Route path="/users" component={Users} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  </Router>
  );
}

export default App;


