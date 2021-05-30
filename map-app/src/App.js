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

    let usersData = [];
    if (localStorage.localUsers) {
      usersData = JSON.parse(localStorage.localUsers);
    }

    let mapsData = [];
    if (localStorage.localMaps) {
      mapsData = JSON.parse(localStorage.localMaps);
    }

    let PlacesData = [];
    if (localStorage.localPlaces) {
      PlacesData = JSON.parse(localStorage.localUsers);
    }

    this.state = {
      userslist: usersData,
      maps: mapsData,
      places: PlacesData
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
    console.log('this.state.userslist', this.state.userslist)
    const localUsersString = JSON.stringify(this.state.userslist.concat(user));
  
    localStorage.localUsers = localUsersString

    this.setState({
      user: user,
      userslist: this.state.userslist.concat(user)
    })
  }

  // add new map to map list
  addMap = (map) => {
    const localMapsString = JSON.stringify(this.state.maps.concat(map));
   
    localStorage.localMaps = localMapsString;
    this.setState({
      maps: this.state.maps.concat(map)
    })
  }

  addPlace = (place) => {
    const localPlacessString = JSON.stringify(this.state.maps.concat(place));
    console.log(localPlacessString);
    localStorage.localPages = localPlacessString
    this.setState({
      places: this.state.places.concat(place)
    })
  }

  render() {
    return (
      <HashRouter>
        <Route exact path={['/home', '/maps', '/list/:id', '/edit-list/:id']}>
          <AppNavbar exact
            user={this.state.user}
            logout={this.logout} />
        </Route>

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

        <Route exact path={'/'}>
          <Signup
            addUser={this.addUser}
            user={this.state.user}
            users={this.state.userslist}>

          </Signup>
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
            list={this.state.places}
            addPlace={this.addPlace}>
          </Lists>
        </Route>

      </HashRouter>

    );
  }
}

export default App;