import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { HashRouter, Route } from 'react-router-dom';


import AppNavbar from './components/AppNavbar';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Maps from './pages/Maps';
import CreateMap from './pages/CreateMap';
import EditMapList from './pages/EditMapList';

import user from './data/users.json'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "Sarai",
        email: "sr.roiz@gmail.com",
        pwd: 'pwd'
      },
      userslist: user
    }
  }

  logout = () => {
    this.setState({
      user: null
    })
  }

  login = (userObj) => {
    this.setState({
      user: userObj
    })

  }

  addUser = (user) => {
    this.setState({
      user: user,
      userslist: this.state.userslist.concat(user)
    })
  }

  render() {
    return (
      <HashRouter>

        <AppNavbar
          user={this.state.user}
          logout={this.logout} />

          <Route exact path={'/'}>
            <HomePage></HomePage>
          </Route>

          <Route exact path={'/login'}>
            <Login
              userslist={this.state.userslist}
              login={this.login}></Login>
          </Route>

          <Route exact path={'/signup'}>
            <Signup addUser={this.addUser}></Signup>
          </Route>

          <Route exact path={'/maps'}>
            <Maps
              user={this.state.user}>

            </Maps>
          </Route>

          <Route exact path={'/create-map'}>
            <CreateMap
              user={this.state.user}>
            </CreateMap>
          </Route>

          <Route exact path={'/edit-list'}>
            <EditMapList
              user={this.state.user}>

            </EditMapList>
          </Route>

      </HashRouter>
    );
  }
}

export default App;