import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Maps from './pages/Maps';
import EditMapList from './pages/EditMapList';
import user from './data/users.json'
import maps from './data/maps.json'
import places from './data/places.json'
import Lists from './pages/Lists';
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "Sarai",
        email: "sr.roiz@gmail.com",
        pwd: "pwd",
        currentMap: ""
      },
      userslist: user,
      maps: maps,
      places: places,
    }
  }
  // log out from app
  logout = () => {
    this.setState({
      user: null
    })
  }
  // update the user on the app
  login = (userObj) => {
    this.setState({
      user: userObj
    })
  }
  // add new user for list of users
  addUser = (user) => {
    this.setState({
      user: user,
      userslist: this.state.userslist.concat(user)
    })
  }

  // add new map to map list
  addMap = (map) => {
    this.setState({
      maps: this.state.maps.concat(map)
    })
  }

  render() {
    return (
      <HashRouter>

        <AppNavbar
          user={this.state.user}
          logout={this.logout} />

        <Route exact path={'/home'}>
          <HomePage
            user={this.state.user}
            addMap={this.addMap}
            maps={this.state.maps}
          ></HomePage>
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
            user={this.state.user}
            list={this.state.maps}>

          </Maps>
        </Route>

        <Route exact path={'/list/:id'}>
          <Lists
            user={this.state.user}
            list={this.state.places}>
          </Lists>
        </Route>
        <Route exact path={'/edit-list/:id'}>
          <EditMapList
            user={this.state.user}>

          </EditMapList>
        </Route>

      </HashRouter>
    );
  }
}

export default App;