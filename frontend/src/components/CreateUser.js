import React, { Component } from 'react';
import axios from 'axios';

class CreateUser extends Component {

  state = {
    users: [],
    username : ''
  }

  async componentDidMount() {
    const res = await axios.get('http://localhost:4000/api/users');
    this.setState({
      users : res.data
    });
  }

  onChangeUsername = (e) => {
    this.setState({
      username : e.target.value
    });

  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <div className="card card-body">
            <h3>Create new user </h3>
            <form>
              <div className="form-group">
                <input type="text" className="form-control" onChange={this.onChangeUsername}/>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-8">
          <ul className="list-group">
            {this.state.users.map(user => <li key={user._id} className="list-group-item list-group-item-action">{user.username}</li>)}
          </ul>
        </div>
      </div>
    );
  }

}

export default CreateUser;
